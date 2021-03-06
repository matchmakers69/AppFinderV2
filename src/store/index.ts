import { Action, ThunkAction, configureStore, EnhancedStore, ThunkDispatch } from "@reduxjs/toolkit";
import throttle from "lodash/throttle";
import { createWrapper, MakeStore, Context } from "next-redux-wrapper";
import { useDispatch } from "react-redux";
import { loadState, saveState } from "./browserStorage";
import { rootReducer, State } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  /**
   * @preloadedState restore the previously persisted state
   */
  preloadedState: loadState(),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;
export const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

const setupStore = (_arg): EnhancedStore => store;

const makeStore: MakeStore<State | any> = (context: Context) => {
  store.subscribe(
    /**
     * @lodash throttle to save the state once each 800ms
     */
    throttle(() => {
      const { auth } = store.getState();
      saveState({
        auth,
      });
    }, 800)
  );
  return setupStore(context);
};
export type AppStore = ReturnType<typeof makeStore>;

const wrapper = createWrapper<AppStore>(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});

export default wrapper;
