import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getOne } from "../../../store/actions/ue";
import { get } from "../../../store/actions/teacher";
import { DETAIL_TYPES, DEFAULT } from "../../../utils/constants";

import Promotion from "./promotion";
import Teacher from "./teacher";
import { isEmpty } from "lodash";

const View = ({ ueQuery, onGoBack, onHideUeDetail, teacherQuery }) => ({
  [DETAIL_TYPES.PROMOTION]: (
    <Promotion {...{ ueQuery, teacherQuery, onHideUeDetail }} />
  ),
  [DETAIL_TYPES.TEACHER]: <Teacher {...{ ueQuery, onGoBack }} />,
  [DEFAULT]: <div></div>,
});
const Detail = ({ type, onHideUeDetail, filter }) => {
  const { code_Formation, code_Ue } = useParams();
  const { goBack } = useHistory();
  const dispatch = useDispatch();

  const ueQuery = useSelector((state) => state.ue.getOne);
  const teacherQuery = useSelector((state) => state.teacher.get);

  const onGoBack = () => goBack();

  useEffect(() => {
    const id = !isEmpty(filter) ? filter : { code_Formation, code_Ue };
    dispatch(getOne(id));
  }, [dispatch, filter, code_Formation, code_Ue]);

  useEffect(() => {
    dispatch(get());
  }, [dispatch]);

  return View({ ueQuery, teacherQuery, onGoBack, onHideUeDetail })[type];
};

export default Detail;

Detail.defaultProps = {
  type: DEFAULT,
  filter: {},
  onHideUeDetail: () => {},
};
