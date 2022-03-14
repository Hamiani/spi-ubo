import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { get, remove, changeProcess } from "../../../store/actions/promotion";

import View from "./view";

const List = () => {
  const dispatch = useDispatch();

  const promotionsQuery = useSelector((state) => state.promotion.get);
  const processQuery = useSelector((state) => state.promotion.changeProcess);

  const onRemove = (data) =>
    dispatch(
      remove(
        data,
        () => {},
        () => {}
      )
    );

  const onChangeProcess = (data) => {
    dispatch(
      changeProcess(
        data,
        () => {
          dispatch(get());
        },
        () => {}
      )
    );
  };

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return (
    <View {...{ promotionsQuery, onRemove, onChangeProcess, processQuery }} />
  );
};

export default List;
