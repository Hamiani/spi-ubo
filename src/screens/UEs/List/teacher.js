import React from "react";
import { Empty, Table, Tooltip } from "antd";

import get from "lodash/get";

const columns = () => [
  {
    title: "Formation",
    dataIndex: "code_Formation",
    key: "formation",
    sorter: (a, b) =>
      get(a, "code_Formation", "").localeCompare(get(b, "code_Formation", "")),
    defaultSortOrder: "ascend",
    render: (_, record) => get(record, "id.code_Formation", ""),
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
];

const View = ({ data }) => {
  return (
    <Table
      rowKey={(record) =>
        `${get(record, "id.code_Formation") + get(record, "id.code_Ue")}`
      }
      columns={columns()}
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
