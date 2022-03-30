import React, { useState } from "react";
import { Dropdown, Empty, Menu, Modal, Table, Tooltip } from "antd";
import { BsThreeDots } from "react-icons/bs";
import { 
     EditOutlined
    ,EyeOutlined} from "@ant-design/icons";
import className from "classnames";

import get from "lodash/get";
import { isEvenNumber } from "../../../utils/helpers";
import Update from "../Update";

var moment = require('moment');


const menu = ({ record, onShow, onShowUpdate }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "no_Etudiant","")) } >
      <EyeOutlined />
      Afficher
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item
      key="1"
      onClick={() => {onShowUpdate(get(record, "no_Etudiant"))}}
    >
      <EditOutlined />
      Modifier
    </Menu.Item>
  </Menu>
);

const columns = ({onShow, onShowUpdate}) => [
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
    title: "Âge",
    dataIndex: "date_Naissance",
    key: "age",
    render: (record) =>{  
      let bd = moment(record,'DD-MM-YY');
      return moment().year() - bd.year();
    }
    // return 
  },
  {
    title: "Groupe de TP",
    dataIndex: "groupe_Tp",
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
      <Dropdown overlay={menu({onShow, onShowUpdate, record})} trigger={["click"]}>
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    ),
  },
];

const UpdateModal = ({ update, onHideUpdate }) => {
  const { visible, id } = update;

  return (
    <Modal
      closable={false}
      width={1200}
      footer={false}
      visible={visible}
      onCancel={onHideUpdate}
      maskClosable={false}
    >
      <Update {...{ id, onGoBack: onHideUpdate }} />
    </Modal>
  );
};
const View = ({ data, onShow }) => {
  console.log("data", data);

  const [update, setUpdate] = useState({ visible: false, id: null });


  const onShowUpdate = (id) => setUpdate({ id, visible: true });
  const onHideUpdate = () => setUpdate({ ...update, visible: false });
  return (
    <>

    <Table
        rowKey={"no_Etudiant"}
          columns={columns({ onShow, onShowUpdate })}
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
      <UpdateModal {...{ update, onHideUpdate }} />
    </>
    
  );
};
export default View;