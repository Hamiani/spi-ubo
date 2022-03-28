import React from "react";
import PropTypes from "prop-types";
import Promotion from "./promotion";
import Teacher from "./teacher";

import { DETAIL_TYPES, DEFAULT } from "../../../utils/constants";

const View = ({ data, onShow, onShowTeacher }) => ({
  [DETAIL_TYPES.PROMOTION]: <Promotion {...{ data, onShow, onShowTeacher }} />,
  [DETAIL_TYPES.TEACHER]: <Teacher {...{ data }} />,
  [DEFAULT]: <div></div>,
});
const List = ({ data, onShow, type, onShowTeacher }) =>
  View({ data, onShow, onShowTeacher })[type];
export default List;

List.defaultProps = {
  data: [],
  type: DEFAULT,
  onShow: () => {},
  onShowTeacher: () => {},
};

List.prototypes = {
  data: PropTypes.object.isRequired,
  onShowTeacher: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired,
};
