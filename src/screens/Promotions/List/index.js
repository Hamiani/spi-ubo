import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get, remove } from "../../../store/actions/promotion";

import View from "./view";

const List = () => {
  const dispatch = useDispatch();

  const promotionsQuery = useSelector((state) => state.promotion.get);

  const onRemove = (data) =>
    dispatch(
      remove(
        data,
        () => {},
        () => {}
      )
    );

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return <View {...{ promotionsQuery, onRemove }} />;
};

export default List;
