import React, { useState, useMemo, memo } from "react";
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
  BackTop,
  Tooltip,
  Popconfirm,
} from "antd";
import { EyeOutlined, PlusOutlined } from "@ant-design/icons";
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

import { isEvenNumber, capitalizeFirstLetter } from "../../../utils/helpers";
import {
  PROCESSUS_STAGE,
  DEFAULT,
  PROMOTION_TEXTS,
  DATE_FORMAT,
} from "../../../utils/constants";

import "./style.css";

const { EVAL, RECH, EC, TUT, SOUT } = PROCESSUS_STAGE;

const renderProcessus = ({ record, onChangeProcess }) => {
  const data = {
    [RECH.KEY]: (
      <Tooltip
        placement="bottom"
        title={PROMOTION_TEXTS.PROCESSUS_STAGE.TOOLTIP}
      >
        <Popconfirm
          placement="topRight"
          title={PROMOTION_TEXTS.PROCESSUS_STAGE.CHANGE_PROCESS}
          onConfirm={() =>
            onChangeProcess([
              {
                ...record,
                processus_Stage: PROCESSUS_STAGE.RECH.NEXT,
              },
            ])
          }
          okText="Oui"
          cancelText="Annuler"
        >
          <FaArrowAltCircleRight className="fa-icon" size={23} />
        </Popconfirm>
      </Tooltip>
    ),
    [EC.KEY]: (
      <Tooltip
        placement="bottom"
        title={PROMOTION_TEXTS.PROCESSUS_STAGE.TOOLTIP}
      >
        <Popconfirm
          placement="topRight"
          title={PROMOTION_TEXTS.PROCESSUS_STAGE.CHANGE_PROCESS}
          onConfirm={() =>
            onChangeProcess([
              {
                ...record,
                processus_Stage: PROCESSUS_STAGE.EC.NEXT,
              },
            ])
          }
          okText="Oui"
          cancelText="Annuler"
        >
          <FaArrowAltCircleRight className="fa-icon" size={23} />
        </Popconfirm>
      </Tooltip>
    ),
    [TUT.KEY]: (
      <Tooltip
        placement="bottom"
        title={PROMOTION_TEXTS.PROCESSUS_STAGE.TOOLTIP}
      >
        <Popconfirm
          placement="topRight"
          title={PROMOTION_TEXTS.PROCESSUS_STAGE.CHANGE_PROCESS}
          onConfirm={() =>
            onChangeProcess([
              {
                ...record,
                processus_Stage: PROCESSUS_STAGE.TUT.NEXT,
              },
            ])
          }
          okText="Oui"
          cancelText="Annuler"
        >
          <FaArrowAltCircleRight className="fa-icon" size={23} />
        </Popconfirm>
      </Tooltip>
    ),
    [SOUT.KEY]: (
      <Tooltip
        placement="bottom"
        title={PROMOTION_TEXTS.PROCESSUS_STAGE.TOOLTIP}
      >
        <Popconfirm
          placement="topRight"
          title={PROMOTION_TEXTS.PROCESSUS_STAGE.CHANGE_PROCESS}
          onConfirm={() =>
            onChangeProcess([
              {
                ...record,
                processus_Stage: PROCESSUS_STAGE.SOUT.NEXT,
              },
            ])
          }
          okText="Oui"
          cancelText="Annuler"
        >
          <FaArrowAltCircleRight className="fa-icon" size={23} />
        </Popconfirm>
      </Tooltip>
    ),
    [EVAL.KEY]: null,
    [DEFAULT]: null,
  };

  return data[get(record, "processus_Stage", DEFAULT)];
};

const menu = ({ record, onShow }) => (
  <Menu>
    <Menu.Item key="0" onClick={() => onShow(get(record, "id", {}))}>
      <EyeOutlined />
      Afficher
    </Menu.Item>
  </Menu>
);
const columns = ({ selectedRowKeys, onShow, onChangeProcess }) => [
  {
    title: "Code Formation ",
    dataIndex: "code_Formation",
    key: "code_Formation",
    align: "center",
    width: 200,
    render: (_, { id }) => get(id, "code_Formation"),
    sorter: (a, b) =>
      get(a, "id.code_Formation", "").localeCompare(
        get(b, "id.code_Formation", "")
      ),
    defaultSortOrder: "descend",
  },
  {
    title: "Année Universitaire",
    dataIndex: "id",
    key: "id",
    align: "center",
    width: 220,
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
    title: "Enseignant Responsable",
    dataIndex: "enseignant",
    key: "enseignant",
    align: "center",
    width: 220,
    render: (enseignant) => (
      <p>
        {capitalizeFirstLetter(get(enseignant, "prenom", "")) +
          " " +
          get(enseignant, "nom", "").toUpperCase()}
      </p>
    ),
    sorter: (a, b) =>
      get(a, "enseignant.prenom") + " " + get(a, "enseignant.nom") <
      get(b, "enseignant.prenom") + " " + get(b, "enseignant.nom"),
  },
  {
    title: "Nb Max Étudiant",
    dataIndex: "nb_Max_Etudiant",
    key: "nb_Max_Etudiant",
    align: "center",
    width: 120,
    sorter: (a, b) => a.nb_Max_Etudiant - b.nb_Max_Etudiant,
  },
  {
    title: "Processus Stage",
    dataIndex: "processus_Stage",
    key: "processus_Stage",
    align: "center",
    width: 420,
    sorter: (a, b) =>
      get(a, "processus_Stage", "").localeCompare(
        get(b, "processus_Stage", "")
      ),
    render: (PS, record) => (
      <Row justify="space-between">
        <Col>{get(PROCESSUS_STAGE, `${PS}.VALUE`)}</Col>
        {isEmpty(selectedRowKeys) && (
          <Col>{renderProcessus({ record, onChangeProcess })}</Col>
        )}
      </Row>
    ),
  },
  {
    title: () => (
      <Tooltip placement="top" title="Date de réponse à la liste principale">
        Date LP
      </Tooltip>
    ),
    dataIndex: "date_Reponse_Lp",
    key: "date_Reponse_Lp",
    align: "center",
    render: (date) => moment(date).format(DATE_FORMAT),
    sorter: (a, b) => moment(a.date_Reponse_Lp) - moment(b.date_Reponse_Lp),
  },
  {
    title: () => (
      <Tooltip placement="top" title="Date de réponse à la la liste d'attente">
        Date LALP
      </Tooltip>
    ),
    dataIndex: "date_Reponse_Lalp",
    key: "date_Reponse_Lalp",
    align: "center",
    width: 180,
    render: (date) => moment(date).format(DATE_FORMAT),
    sorter: (a, b) => moment(a.date_Reponse_Lalp) - moment(b.date_Reponse_Lalp),
  },
  {
    title: "Date Rentrée",
    dataIndex: "date_Rentree",
    key: "date_Rentree",
    align: "center",
    width: 180,
    render: (date) => moment(date).format(DATE_FORMAT),
    sorter: (a, b) => moment(a.date_Rentree) - moment(b.date_Rentree),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    align: "center",
    render: (_, record) => (
      <Dropdown overlay={menu({ record, onShow })} trigger={["click"]}>
        <BsThreeDots className="fa-icon" size={23} />
      </Dropdown>
    ),
  },
];

const Filter = ({ data, onChangeProcess, onClickCreate, onShow }) => {
  const [filter, setFilter] = useState(null);
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

  const onSelectChange = (_, records) => {
    setTableRowsSelection({
      selectedRowKeys: records
        .filter((item) => get(item, "processus_Stage") !== EVAL.KEY)
        .map(
          (item) =>
            `${
              get(item, "id.code_Formation") +
              get(item, "id.annee_Universitaire")
            }`
        ),
      items: records.map((item) => ({
        ...item,
        processus_Stage: get(PROCESSUS_STAGE, `${item.processus_Stage}.NEXT`),
      })),
    });
  };

  const { selectedRowKeys, items } = tableRowsSelection;
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    getCheckboxProps: (record) => ({
      disabled: get(record, "processus_Stage") === EVAL.KEY,
    }),
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
              (!isNil(get(item, "enseignant.nom", "")) &&
                !isNil(get(item, "enseignant.prenom", "")) &&
                (
                  get(item, "enseignant.prenom", "").toLowerCase() +
                  " " +
                  get(item, "enseignant.nom", "").toLowerCase()
                ).includes(filter.toLowerCase())) ||
              (!isNil(get(item, "processus_Stage", "")) &&
                get(PROCESSUS_STAGE, `${get(item, "processus_Stage")}.VALUE`)
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "nb_Max_Etudiant", 0)) &&
                get(item, "nb_Max_Etudiant", 0)
                  .toString()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "date_Reponse_Lp", "")) &&
                moment(get(item, "date_Reponse_Lp", ""))
                  .format(DATE_FORMAT)
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "date_Reponse_Lalp", "")) &&
                moment(get(item, "date_Reponse_Lalp", ""))
                  .format(DATE_FORMAT)
                  .toLowerCase()
                  .includes(filter.toLowerCase())) ||
              (!isNil(get(item, "date_Rentree", "")) &&
                moment(get(item, "date_Rentree", ""))
                  .format(DATE_FORMAT)
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

  return (
    <div className="container__antd p-top-20">
      <Row justify="center">
        <Col span={24}>
          <div className="head_bloc">
            <h1 className="h1">PROMOTIONS</h1>
            <Button className="create_button" onClick={onClickCreate}>
              <PlusOutlined />
              Ajouter Promotion
            </Button>
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
              {!isEmpty(selectedRowKeys) && !isEmpty(filteredData) && (
                <Tooltip
                  placement="bottom"
                  title={PROMOTION_TEXTS.PROCESSUS_STAGE.TOOLTIP}
                >
                  <Popconfirm
                    placement="topRight"
                    title={PROMOTION_TEXTS.PROCESSUS_STAGE.CHANGE_PROCESS}
                    onConfirm={() => onChangeProcess(items)}
                    okText="Oui"
                    cancelText="Annuler"
                  >
                    <Button
                      icon={<FaArrowAltCircleRight size={20} />}
                      className="switch_button"
                    />
                  </Popconfirm>
                </Tooltip>
              )}
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
                onChangeProcess,
                onShow,
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
    </div>
  );
};

const View = ({
  promotionsQuery,
  onChangeProcess,
  processQuery,
  onClickCreate,
  onShow,
}) => {
  const { idle, data, loading, errors } = promotionsQuery;
  const { loading: processLoading } = processQuery;

  if (idle || loading || processLoading) return <Loading />;
  if (errors) return <Unknown />;

  return (
    <Filter
      {...{ data, onChangeProcess, processQuery, onClickCreate, onShow }}
    />
  );
};

export default memo(View);
