import React from "react";
import { Layout, Row, Col } from "antd";

import Header from "./Header";
import Sider from "./Sider";
import Footer from "./Footer";

import "./styles.css";

const { Content } = Layout;

const Container = (WrappedComponent) => (props) => {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sider />
        <Layout>
          <Content className={"connected"}>
            <Row type="flex" justify="center" style={{ minHeight: "100%" }}>
              <Col span={24}>
                <WrappedComponent {...props} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </Layout>
  );
};

export default Container;
