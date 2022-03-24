import React, { useMemo, useState } from "react";
import { Empty, Popover, Table, Tooltip } from "antd";

import get from "lodash/get";
import { isNil, take } from "lodash";
import Loading from "../../../Shared/Loading";
import Unknown from "../../../Shared/Unknown";

const columns = () => [
  {
    title: "Formation",
    dataIndex: "formation",
    key: "formation",
    sorter: (a, b) =>
      get(a, "formation", "").localeCompare(get(b, "formation", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Unités d'enseignement">UE</Tooltip>,
    dataIndex: "ue",
    key: "ue",
    sorter: (a, b) => get(a, "ue", "").localeCompare(get(b, "ue", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: <Tooltip title="Cours magistraux">CM</Tooltip>,
    dataIndex: "cm",
    key: "cm",
  },
  {
    title: <Tooltip title="Travaux dirigés">TD</Tooltip>,
    dataIndex: "td",
    key: "td",
  },
  {
    title: <Tooltip title="Travaux pratiques">TP</Tooltip>,
    dataIndex: "tp",
    key: "tp",
  },
  {
    title: <Tooltip title="Équivalent travaux dirigés">ETD</Tooltip>,
    dataIndex: "etd",
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
