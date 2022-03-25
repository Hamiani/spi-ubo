import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOne } from "../../../store/actions/ue";

import View from "./view";

const Detail = () => {
  const { code_Formation, code_ue} = useParams();
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  const ueQuery = useSelector((state) => state.ue.getOne);

  const onGoBack = () => goBack();

  useEffect(() => {
    dispatch(getOne());
  }, [dispatch, code_Formation, code_ue]);

  return <View {...{ueQuery, onGoBack}} />;
};

export default Detail;
