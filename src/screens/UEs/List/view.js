import React from 'react'
import {
   Empty,
   Table } from 'antd';

const columns = () => [
  {
    title: "Formation",
    dataIndex: "formation",
    key: "formation"
  },
  {
    title: "UE",
    dataIndex: "ue",
    key: "ue"
  },
  {
    title: "CM",
    dataIndex: "cm",
    key: "cm"
  },
  {
    title: "TD",
    dataIndex: "td",
    key: "td"
  },
  {
    title: "TP",
    dataIndex: "tp",
    key: "tp"
  },
  {
    title: "ETD",
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