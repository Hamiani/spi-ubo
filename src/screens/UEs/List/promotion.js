import React from "react";
import { Empty, Table, Tooltip, Menu, Dropdown, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import { BsThreeDots } from "react-icons/bs";

import { capitalizeFirstLetter } from "../../../utils/helpers";

import get from "lodash/get";

const renderHours = (n) => <>{n} h</>;

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
    title: "Enseignant responsable",
    dataIndex: "enseignant",
    key: "enseignant",
    width: 220,
    render: (_, record) => (
      <Button
        type="link"
        className="link_button"
        onClick={() => onShowTeacher(get(record, "enseignant.no_Enseignant"))}
      >
        {get(record, "enseignant.nom", "").toUpperCase() +
          " " +
          capitalizeFirstLetter(get(record, "enseignant.prenom", ""))}
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
      )
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
    defaultSortOrder: "ascend"
  },
  {
    title: <Tooltip title="Unités d'enseignement">UE</Tooltip>,
    dataIndex: "code_Ue",
    key: "code_Ue",
    render: (_, record) => (
      <Tooltip title={get(record, "designation", "")}>
        {get(record, "id.code_Ue", "")}
      </Tooltip>
    ),
    sorter: (a, b) =>
      get(a, "id.code_Ue", "").localeCompare(get(b, "id.code_Ue", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: <Tooltip title="Nombre d'heures des cours magistraux">CM</Tooltip>,
    dataIndex: "nbh_Cm",
    key: "cm",
    render: (text) => renderHours(text)
  },
  {
    title: <Tooltip title="Nombre d'heures des travaux dirigés">TD</Tooltip>,
    dataIndex: "nbh_Td",
    key: "td",
    render: (text) => renderHours(text)
  },
  {
    title: <Tooltip title="Nombre d'heures des travaux pratiques">TP</Tooltip>,
    dataIndex: "nbh_Tp",
    key: "tp",
    render: (text) => renderHours(text)
  },
  {
    title: <Tooltip title="Nombre d'heures ETD">ETD</Tooltip>,
    dataIndex: "nbh_Etd",
    key: "etd",
    render: (text) => renderHours(text)
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown overlay={menu({ onShowUeDetail, record })} trigger={["click"]}>
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    )
  }
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
        )
      }}
    />
  );
};
export default View;
