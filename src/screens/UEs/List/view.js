import React from "react";
import { Empty, Table, Tooltip } from "antd";

import get from "lodash/get";

const columns = () => [
  {
    title: "Formation",
    dataIndex: "code_Formation",
    key: "formation",
    sorter: (a, b) =>
      get(a, "formation", "").localeCompare(get(b, "formation", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Unités d'enseignement">UE</Tooltip>,
    dataIndex: "code_Ue",
    key: "ue",
    sorter: (a, b) => get(a, "ue", "").localeCompare(get(b, "ue", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Nombre d'heure cours magistraux">Nombre d'heure CM</Tooltip>,
    dataIndex: "nbh_Cm",
    key: "cm",
  },
  {
    title: <Tooltip title="Nombre d'heure travaux dirigés">Nombre d'heure TD</Tooltip>,
    dataIndex: "nbh_Td",
    key: "td",
  },
  {
    title: <Tooltip title="Nombre d'heure travaux pratiques">Nombre d'heure TP</Tooltip>,
    dataIndex: "nbh_Tp",
    key: "tp",
  },
  {
    title: <Tooltip title="Nombre d'heure équivalent travaux dirigés">Nombre d'heure ETD</Tooltip>,
    dataIndex: "nbh_Etd",
    key: "etd",
  },
];

const View = ({ data }) => {
  console.log("data", data);

  return (
    <Table
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
