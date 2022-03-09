import React from "react";
import { PageHeader } from "antd";

import UBO from "../../Shared/assets/UBO.png";

const Header = () => {
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        title={<img height={100} width={165} src={UBO} />}
      />
    </div>
  );
};

export default Header;
