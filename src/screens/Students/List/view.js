import React from "react";
import { Dropdown, Empty, Menu, Table, Popconfirm } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { EyeOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import className from "classnames";

import get from "lodash/get";
import { formatDate, isEvenNumber } from "../../../utils/helpers";
import moment from "moment";

const menu = ({ record, onShow, onUpdate, onRemove }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "no_Etudiant", ""))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" onClick={() => onUpdate(get(record, "no_Etudiant", ""))}>
      <EditOutlined />
      Modifier
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Popconfirm
        placement="topRight"
        title={"Êtes-vous sûr de vouloir supprimer cet étudiant ?"}
        onConfirm={() => onRemove(get(record, "no_Etudiant"))}
        okText="Oui"
        cancelText="Annuler"
      >
        <DeleteOutlined />
        Supprimer
      </Popconfirm>
    </Menu.Item>
  </Menu>
);

const columns = ({ onShow, onUpdate, onRemove }) => [
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
    sorter: (a, b) => get(a, "prenom", "").localeCompare(get(b, "prenom", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    sorter: (a, b) => get(a, "nom", "").localeCompare(get(b, "nom", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: 350
  },
  {
    title: "Université d'origine",
    dataIndex: "universite_Origine",
    key: "universite_Origine",
    width: 170
  },
  {
    title: "Âge",
    dataIndex: "date_Naissance",
    render: (date) => moment().diff(formatDate(date), "years"),
    key: "age"
  },
  {
    title: "Groupe de TP",
    dataIndex: "groupe_Tp",
    key: "groupe_TP",
    width: 150
  },
  {
    title: "Groupe d'anglais",
    dataIndex: "groupe_Anglais",
    key: "groupe_Anglais",
    width: 150
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    render: (_, record) => (
      <Dropdown
        overlay={menu({ onShow, onUpdate, record, onRemove })}
        trigger={["click"]}
      >
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    )
  }
];

const View = ({ data, onShow, onUpdate, onRemove }) => {
  return (
    <Table
      rowKey={"no_Etudiant"}
      columns={columns({ onShow, onUpdate, onRemove })}
      rowClassName={(_, index) =>
        className({
          "table-row-dark": isEvenNumber(index),
          "table-row-light": !isEvenNumber(index)
        })
      }
      dataSource={data}
      showSorterTooltip={false}
      pagination={false}
      locale={{
        emptyText: <Empty description="Aucun étudiant existe." />
      }}
    />
  );
};
export default View;
