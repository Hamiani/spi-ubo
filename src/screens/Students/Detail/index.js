import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getOne, remove } from "../../../store/actions/student";
import { openNotification } from "../../../utils/helpers";
import { TYPES, DEFAULT_MESSAGES, PATHS } from "../../../utils/constants";
import _get from "lodash/get";

import View from "./view";

const Detail = () => {
  const { id } = useParams();
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const studentQuery = useSelector((state) => state.student.getOne);
  const removeQuery = useSelector((state) => state.student.remove);

  const onGoBack = () => goBack();
  const onUpdate = ({ id, code_Formation, annee_Universitaire }) =>
    push(
      `${PATHS.ETUDIANTS.LIST}/update/${code_Formation}/${annee_Universitaire}/${id}`
    );

  const onRemove = (id) =>
    dispatch(
      remove(
        id,
        () => {
          onGoBack();
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS
          });
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
    <View {...{ studentQuery, removeQuery, onRemove, onGoBack, onUpdate }} />
  );
};

export default Detail;
