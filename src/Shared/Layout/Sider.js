import React from "react";
import { Col, Divider, Layout, Menu } from "antd";
import { FcGraduationCap } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { useHistory, useLocation } from "react-router";
import get from "lodash/get";

import { PATHS } from "../../utils/constants";
import "./styles.css";
const { Sider } = Layout;

const SELECTED_KEY = {
  [PATHS.HOME]: {
    key: [PATHS.HOME],
    style: { background: "#419197", color: "white" },
  },
  [PATHS.TEACHERS.LIST]: {
    key: [PATHS.TEACHERS.LIST],
    style: { background: "#419197", color: "white" },
  },
};

const SubscriberSider = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const selectedKey = get(SELECTED_KEY[pathname], "key") || [];
  const selectedStyle = get(SELECTED_KEY[pathname], "style") || {};

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        style={{ background: "#f2f2f2" }}
      >
        <Divider style={{ background: " white" }} />

        <Menu
          style={{ background: "#f2f2f2" }}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={selectedKey}
        >
          <Menu.Item
            key={PATHS.HOME}
            icon={<FcGraduationCap size={25} />}
            onClick={() => push(PATHS.HOME)}
            style={PATHS.HOME === selectedKey ? selectedStyle : null}
          >
            Promotions
          </Menu.Item>
          <Menu.Divider style={{ background: "#f2f2f2" }} />
          <Menu.Item
            key={PATHS.TEACHERS.LIST}
            style={PATHS.TEACHERS.LIST === selectedKey ? selectedStyle : null}
            icon={<GiTeacher size={25} color="rgb(55 71 79)" />}
            onClick={() => push(PATHS.TEACHERS.LIST)}
          >
            Enseignants
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default SubscriberSider;
