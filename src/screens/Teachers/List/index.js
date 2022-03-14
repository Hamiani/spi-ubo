import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { get, remove } from "../../../store/actions/teacher";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const List = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  const onRemove = (data) =>
    dispatch(
      remove(
        data,
        () => {
          dispatch(get());
        },
        () => {}
      )
    );
  const onCreate = () => push(PATHS.TEACHERS.CREATE);

  const teachersQuery = useSelector((state) => state.teacher.get);
  const removeQuery = useSelector((state) => state.teacher.remove);

  return <View {...{ teachersQuery, onRemove, onCreate, removeQuery }} />;
};
export default List;
