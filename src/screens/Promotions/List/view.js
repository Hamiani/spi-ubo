import React, { useState, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  Table,
  Row,
  Col,
  Divider,
  Dropdown,
  Button,
  Menu,
  Input,
  Modal,
  BackTop,
} from "antd";

import {
  EyeOutlined,
  PlusCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { FaArrowAltCircleUp, FaArrowAltCircleRight } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import className from "classnames";
import get from "lodash/get";
import isNil from "lodash/isNil";
import take from "lodash/take";
import isEmpty from "lodash/isEmpty";
import moment from "moment";

import Loading from "../../../Shared/Loading";
import Empty from "../../../Shared/Empty";
import Unknown from "../../../Shared/Unknown";

import Detail from "../Detail";

import { isEvenNumber } from "../../../utils/helpers";
import { PROCESSUS_STAGE, PROCESSUS, DEFAULT } from "../../../utils/constants";

import "./style.css";
import Create from "../Create";

const { EVAL, RECH, EC, TUT, SOUT } = PROCESSUS_STAGE;

const renderProcessus = ({ record, onChangeProcess }) => {
  const data = {
    [RECH]: (
      <FaArrowAltCircleRight
        className="fa-icon"
        size={23}
        onClick={() =>
          onChangeProcess([
            {
              ...record,
              processus_Stage: get(PROCESSUS, "RECH.next"),
            },
          ])
        }
      />
    ),
    [EC]: (
      <FaArrowAltCircleRight
        className="fa-icon"
        size={23}
        onClick={() =>
          onChangeProcess([
            {
              ...record,
              processus_Stage: get(PROCESSUS, "EC.next"),
            },
          ])
        }
      />
    ),
    [TUT]: (
      <FaArrowAltCircleRight
        className="fa-icon"
        size={23}
        onClick={() =>
          onChangeProcess([
            {
              ...record,
              processus_Stage: get(PROCESSUS, "TUT.next"),
            },
          ])
        }
      />
    ),
    [SOUT]: (
      <FaArrowAltCircleRight
        className="fa-icon"
        size={23}
        onClick={() =>
          onChangeProcess([
            {
              ...record,
              processus_Stage: get(PROCESSUS, "SOUT.next"),
            },
          ])
        }
      />
    ),
    [EVAL]: null,
    [DEFAULT]: null,
  };

  return data[get(record, "processus_Stage", DEFAULT)];
};

const menu = ({ record, onShowDetail }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShowDetail(get(record, "id", {}))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
  </Menu>
);
const columns = ({
  selectedRowKeys,
  onShowDetail,
  onChangeProcess,
}) => [
  {
    title: "Code Formation ",
    dataIndex: "code_Formation",
    key: "code_Formation",
    render: (_, { id }) => get(id, "code_Formation"),
    sorter: (a, b) =>
      get(a, "id.code_Formation", "") < get(b, "id.code_Formation", ""),
    defaultSortOrder: "descend",
  },
  {
    title: "Année Universitaire",
    dataIndex: "id",
    key: "id",
    render: (_, { id }) => get(id, "annee_Universitaire"),
    defaultSortOrder: "ascend",
    sorter: (a, b) =>
      moment(
        get(get(a, "id.annee_Universitaire", "").split("-"), "[0]", moment()) 
      ) -
      moment(
        get(get(b, "id.annee_Universitaire", "").split("-"), "[0]", moment())
      ),
  },
  {
    title: "Sigle Promotion",
    dataIndex: "sigle_Promotion",
    key: "sigle_Promotion",
    sorter: (a, b) =>
      get(a, "sigle_Promotion", "") < get(b, "sigle_Promotion", ""),
  },
  {
    title: "Enseignant responsable",
    dataIndex: "enseignant",
    key: "enseignant",
    render: (enseignant) => (
      <p>{get(enseignant, "nom") + " " + get(enseignant, "prenom")}</p>
    ),
    sorter: (a, b) =>
      get(a, "enseignant.nom") + " " + get(a, "enseignant.prenom") <
      get(b, "enseignant.nom") + " " + get(b, "enseignant.prenom"),
  },
  {
    title: "Nombre Max d'étudiant",
    dataIndex: "nb_Max_Etudiant",
    key: "nb_Max_Etudiant",
    sorter: (a, b) => a.nb_Max_Etudiant - b.nb_Max_Etudiant,
  },
  {
    title: "Processus Stage",
    dataIndex: "processus_Stage",
    key: "processus_Stage",
    sorter: (a, b) =>
      get(a, "processus_Stage", "") < get(b, "processus_Stage", ""),
    render: (ps, record) => (
      <Row justify="space-around">
        <Col>{ps}</Col>
        {isEmpty(selectedRowKeys) && (
          <Col>{renderProcessus({ record, onChangeProcess })}</Col>
        )}
      </Row>
    ),
  },
  {
    title: "Date LP",
    dataIndex: "date_Reponse_Lp",
    key: "date_Reponse_Lp",
    sorter: (a, b) => moment(a.date_Reponse_Lp) - moment(b.date_Reponse_Lp),
  },
  {
    title: "Date Rentrée",
    dataIndex: "date_Rentree",
    key: "date_Rentree",
    sorter: (a, b) => moment(a.date_Rentree) - moment(b.date_Rentree),
  },
  {
    title: "Date LALP",
    dataIndex: "date_Reponse_Lalp",
    key: "date_Reponse_Lalp",
    sorter: (a, b) => moment(a.date_Reponse_Lalp) - moment(b.date_Reponse_Lalp),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (_, record) => (
      <Dropdown overlay={menu({ record, onShowDetail })} trigger={["click"]}>
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
      width={1400}
      footer={false}
      visible={visible}
      onCancel={onHideDetail}
      maskClosable={false}
    >
      <Detail {...{ onGoBack: onHideDetail, filter }} />
    </Modal>
  );
};

const Filter = ({ data, onChangeProcess }) => {
  const [filter, setFilter] = useState(null);
  const [detail, setDetail] = useState({ visible: false, filter: {} });
  const [tableRowsSelection, setTableRowsSelection] = useState({
    items: [],
    selectedRowKeys: [],
  });
  const [state, setState] = useState({
    hasMore: true,
    items: take(data, 20),
    page: 1,
    size: 20,
  });

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

  const onSelectChange = (_, records) => {
    setTableRowsSelection({
      selectedRowKeys: records
        .filter((item) => get(item, "processus_Stage") !== EVAL)
        .map(
          (item) =>
            `${
              get(item, "id.code_Formation") +
              get(item, "id.annee_Universitaire")
            }`
        ),
      items: records.map((item) => ({
        ...item,
        processus_Stage: get(PROCESSUS, `${item.processus_Stage}.next`),
      })),
    });
  };
  const onReset = () =>
    setTableRowsSelection({
      items: [],
      selectedRowKeys: [],
    });
  const { selectedRowKeys, items } = tableRowsSelection;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) =>
      get(record, "processus_Stage") === EVAL && {
        style: {
          display: "none",
        },
      },
  };

  const filteredData = useMemo(
    () =>
      !isNil(filter)
        ? state.items.filter(
            (item) =>
              (!isNil(get(item, "id.code_Formation", "")) &&
                get(item, "id.code_Formation", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "id.annee_Universitaire", "")) &&
                get(item, "id.annee_Universitaire", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "sigle_Promotion", "", "")) &&
                get(item, "sigle_Promotion", "", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "enseignant.nom", "")) &&
                !isNil(get(item, "enseignant.prenom", "")) &&
                (
                  get(item, "enseignant.nom", "").toLowerCase() +
                  " " +
                  get(item, "enseignant.prenom", "").toLowerCase()
                ).includes(filter.toLowerCase())) ||
              (!isNil(get(item, "processus_Stage", "")) &&
                get(item, "processus_Stage", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "nb_Max_Etudiant", 0)) &&
                get(item, "nb_Max_Etudiant", 0)
                  .toString()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "date_Reponse_Lp", "")) &&
                get(item, "date_Reponse_Lp", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "date_Reponse_Lalp", "")) &&
                get(item, "date_Reponse_Lalp", "")
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "date_Rentree", "")) &&
                get(item, "date_Rentree", "")
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
  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <div className="head_bloc">
            <h1 className="h1">LES PROMOTIONS</h1>
            {/* <Button
              icon={<PlusOutlined />}
              className="back_button"
              onClick={showModal}
            >
              Ajouter
            </Button> */}
            <Button type="primary" onClick={showModal}>
              <PlusCircleOutlined />
              Ajouter Promotion
            </Button>
            <Modal
              style={{ top: 20 }}
              visible={visible}
              onOk={handleOK}
              onCancel={handleCancel}
              footer={null}
              confirmLoading={confirmLoading}
              closable={false}
              width={1000}
              bodyStyle={{ padding: 30 }}
              maskClosable={false}
            >
              <Create handleClose={handleCancel} />
            </Modal>
          </div>

          <Divider />
          <Row justify="space-between">
            <Col span={8}>
              <Input
                size="large"
                placeholder="Rechercher ..."
                onChange={(_) => setFilter(_.target.value)}
              />
            </Col>
            <Col>
              <div className="selection_buttons p-bottom-10">
                <Button
                  disabled={isEmpty(selectedRowKeys) || isEmpty(filteredData)}
                  icon={<FaArrowAltCircleRight size={20} />}
                  className="switch_button"
                  onClick={() => onChangeProcess(items)}
                />
                <Button
                  disabled={isEmpty(selectedRowKeys) || isEmpty(filteredData)}
                  className="switch_button_reload"
                  onClick={onReset}
                  icon={<ReloadOutlined size={20} />}
                />
              </div>
            </Col>
          </Row>

          <Divider />
          <div className="span-size">
            <span>
              {filteredData.length} Promotions sur {data.length}
            </span>
          </div>

          <InfiniteScroll
            pageStart={state.page}
            loadMore={onLoadMore}
            hasMore={state.hasMore}
            loader={<Loading key={0} />}
          >
            <Table
              rowKey={(record) =>
                `${
                  get(record, "id.code_Formation") +
                  get(record, "id.annee_Universitaire")
                }`
              }
              columns={columns({
                selectedRowKeys,
                onShowDetail,
                onChangeProcess,
              })}
              rowClassName={(_, index) =>
                className({
                  "table-row-dark": isEvenNumber(index),
                  "table-row-light": !isEvenNumber(index),
                })
              }
              showSorterTooltip={false}
              rowSelection={rowSelection}
              dataSource={filteredData}
              pagination={false}
              locale={{
                emptyText: <Empty description="Aucune Promotion trouvée" />,
              }}
            />
          </InfiniteScroll>
        </Col>
      </Row>
      <BackTop>
        <FaArrowAltCircleUp size={30} color={"#419197"} />
      </BackTop>
      <DetailModal {...{ detail, onHideDetail }} />
    </div>
  );
};

const View = ({ promotionsQuery, onChangeProcess, processQuery }) => {
  const { idle, data, loading, errors } = promotionsQuery;
  const { loading: processLoading } = processQuery;

  if (idle || loading || processLoading) return <Loading />;
  if (errors) return <Unknown />;

  return <Filter {...{ data, onChangeProcess, processQuery }} />;
};

export default View;
