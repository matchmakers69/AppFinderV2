import { useEffect, useCallback } from "react";
import _isEmpty from "lodash/isEmpty";
import { useDispatch, useSelector } from "react-redux";
import { fetchDynamicContentReviewTools } from "src/features/DynamicContent/thunks/fetchReviewToolsThunk";
import { RootState } from "src/store";

const useFetchDynamicContentReviewTools = () => {
  const { reviewTools, loading } = useSelector((state: RootState) => state.dynamicContentConfig);
  const dispatch = useDispatch();
  const boundAction = useCallback(() => {
    return dispatch(fetchDynamicContentReviewTools());
  }, [dispatch]);

  useEffect(() => {
    if (!reviewTools || _isEmpty(reviewTools)) {
      boundAction();
    }
  }, [reviewTools, boundAction]);

  return { reviewTools, loading };
};

export default useFetchDynamicContentReviewTools;
