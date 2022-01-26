import { useEffect, useCallback } from "react";
import _isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { fetchDynamicContentConfigOptions } from "src/features/DynamicContent/thunks/fetchConfigOptionsThunk";
import { RootState } from "src/store";

const useFetchDynamicContentConfigOptions = () => {
  const { configOptions, loading } = useSelector((state: RootState) => state.dynamicContentConfig);
  const dispatch = useDispatch();
  const boundAction = useCallback(() => {
    return dispatch(fetchDynamicContentConfigOptions());
  }, [dispatch]);

  useEffect(() => {
    if (!configOptions || _isEmpty(configOptions)) {
      boundAction();
    }
  }, [configOptions, boundAction]);

  return { configOptions, loading };
};

export default useFetchDynamicContentConfigOptions;
