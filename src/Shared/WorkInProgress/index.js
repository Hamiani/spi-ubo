import React from "react";
import { Progress, Row } from "antd";

const WorkInProgress = () => (
  <Row justify="center" align="middle" className="p-top-20">
    <Progress type="circle" percent={70} status="active" width={220} format={() => 'En cours ...'} />
  </Row>
);

export default WorkInProgress;
