import React from 'react'
import {
   Empty,
   Popover,
   Table } from 'antd';

import get from "lodash/get";
const columns = () => [
  {
    title: "Formation",
    dataIndex: "formation",
    key: "formation",
    sorter: (a, b) => get(a, "formation", "").localeCompare(get(b, "formation", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: <Popover content="Unités d'enseignement" >UE</Popover>,
    dataIndex: "ue",
    key: "ue",
    sorter: (a, b) => get(a, "ue", "").localeCompare(get(b, "ue", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: <Popover content="Cours magistraux">CM</Popover>,
    dataIndex: "cm",
    key: "cm" 
  },
  {
    title: <Popover content="Travaux dirigés" >TD</Popover>,
    dataIndex: "td",
    key: "td"
  },
  {
    title: <Popover content="Travaux pratiques" >TP</Popover>,
    dataIndex: "tp",
    key: "tp"
  },
  {
    title: <Popover content="Équivalent travaux dirigés" >ETD</Popover>,
    dataIndex: "etd",
    key: "etd"
  }
];


const View = () => {
  return (
    <Table
              columns={columns()}
              dataSource={[]}
              showSorterTooltip={false}
              pagination={false}
              locale={{
                emptyText: <Empty description="L'enseignant n'est responsable d'aucune UE." />,
              }}
            />
  )
}

export default View