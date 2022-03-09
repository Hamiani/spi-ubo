import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { get } from "../../../store/actions/promotion";
import { PATHS } from "../../../utils/constants";

import View from "./view";

const List = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const promotionsQuery = useSelector((state) => state.promotion.get);

  const onShow = ({ codeFormation, anneeUniversitaire }) =>
    push(`${PATHS.PROMOTIONS.LIST}/${codeFormation}/${anneeUniversitaire}`);

  const onCreate = () => push(PATHS.PROMOTIONS.CREATE);
  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return <View {...{ promotionsQuery, onShow, onCreate }} />;
};

export default List;
