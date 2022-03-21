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
  BackTop,
} from "antd";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusOutlined,
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
import Detail from "../Detail";
import Update from "../Update";

import { isEvenNumber } from "../../../utils/helpers";
import Unknown from "../../../Shared/Unknown";

import "./style.css";
import Create from "../Create";

const menu = ({ onShowDetail, onShowUpdate, record, onRemove }) => (
  <Menu>
    <Menu.Item
      key="0"
      onClick={() => onShowDetail(get(record, "no_Enseignant"))}
    >
      <EyeOutlined />
      Afficher
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item
      key="1"
      onClick={() => onShowUpdate(get(record, "no_Enseignant"))}
    >
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

const columns = ({ onShowDetail, onRemove, onShowUpdate }) => [
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    sorter: (a, b) => a.nom < b.nom,
    defaultSortOrder: "ascend",
  },
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
    sorter: (a, b) => a.prenom < b.prenom,
    defaultSortOrder: "ascend",
  },
  {
    title: "Email",
    dataIndex: "email_Ubo",
    key: "email_Ubo",
    sorter: (a, b) => a.email_Ubo < b.email_Ubo,
    width: 400,
  },
  {
    title: "Téléphone",
    dataIndex: "telephone",
    key: "telephone",
    width: 300,
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown
        overlay={menu({ onShowDetail, onShowUpdate, record, onRemove })}
        trigger={["click"]}
      >
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    ),
  },
];

const DetailModal = ({ detail, onHideDetail }) => {
  const { visible, filter } = detail;

  return (
    <Modal
      closable={false}
      width={1200}
      footer={false}
      visible={visible}
      onCancel={onHideDetail}
      maskClosable={false}
    >
      <Detail {...{ onGoBack: onHideDetail, filter }} />
    </Modal>
  );
};

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

const Filter = ({ data, onRemove }) => {
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
    size: 20,
  });
  const [detail, setDetail] = useState({ visible: false, filter });
  const [update, setUpdate] = useState({ visible: false, id: null });

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
                get(item, "telephone", "")
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
      size: state.size + 20,
    });
    if (state.size >= data.length) {
      setState({
        ...state,
        hasMore: false,
      });
    }
  };
  const onShowDetail = (filter) => setDetail({ filter, visible: true });
  const onHideDetail = () => setDetail({ ...detail, visible: false });

  const onShowUpdate = (id) => setUpdate({ id, visible: true });
  const onHideUpdate = () => setUpdate({ ...update, visible: false });

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
              columns={columns({ onShowDetail, onRemove, onShowUpdate })}
              rowClassName={(_, index) =>
                className({
                  "table-row-dark": isEvenNumber(index),
                  "table-row-light": !isEvenNumber(index),
                })
              }
              dataSource={filteredData}
              showSorterTooltip={false}
              pagination={false}
              locale={{
                emptyText: <Empty description="Aucun Enseignant trouvé." />,
              }}
            />
          </InfiniteScroll>
        </Col>
      </Row>
      <BackTop>
        <FaArrowAltCircleUp size={30} color={"#419197"} />
      </BackTop>
      <DetailModal {...{ detail, onHideDetail }} />
      <UpdateModal {...{ update, onHideUpdate }} />
    </div>
  );
};

const View = ({ teachersQuery, onRemove }) => {
  const { loading, errors, idle, data } = teachersQuery;

  if (idle || loading) return <Loading />;
  if (errors) return <Unknown />;

  return <Filter {...{ data, onRemove }} />;
};

export default View;
