import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import _get from "lodash/get";

import { remove } from "../../../store/actions/student";

import { DEFAULT_MESSAGES, PATHS, TYPES } from "../../../utils/constants";

import View from "./view";
import { openNotification } from "../../../utils/helpers";

const List = ({ data }) => {
  const { push } = useHistory();
  const dispatch = useDispatch();
  const { annee_Universitaire, code_Formation } = useParams();
  const onRemove = (id) =>
    dispatch(
      remove(
        id,
        () => {
          openNotification({
            type: TYPES.SUCCESS,
            message: DEFAULT_MESSAGES.SUCCESS
          });
          window.location.reload();
        },
        (errors) =>
          openNotification({
            type: TYPES.ERROR,
            message: DEFAULT_MESSAGES.ERROR + " " + _get(errors, "message", ""),
            duration: 0
          })
      )
    );

  const onShow = (id) => push(`${PATHS.ETUDIANTS.LIST}/${id}`);
  const onUpdate = (id) =>
    push(
      `${PATHS.ETUDIANTS.LIST}/update/${code_Formation}/${annee_Universitaire}/${id}`
    );

  return <View {...{ data, onShow, onUpdate, onRemove }} />;
};
export default List;
