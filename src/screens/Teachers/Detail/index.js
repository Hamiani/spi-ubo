import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOne, remove, get } from "../../../store/actions/teacher";
import { openNotification } from "../../../utils/helpers";
import { TYPES, DEFAULT_MESSAGES, PATHS } from "../../../utils/constants";
import _get from "lodash/get";

import View from "./View";

const Detail = () => {
  const { id } = useParams();
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const teacherQuery = useSelector((state) => state.teacher.getOne);
  const removeQuery = useSelector((state) => state.teacher.remove);

  const onGoBack = () => goBack();
  const onUpdate = (id) => push(`${PATHS.TEACHERS.LIST}/update/${id}`);

  const onRemove = (id) =>
    dispatch(
      remove(
        id,
        () => {
          push(PATHS.TEACHERS.LIST);
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS,
          });
          dispatch(get());
        },
        (errors) => {
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
            duration: 0
          });
        }
      )
    );

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  return (
    <View {...{ teacherQuery, removeQuery, onRemove, onGoBack, onUpdate }} />
  );
};

export default Detail;
