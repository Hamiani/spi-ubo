import React from "react";
import { Layout, Menu } from "antd";
import { FcGraduationCap } from "react-icons/fc";
import { GiTeacher } from "react-icons/gi";
import { useHistory, useLocation } from "react-router";
import get from "lodash/get";

import { PATHS } from "../../utils/constants";

const { Sider } = Layout;

const SELECTED_KEY = {
  [PATHS.HOME]: { key: [PATHS.HOME] },
  [PATHS.TEACHERS.LIST]: { key: [PATHS.TEACHERS.LIST] },
};

const SubscriberSider = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const selectedKey = get(SELECTED_KEY[pathname], "key") || [];

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey}>
        <Menu.Item
          key={PATHS.HOME}
          icon={<FcGraduationCap size={25} />}
          onClick={() => push(PATHS.HOME)}
        >
          Promotions
        </Menu.Item>
        <Menu.Item
          key={PATHS.TEACHERS.LIST}
          icon={<GiTeacher size={25} />}
          onClick={() => push(PATHS.TEACHERS.LIST)}
        >
          Enseignants
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SubscriberSider;
