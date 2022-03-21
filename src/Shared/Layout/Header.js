import React from "react";
import { Col, Row } from "antd";
import UBO from "../../Shared/assets/UBO.png";
import "./styles.css"

const HeaderApp = () => (
  <Row
    style={{
      background: "rgb(65 145 151)",
      height: "100px",
    }}
    mode="horizontal"
    justify="center"
    align="middle"
  >
    <Col>
      <img alt="logo" height={75} width={160} src={UBO} className="logo" />
    </Col>
  </Row>
);

export default HeaderApp;
