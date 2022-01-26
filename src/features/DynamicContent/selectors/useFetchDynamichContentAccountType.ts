import { useEffect, useCallback } from "react";
import _isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccountTypeByUsersRole } from "src/features/DynamicContent/thunks/fetchAccountTypeThunk";
import { RootState } from "src/store";

const useFetchDynamichContentAccountType = () => {
  const { accountTypes, loading } = useSelector((state: RootState) => state.dynamicContentConfig);
  const dispatch = useDispatch();
  const boundAction = useCallback(() => {
    return dispatch(fetchAccountTypeByUsersRole());
  }, [dispatch]);

  useEffect(() => {
    if (!accountTypes || _isEmpty(accountTypes)) {
      boundAction();
    }
  }, [accountTypes, boundAction]);

  return { accountTypes, loading };
};

export default useFetchDynamichContentAccountType;
