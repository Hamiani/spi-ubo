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

  const onShow = (id) => push(`${PATHS.TEACHERS.LIST}/${id}`);

  const onRemove = (data, onSuccessCallBack, onErrorCallBack) =>
    dispatch(
      remove(
        data,
        () => {
          onSuccessCallBack();
          dispatch(get());
        },
        () => onErrorCallBack()
      )
    );
  const onCreate = () => push(PATHS.TEACHERS.CREATE);

  const teachersQuery = useSelector((state) => state.teacher.get);

  return <View {...{ teachersQuery, onShow, onRemove, onCreate }} />;
};
export default List;
