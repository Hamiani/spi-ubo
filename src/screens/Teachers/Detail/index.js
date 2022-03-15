import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOne, remove } from "../../../store/actions/teacher";
import { openNotification } from "../../../utils/helpers";
import { TYPES, DEFAULT_MESSAGES } from "../../../utils/constants";

import View from "./View";

const Detail = ({ filter, onGoBack }) => {
  const dispatch = useDispatch();

  const teacherQuery = useSelector((state) => state.teacher.getOne);
  const removeQuery = useSelector((state) => state.teacher.remove);

  const onRemove = (id) =>
    dispatch(
      remove(
        id,
        () => {
          onGoBack();
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

  useEffect(() => {
    dispatch(getOne(filter));
  }, [dispatch, filter]);

  return <View {...{ teacherQuery, removeQuery, onRemove, onGoBack }} />;
};

export default Detail;
