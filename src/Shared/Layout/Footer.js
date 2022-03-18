import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

const AppFooter = () => (
  <Footer style={{position:"sticky",bottom:"0",background:"#004146"}}>
    <div className="container_antd">
      <Row type="flex" align="middle" justify="center">
        <Col sm={24}>
          <p className="text-center footer">© CSCI-ADM 2022</p>
        </Col>
      </Row>
    </div>
  </Footer>
);

export default AppFooter;
