import React from "react";

import { Spin } from "antd";

import "./style.css";

const View = () => (
  <div className="loading-wrapper-large">
    <Spin size="large" style={{ alignSelf: "center", justifySelf: "center" }} />
  </div>
);
export default View;
