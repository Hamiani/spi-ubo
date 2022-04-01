import React, { useState, useMemo } from "react";
import {
  Table,
  Row,
  Col,
  Divider,
  Dropdown,
  Button,
  Menu,
  Input,
  Popconfirm,
  Modal,
  BackTop
} from "antd";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined
} from "@ant-design/icons";
import { FaArrowAltCircleUp } from "react-icons/fa";
import className from "classnames";
import get from "lodash/get";
import isNil from "lodash/isNil";
import take from "lodash/take";
import InfiniteScroll from "react-infinite-scroller";
import { BsThreeDots } from "react-icons/bs";

import Loading from "../../../Shared/Loading";
import Empty from "../../../Shared/Empty";

import {
  isEvenNumber,
  capitalizeFirstLetter,
  removeSpace
} from "../../../utils/helpers";
import Unknown from "../../../Shared/Unknown";

import "./style.css";
import Create from "../Create";

const menu = ({ onUpdate, record, onRemove, onShow }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "no_Enseignant"))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1" onClick={() => onUpdate(get(record, "no_Enseignant"))}>
      <EditOutlined />
      Modifier
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Popconfirm
        placement="topRight"
        title={"Êtes-vous sûr de vouloir supprimer cet enseignant ?"}
        onConfirm={() => onRemove(get(record, "no_Enseignant"))}
        okText="Oui"
        cancelText="Annuler"
      >
        <DeleteOutlined />
        Supprimer
      </Popconfirm>
    </Menu.Item>
  </Menu>
);

const columns = ({ onShow, onRemove, onUpdate }) => [
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    render: (_, record) => get(record, "nom", "").toUpperCase(),
    sorter: (a, b) => get(a, "nom", "").localeCompare(get(b, "nom", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
    render: (_, record) => capitalizeFirstLetter(get(record, "prenom", "")),
    sorter: (a, b) => get(a, "prenom", "").localeCompare(get(b, "prenom", "")),
    defaultSortOrder: "ascend"
  },
  {
    title: "Email",
    dataIndex: "email_Ubo",
    key: "email_Ubo",
    width: 400
  },
  {
    title: "Téléphone",
    dataIndex: "telephone",
    key: "telephone",
    width: 300,
    render: (_, record) => removeSpace(get(record, "telephone", ""))
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        overlay={menu({ onShow, onUpdate, record, onRemove })}
        trigger={["click"]}
      >
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    )
  }
];

const Filter = ({ data, onRemove, onShow, onUpdate }) => {
  const [filter, setFilter] = useState(null);
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOK = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const [state, setState] = useState({
    hasMore: true,
    items: take(data, 20),
    page: 1,
    size: 20
  });

  const filteredData = useMemo(
    () =>
      !isNil(filter)
        ? state.items.filter(
            (item) =>
              (!isNil(get(item, "nom", "")) &&
                get(item, "nom", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "prenom", "")) &&
                get(item, "prenom", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "email_Ubo", "")) &&
                get(item, "email_Ubo", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "telephone", "")) &&
                removeSpace(get(item, "telephone", ""))
                  .toLowerCase()
                  .includes(filter.toLowerCase()))
          )
        : state.items,
    [filter, state.items]
  );

  const onLoadMore = () => {
    setState({
      ...state,
      items: take(data, state.size + 20),
      page: state.page + 1,
      size: state.size + 20
    });
    if (state.size >= data.length) {
      setState({
        ...state,
        hasMore: false
      });
    }
  };

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <div className="head_bloc">
            <h1 className="h1">ENSEIGNANTS</h1>
            <Button className="create_button" onClick={showModal}>
              <PlusOutlined />
              Ajouter Enseignant
            </Button>
            <Modal
              style={{ top: 20 }}
              visible={visible}
              onOk={handleOK}
              onCancel={handleCancel}
              confirmLoading={confirmLoading}
              footer={null}
              closable={false}
              width={1200}
              bodyStyle={{ padding: 30 }}
              maskClosable={false}
            >
              <Create handleClose={handleCancel} />
            </Modal>
          </div>
          <Divider />
          <Row justify="start">
            <Col span={8}>
              <Input
                size="large"
                placeholder="Rechercher ..."
                onChange={(_) => setFilter(_.target.value)}
              />
            </Col>
          </Row>
          <Divider />
          <div className="span-size">
            <span>
              {filteredData.length} Enseignants sur {data.length}
            </span>
          </div>
          <InfiniteScroll
            pageStart={state.page}
            loadMore={onLoadMore}
            hasMore={state.hasMore}
            loader={<Loading key={0} />}
          >
            <Table
              rowKey={"no_Enseignant"}
              columns={columns({ onShow, onRemove, onUpdate })}
              rowClassName={(_, index) =>
                className({
                  "table-row-dark": isEvenNumber(index),
                  "table-row-light": !isEvenNumber(index)
                })
              }
              dataSource={filteredData}
              showSorterTooltip={false}
              pagination={false}
              locale={{
                emptyText: <Empty description="Aucun Enseignant trouvé." />
              }}
            />
          </InfiniteScroll>
        </Col>
      </Row>
      <BackTop>
        <FaArrowAltCircleUp size={30} color={"#419197"} />
      </BackTop>
    </div>
  );
};

const View = ({ teachersQuery, onRemove, onShow, onUpdate }) => {
  const { loading, errors, idle, data } = teachersQuery;

  if (idle) return <div />;
  if (loading) return <Loading />;
  if (errors) return <Unknown />;

  return <Filter {...{ data, onRemove, onShow, onUpdate }} />;
};

export default View;
