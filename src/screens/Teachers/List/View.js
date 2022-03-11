import React from "react";
import cuid from "cuid";
import {
  Table,
  Row,
  Col,
  Divider,
  Tag,
  Dropdown,
  Button,
  Menu,
  Popconfirm,
  notification,
  Modal,
} from "antd";
import {
  DownOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import className from "classnames";
import get from "lodash/get";
import Loading from "../../../Shared/Loading";
import { isEvenNumber } from "../../../utils/helpers";
import Unknown from "../../../Shared/Unknown";

import "./style.css";
import { useState } from "react";
import Create from "../Create";

const onSuccessCallBack = () =>
  notification.success({ message: "Supprimé avec Succès" });

const onErrorCallBack = () =>
  notification.error({ message: "Une erreur est survenue" });

const menu = ({ onShow, record, onRemove }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "noEnseignant"))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Popconfirm
        placement="topRight"
        title={"Voulez-vous vraiment supprimer cet enseignant ?"}
        onConfirm={() => onRemove(record, onSuccessCallBack, onErrorCallBack)}
        okText="Confirmer"
        cancelText="Cancel"
      >
        <DeleteOutlined />
        Supprimer
      </Popconfirm>
    </Menu.Item>
  </Menu>
);

const columns = ({ onShow, onRemove }) => [
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
  },
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
  },
  {
    title: "Email",
    dataIndex: "emailUbo",
    key: "emailUbo",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        overlay={menu({ onShow, record, onRemove })}
        trigger={["click"]}
      >
        <Button className="ant-dropdown-link boa_select_gray uppercase">
          <div>
            Actions
            <DownOutlined className="action_button" />
          </div>
        </Button>
      </Dropdown>
    ),
  },
];

const View = ({ teachersQuery, onShow, onRemove, onCreate }) => {
  const { loading, errors, idle, data } = teachersQuery;
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOK = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <div className="head_bloc">
            <h1 className="h1">LES ENSEIGNANTS</h1>
            <Button type="primary" onClick={showModal}>
              <PlusCircleOutlined />
              Ajouter Enseignant
            </Button>
            <Modal
              style={{ top: 20 }}
              visible={visible}
              onOk={handleOK}
              onCancel={handleCancel}
              confirmLoading={confirmLoading}
              footer={null}
              closable={false}
              width={1000}
              bodyStyle={{ padding: 30 }}
              maskClosable={false}
            >
              <Create handleClose={handleCancel} />
            </Modal>
          </div>

          <Divider />
          <Table
            rowKey={cuid()}
            columns={columns({ onShow, onRemove })}
            rowClassName={(_, index) =>
              className({
                "table-row-dark": isEvenNumber(index),
                "table-row-light": !isEvenNumber(index),
              })
            }
            dataSource={data}
          />
        </Col>
      </Row>
    </div>
  );
};

export default View;
