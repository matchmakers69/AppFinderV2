import { useEffect } from "react";
import _isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { fetchDynamicContentNames } from "src/features/DynamicContent/thunks/fetchDynamicContentNamesThunk";
import { RootState } from "src/store";

const useFetchDynamicContentNames = (arg: number) => {
  const { dynamicContentNames, loading } = useSelector((state: RootState) => state.dynamicContentNames);
  const dispatch = useDispatch();

  useEffect(() => {
    if (dynamicContentNames === null || _isEmpty(dynamicContentNames)) {
      dispatch(fetchDynamicContentNames(arg));
    }
  }, [dispatch, arg, dynamicContentNames]);

  return { dynamicContentNames, loading };
};

export default useFetchDynamicContentNames;
