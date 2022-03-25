import React from "react";
import { Dropdown, Empty, Menu, Table, Tooltip } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { EyeOutlined} from "@ant-design/icons";
import className from "classnames";

import get from "lodash/get";
import { isEvenNumber } from "../../../utils/helpers";


const renderHours = (n) => <>{n} h</>
const menu = () => (
  <Menu>
    <Menu.Item key="0" >
      <EyeOutlined />
      Afficher
    </Menu.Item>
  </Menu>
);

const columns = () => [
  {
    title: "Formation",
    dataIndex: "id",
    key: "formation",
    sorter: (a, b) => get(a, "id.code_Formation", "").localeCompare(get(b, "id.code_Formation", "")),
    render: (record) => record.code_Formation,
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Unités d'enseignement">UE</Tooltip>,
    dataIndex: "id",
    key: "ue",
    sorter: (a, b) => get(a, "id.code_ue", "").localeCompare(get(b, "id.code_ue", "")),
    render: (id, row) =>{
      return <Tooltip title={row.designation}>{id.code_ue}</Tooltip>; 
    } ,
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Nombre d'heures des cours magistraux">Nombre d'heures CM</Tooltip>,
    dataIndex: "nbh_cm",
    key: "cm",
    render : (text) => renderHours(text)
  },
  {
    title: <Tooltip title="Nombre d'heures des travaux dirigés">Nombre d'heures TD</Tooltip>,
    dataIndex: "nbh_td",
    key: "td",
    render : (text) => renderHours(text)
  },
  {
    title: <Tooltip title="Nombre d'heures des travaux pratiques">Nombre d'heures TP</Tooltip>,
    dataIndex: "nbh_tp",
    key: "tp",
    render : (text) => renderHours(text)
  },
  {
    title: <Tooltip title="Nombre d'heures équivalent travaux dirigés">Nombre d'heures ETD</Tooltip>,
    dataIndex: "nbh_etd",
    key: "etd",
    render : (text) => renderHours(text)
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    render: (_, record) => (
      <Dropdown overlay={menu()} trigger={["click"]}>
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    ),
  },
];

const View = ({ data }) => {
  console.log("data", data);

  return (
    <Table
      columns={columns()}
      rowClassName={(_, index) =>
        className({
          "table-row-dark": isEvenNumber(index),
          "table-row-light": !isEvenNumber(index),
        })
      }
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
