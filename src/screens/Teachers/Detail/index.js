import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOne, remove } from "../../../store/actions/teacher";

import View from "./View";
import { PATHS } from "../../../utils/constants";

const Detail = () => {
  const { id } = useParams();
  const { push, goBack } = useHistory();
  const dispatch = useDispatch();

  const teacherQuery = useSelector((state) => state.teacher.getOne);
  const removeQuery = useSelector((state) => state.teacher.remove);

  const onRemove = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      remove(
        data,
        () => {
          onSuccessCallBack();
          push(PATHS.TEACHERS.LIST);
        },
        () => onErrorCallBack()
      )
    );

  const onGoBack = () => goBack();

  useEffect(() => {
    dispatch(getOne(id));
  }, [dispatch, id]);

  return <View {...{ teacherQuery, removeQuery, onRemove, onGoBack }} />;
};

export default Detail;
