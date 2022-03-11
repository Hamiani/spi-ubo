import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOne, remove } from "../../../store/actions/teacher";

import View from "./View";

const Detail = ({ filter, onGoBack }) => {
  const dispatch = useDispatch();

  const teacherQuery = useSelector((state) => state.teacher.getOne);
  const removeQuery = useSelector((state) => state.teacher.remove);

  const onRemove = (data) =>
    dispatch(
      remove(
        data,
        () => {},
        () => {}
      )
    );

  useEffect(() => {
    dispatch(getOne(filter));
  }, [dispatch, filter]);

  return <View {...{ teacherQuery, removeQuery, onRemove, onGoBack }} />;
};

export default Detail;
