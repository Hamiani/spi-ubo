import React from "react";
import { Dropdown, Empty, Menu, Table, Tooltip } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { EyeOutlined} from "@ant-design/icons";
import className from "classnames";

import get from "lodash/get";
import { isEvenNumber } from "../../../utils/helpers";


const renderHours = (n) => <>{n} h</>
const menu = ({ record, onShow }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "no_Etudiant",{}))} >
      <EyeOutlined />
      Afficher
    </Menu.Item>
  </Menu>
);

const columns = ({onShow}) => [
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
    sorter: (a, b) => get(a, "prenom", "").localeCompare(get(b, "prenom", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    sorter: (a, b) => get(a, "nom", "").localeCompare(get(b, "nom", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Université d'origine",
    dataIndex: "universite_origine",
    key: "universite_origine"
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Groupe de TP",
    dataIndex: "groupe_TP",
    key: "groupe_TP"
  },
  {
    title: "Groupe d'anglais",
    dataIndex: "groupe_Anglais",
    key: "groupe_Anglais"
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    render: (_, record) => (
      <Dropdown overlay={menu({onShow, record})} trigger={["click"]}>
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    ),
  },
];

const View = ({ data, onShow }) => {
  console.log("data", data);

  return (
    <Table
    rowKey={(record) =>
      `${get(record, "no_Etudiant")}`
    }
      columns={columns({ onShow })}
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
          <Empty description="Aucune étudiants existe." />
        ),
      }}
    />
  );
};
export default View;
