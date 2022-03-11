import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../../store/actions/teacher";

import View from "./View";

const Create = ({ handleClose }) => {
  const dispatch = useDispatch();
  const createQuery = useSelector((state) => state.teacher.create);

  const onCreate = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      create(
        data,
        () => {
          onSuccessCallBack();
          handleClose();
        },
        () => onErrorCallBack()
      )
    );

  return <View {...{ createQuery, onCreate, handleClose }} />;
};

export default Create;
