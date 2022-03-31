import React from "react";
import PropTypes from "prop-types";
import Promotion from "./promotion";
import Teacher from "./teacher";

import { DETAIL_TYPES, DEFAULT } from "../../../utils/constants";

const View = ({ data, onShow, onShowUe, onShowTeacher, onShowUeDetail }) => ({
  [DETAIL_TYPES.PROMOTION]: (
    <Promotion {...{ data, onShow, onShowTeacher, onShowUeDetail }} />
  ),
  [DETAIL_TYPES.TEACHER]: <Teacher {...{ data, onShowUe }} />,
  [DEFAULT]: <div></div>,
});
const List = ({
  data,
  onShow,
  onShowUe,
  type,
  onShowTeacher,
  onShowUeDetail,
}) => View({ data, onShow, onShowUe, onShowTeacher, onShowUeDetail })[type];
export default List;

List.defaultProps = {
  data: [],
  type: DEFAULT,
  onShow: () => {},
  onShowUe: () => {},
  onShowTeacher: () => {},
  onShowUeDetail: () => {},
};

List.prototypes = {
  data: PropTypes.object.isRequired,
  onShowTeacher: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
  onShowUe: PropTypes.func.isRequired,
};
