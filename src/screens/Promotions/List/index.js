import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get, changeProcess } from "../../../store/actions/promotion";
import { openNotification } from "../../../utils/helpers";
import { TYPES, DEFAULT_MESSAGES } from "../../../utils/constants";

import View from "./view";

const List = () => {
  const dispatch = useDispatch();

  const promotionsQuery = useSelector((state) => state.promotion.get);
  const processQuery = useSelector((state) => state.promotion.changeProcess);

  const onChangeProcess = (data) => {
    dispatch(
      changeProcess(
        data,
        () => {
          dispatch(get());
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
        },
        () => {
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR,
          });
        }
      )
    );
  };

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return <View {...{ promotionsQuery, onChangeProcess, processQuery }} />;
};

export default List;
