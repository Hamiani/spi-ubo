import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { create } from "../../../store/actions/teacher";
import { PATHS } from "../../../utils/constants";

import View from "./View";

const Create = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const createQuery = useSelector((state) => state.teacher.create);
  const onTeachersClick = () => push(PATHS.TEACHERS.LIST);

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          onTeachersClick();
          onSuccessCallBack();
        },
        () => onErrorCallBack()
      )
    );

  return <View {...{ createQuery, onCreate, onTeachersClick }} />;
};

export default Create;
