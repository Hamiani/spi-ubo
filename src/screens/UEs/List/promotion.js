import React from "react";
import { Empty, Table, Tooltip, Menu, Dropdown, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { BsThreeDots } from "react-icons/bs";

import { capitalizeFirstLetter } from "../../../utils/helpers";

import get from "lodash/get";

const menu = ({ onShowUeDetail, record }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShowUeDetail(get(record, "id"))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
  </Menu>
);

const columns = ({ onShowUeDetail, onShowTeacher }) => [
  {
    title: "Enseignant",
    dataIndex: "enseignant",
    key: "enseignant",
    width: 220,
    render: (_, record) => (
      <Button
        type="link"
        className="link_button"
        onClick={() => onShowTeacher(get(record, "enseignant.no_Enseignant"))}
      >
        {capitalizeFirstLetter(get(record, "enseignant.prenom", "")) +
          " " +
          get(record, "enseignant.nom", "").toUpperCase()}
      </Button>
    ),
    defaultSortOrder: "ascend",
    sorter: (a, b) =>
      (
        get(a, "enseignant.prenom") +
        " " +
        get(a, "enseignant.nom")
      ).localeCompare(
        get(b, "enseignant.prenom") + " " + get(b, "enseignant.nom")
      ),
  },
  {
    title: "Formation",
    dataIndex: "code_Formation",
    key: "code_Formation",
    render: (_, record) => get(record, "id.code_Formation", ""),

    sorter: (a, b) =>
      get(a, "id.code_Formation", "").localeCompare(
        get(b, "id.code_Formation", "")
      ),
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Unités d'enseignement">UE</Tooltip>,
    dataIndex: "designation",
    key: "designation",
    sorter: (a, b) =>
      get(a, "designation", "").localeCompare(get(b, "designation", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: (
      <Tooltip title="Nombre d'heure cours magistraux">
        Nombre d'heure CM
      </Tooltip>
    ),
    dataIndex: "nbh_Cm",
    key: "cm",
  },
  {
    title: (
      <Tooltip title="Nombre d'heure travaux dirigés">
        Nombre d'heure TD
      </Tooltip>
    ),
    dataIndex: "nbh_Td",
    key: "td",
  },
  {
    title: (
      <Tooltip title="Nombre d'heure travaux pratiques">
        Nombre d'heure TP
      </Tooltip>
    ),
    dataIndex: "nbh_Tp",
    key: "tp",
  },
  {
    title: (
      <Tooltip title="Nombre d'heure équivalent travaux dirigés">
        Nombre d'heure ETD
      </Tooltip>
    ),
    dataIndex: "nbh_Etd",
    key: "etd",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown overlay={menu({ onShowUeDetail, record })} trigger={["click"]}>
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    ),
  },
];

const View = ({ data, onUpdate, onShowTeacher, onShowUeDetail }) => {
  return (
    <Table
      rowKey={(record) =>
        `${get(record, "id.code_Formation") + get(record, "id.code_Ue")}`
      }
      columns={columns({ onUpdate, onShowTeacher, onShowUeDetail })}
      dataSource={data}
      showSorterTooltip={false}
      pagination={false}
      locale={{
        emptyText: (
          <Empty description="L'enseignant n'est responsable d'aucune UE." />
        ),
      }}
    />
  );
};
export default View;
