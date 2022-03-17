import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import _get from "lodash/get"
import { get, remove } from "../../../store/actions/teacher";
import { PATHS, TYPES, DEFAULT_MESSAGES } from "../../../utils/constants";
import { openNotification } from "../../../utils/helpers";

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
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
          })
      )
    );
  const onCreate = () => push(PATHS.TEACHERS.CREATE);

  const teachersQuery = useSelector((state) => state.teacher.get);

  return <View {...{ teachersQuery, onRemove, onCreate }} />;
};
export default List;
