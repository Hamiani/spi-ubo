import React from "react";
import { Col, Row } from "antd";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
} from "react-icons/ti";
import { MdAlternateEmail } from "react-icons/md";
import UBO from "../../Shared/assets/UBO.png";
import { UBO_LINKS } from "../../utils/constants";

const HeaderApp = () => {
  return (
    <div>
      <Row
        style={{
          background: " rgb(65 145 151)",
          height: "100px",
          color: "white",
          borderBottomColor: "red",
        }}
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        justify="center"
        align="middle"
      >
        <Col offset={11} span={7}>
          <img
            alt="logo"
            height={75}
            width={160}
            src={UBO}
            style={{
              filter:
                "invert(112%) sepia(13%) saturate(3207%) hue-rotate(130deg) brightness(136%) contrast(116%)",
            }}
          />
        </Col>
        <Col span={1}>
          <TiSocialFacebook
            className="header-icons"
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(UBO_LINKS.FACEBOOK, "_blank")}
          />
        </Col>
        <Col span={1}>
          <TiSocialTwitter
            className="header-icons"
            size={30}
            className="header-icons"
            style={{ cursor: "pointer" }}
            onClick={() => window.open(UBO_LINKS.TWITER, "_blank")}
          />
        </Col>
        <Col span={1}>
          <TiSocialYoutube
            className="header-icons"
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(UBO_LINKS.YOUTUBE, "_blank")}
          />
        </Col>
        <Col span={1}>
          <TiSocialLinkedin
            className="header-icons"
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(UBO_LINKS.LINKEDIN, "_blank")}
          />
        </Col>
        <Col span={2}>
          <MdAlternateEmail
            className="header-icons"
            size={30}
            style={{ cursor: "pointer" }}
            onClick={() => window.open(UBO_LINKS.MAIL, "_blank")}
          />
        </Col>
      </Row>
    </div>
  );
};

export default HeaderApp;
