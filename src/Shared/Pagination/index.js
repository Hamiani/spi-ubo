import React from "react";
import PropTypes from "prop-types";

import { Pagination as AntdPagination } from "antd";

const Pagination = ({ current, total, onPageChange, showSizeChanger }) => (
  <AntdPagination
    defaultCurrent={current}
    total={total}
    onChange={onPageChange}
    showSizeChanger={showSizeChanger}
  />
);

Pagination.defaultProps = {
  current: 1,
  total: 10,
  onPageChange: () => {},
  showSizeChanger: false,
};

Pagination.prototypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
