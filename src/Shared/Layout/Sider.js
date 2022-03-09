import React from "react";
import { Layout, Menu } from "antd";
import { MdSubscriptions } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { FaSwatchbook } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import get from "lodash/get";

import { PATHS } from "../../utils/constants";

const { Sider } = Layout;

const SELECTED_KEY = {
  [PATHS.PROMOTIONS.LIST]: { key: [PATHS.HOME] },
  [PATHS.TEACHERS.LIST]: { key: [PATHS.TEACHERS.LIST] },
};

const SubscriberSider = () => {
  const { push } = useHistory();
  const { pathname } = useLocation();
  const selectedKey = get(SELECTED_KEY[pathname], "key") || [];

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={selectedKey}>
        <Menu.Item
          key={PATHS.TEACHERS.LIST}
          icon={<GiTeacher />}
          onClick={() => push(PATHS.TEACHERS.LIST)}
        >
          Enseignants
        </Menu.Item>
        <Menu.Item
          key={PATHS.PROMOTIONS.LIST}
          icon={<MdSubscriptions />}
          onClick={() => push(PATHS.HOME)}
        >
          Promotions
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SubscriberSider;
