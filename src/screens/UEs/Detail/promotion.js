import React, { useState, useMemo, useEffect } from "react";
import get from "lodash/get";
import isNil from "lodash/isNil";

import {
  Card,
  Row,
  Col,
  Divider,
  Button,
  Tooltip,
  Input,
  InputNumber,
  Modal,
  Table,
  Form,
} from "antd";
import {
  ArrowLeftOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import className from "classnames";

import Unknown from "../../../Shared/Unknown";
import Loading from "../../../Shared/Loading";
import Empty from "../../../Shared/Empty";
import { capitalizeFirstLetter, isEvenNumber } from "../../../utils/helpers";

import "./style.css";

const { TextArea } = Input;
const { Item } = Form;
const heurePopover = (content) => <p>{content}</p>;

const Detail = ({
  title,
  content,
  editElement,
  length = 1,
  popover = null,
  isEditDisabled,
}) => (
  <Col span={length}>
    {popover ? (
      <Tooltip title={heurePopover(popover)} placement="right">
        <Button type="text" className="popover_button" size="large">
          <h3 className="fw-700">{title}</h3>
        </Button>
      </Tooltip>
    ) : (
      <h3 className="fw-700">{title}</h3>
    )}

    {isEditDisabled ? editElement : <h4 className="fw-500">{content}</h4>}
  </Col>
);
const columns = [
  {
    title: "Nom",
    dataIndex: "nom",
    key: "nom",
    render: (_, record) => get(record, "nom", "").toUpperCase(),
    sorter: (a, b) => get(a, "nom", "").localeCompare(get(b, "nom", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: "Prénom",
    dataIndex: "prenom",
    key: "prenom",
    width: 120,
    render: (_, record) => capitalizeFirstLetter(get(record, "prenom", "")),
    sorter: (a, b) => get(a, "prenom", "").localeCompare(get(b, "prenom", "")),
    defaultSortOrder: "ascend",
  },
  {
    title: "Email",
    dataIndex: "email_Ubo",
    key: "email_Ubo",
  },
  {
    title: "ETD disponible",
    dataIndex: "nbh_Etd",
    key: "etd",
    width: 300,
    render: (_, record) => 192 - get(record, "nbh_Etd", 0),
  },
];
const TeachersModal = ({
  teacherState,
  teachers = [],
  onSelectTeacher,
  onCloseTeachersModal,
  form,
}) => {
  const { visible } = teacherState;
  const [filter, setFilter] = useState(null);

  const onRowClick = (record) => {
    form.setFieldsValue({
      enseignant:
        get(record, "nom").toUpperCase() +
        " " +
        capitalizeFirstLetter(get(record, "prenom")) +
        " | " +
        get(record, "email_Ubo"),
    });
    onSelectTeacher(record);
    setFilter(null);
  };
  const filteredData = useMemo(
    () =>
      !isNil(filter)
        ? teachers.filter(
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
                  .includes(filter.toLowerCase()))
          )
        : teachers,
    [filter, teachers]
  );

  return (
    <Modal
      visible={visible}
      footer={false}
      onCancel={() => {
        onCloseTeachersModal();
        setFilter(null);
      }}
      bodyStyle={{ padding: 50 }}
      maskClosable={false}
      width={900}
    >
      <Row justify="start">
        <Col span={12}>
          <Input
            value={filter}
            size="large"
            placeholder="Rechercher ..."
            onChange={(_) => setFilter(_.target.value)}
          />
        </Col>
      </Row>
      <Divider />
      <Table
        className="cursor_pointer"
        rowKey={"no_Enseignant"}
        columns={columns}
        onRow={(record) => ({
          onClick: () => 192 - record.nbh_Etd > 0 && onRowClick(record),
        })}
        rowClassName={(record, index) =>
          className({
            "table-row-red": 192 - record.nbh_Etd <= 0,
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
    </Modal>
  );
};

const DetailCard = ({
  ue,
  teachers,
  onHideUeDetail,
  onUpdateUe,
  onCalculateEtd,
  calculateEtdQuery,
  onCleanEtdError,
}) => {
  const [form] = Form.useForm();
  const initialState = {
    visible: false,
    teacher: get(ue, "enseignant", {}),
  };

  const [teacherState, setTeacherState] = useState(initialState);

  const onCloseTeachersModal = () =>
    setTeacherState({ ...teacherState, visible: false });

  const onSelectTeacher = (teacher) =>
    setTeacherState({ teacher, visible: false });

  const [isEditDisabled, setEditDisabled] = useState(false);
  const [isValidateDisabled, setVlidateDisable] = useState(false);
  const rules = [{ required: true, message: "Ce champs est obligatoire." }];

  const onFieldsChange = (fields) => {
    const controlledFields = fields.map((e) =>
      e.name[0] === "description"
        ? {
            ...e,
            required: false,
          }
        : {
            ...e,
            required: true,
          }
    );
    setVlidateDisable(
      controlledFields.some(
        ({ errors, value, required }) =>
          (required && (errors.length > 0 || isNil(value))) || errors.length > 0
      )
    );
  };

  const parser = (value) => value && Math.round(value);

  const { errors, loading, data } = calculateEtdQuery;

  const isContainNullValues = (values = []) => values.some((e) => isNil(e));

  useEffect(() => {
    if (!isNil(data, "nbh_Etd")) {
      form.setFieldsValue({ nbh_Etd: get(data, "nbh_Etd") });
    }
    if (errors) {
      form.setFieldsValue({ nbh_Etd: null });
    }
  }, [form, calculateEtdQuery]);

  const ueTopItems = [
    {
      title: "Code de l'unité d'enseignement",
      content: get(ue, "id.code_Ue"),
      editElement: (
        <Item name={"code_Ue"} rules={rules}>
          <Input size="large" />
        </Item>
      ),
      length: 7,
    },
    {
      title: "Code formation",
      content: get(ue, "id.code_Formation"),
      editElement: (
        <Item name={"code_Formation"} rules={rules}>
          <Input size="large" />
        </Item>
      ),
      length: 7,
    },
    {
      title: "Désignation",
      content: get(ue, "designation"),
      editElement: (
        <Item name={"designation"} rules={rules}>
          <Input size="large" />
        </Item>
      ),

      length: 7,
    },
  ];
  const ueSecondItems = [
    {
      title: "Nombre d'heures CM",
      popover: "Nombre d'heures cours magistraux",
      content: get(ue, "nbh_Cm") + " h",
      editElement: (
        <Item name={"nbh_Cm"} rules={rules}>
          <InputNumber
            type="number"
            min={0}
            className="w-100"
            size="large"
            parser={parser}
            onChange={(value) =>
              !isContainNullValues([
                value,
                form.getFieldValue("nbh_Tp"),
                form.getFieldValue("nbh_Td"),
              ]) &&
              onCalculateEtd({
                id: get(initialState.teacher, "no_Enseignant"),
                cm: value,
                tp: form.getFieldValue("nbh_Tp"),
                td: form.getFieldValue("nbh_Td"),
              })
            }
          />
        </Item>
      ),
      length: 15,
    },
    {
      title: "Nombre d'heures TP",
      popover: "Nombre d'heures travaux pratiques",
      content: get(ue, "nbh_Tp") + " h",
      editElement: (
        <Item name={"nbh_Tp"} rules={rules}>
          <InputNumber
            type="number"
            className="w-100"
            min={0}
            size="large"
            parser={parser}
            onChange={(value) =>
              !isContainNullValues([
                value,
                form.getFieldValue("nbh_Cm"),
                form.getFieldValue("nbh_Td"),
              ]) &&
              onCalculateEtd({
                id: get(initialState.teacher, "no_Enseignant"),
                tp: value,
                cm: form.getFieldValue("nbh_Cm"),
                td: form.getFieldValue("nbh_Td"),
              })
            }
          />
        </Item>
      ),
      length: 15,
    },
    {
      title: "Nombre d'heures TD",
      popover: "Nombre d'heures travaux dérigés",
      content: get(ue, "nbh_Td") + " h",
      editElement: (
        <Item name={"nbh_Td"} rules={rules}>
          <InputNumber
            type="number"
            className="w-100"
            min={0}
            size="large"
            parser={parser}
            onChange={(value) =>
              !isContainNullValues([
                value,
                form.getFieldValue("nbh_Cm"),
                form.getFieldValue("nbh_Tp"),
              ]) &&
              onCalculateEtd({
                id: get(initialState.teacher, "no_Enseignant"),
                td: value,
                cm: form.getFieldValue("nbh_Cm"),
                tp: form.getFieldValue("nbh_Tp"),
              })
            }
          />
        </Item>
      ),
      length: 15,
    },
    {
      title: "Equivalent travaux dirigés",
      content: get(ue, "nbh_Etd") + " h",
      editElement: (
        <Item
          name={"nbh_Etd"}
          rules={rules}
          help={errors ? "Quelque chose enfreint la règle" : ""}
          validateStatus={errors ? "error" : loading ? "validating" : ""}
          hasFeedback
        >
          <Input
            style={{ cursor: "not-allowed" }}
            readOnly
            type="number"
            className="w-100"
            min={0}
            size="large"
          />
        </Item>
      ),
      length: 15,
    },
  ];
  const ueThirdItems = [
    {
      title: "Enseignant responsable",
      content:
        get(ue, "enseignant.nom").toUpperCase() +
        " " +
        capitalizeFirstLetter(get(ue, "enseignant.prenom")) +
        " | " +
        get(ue, "enseignant.email_Ubo"),
      length: 24,
      editElement: (
        <>
          <Item name={"enseignant"} rules={rules}>
            <Input
              size="large"
              disabled
              addonAfter={
                <SearchOutlined
                  className="cursor_pointer"
                  onClick={() =>
                    setTeacherState({ ...teacherState, visible: true })
                  }
                />
              }
            />
          </Item>
          <TeachersModal
            {...{
              teachers,
              teacherState,
              onSelectTeacher,
              onCloseTeachersModal,
              form,
            }}
          />
        </>
      ),
    },
    {
      title: "Description",
      content: get(ue, "description"),
      editElement: (
        <Item name={"description"}>
          <TextArea
            size="large"
            style={{ height: "160px" }}
            className="w-100"
          />
        </Item>
      ),
      length: 24,
    },
  ];
  const onFinish = (values) => {
    const { code_Formation, code_Ue, ...left } = values;
    const data = {
      id: {
        code_Formation,
        code_Ue,
      },
      ...left,
      enseignant: teacherState.teacher,
      code_Formation: get(ue, "id.code_Formation"),
      code_Ue: get(ue, "id.code_Ue"),
      semestre: "semestre",
    };
    onUpdateUe(data);
  };
  return (
    <div className="container__antd p-top-20">
      <Col span={24}>
        <Card className="card">
          <div justify="space-between">
            <div className="head_bloc">
              <h1 className="h1">
                DÉTAILS DE L'UNITÉ D'ENSEIGNEMENT :{" " + get(ue, "id.code_Ue")}
              </h1>
              <div className="button_bloc_promotion">
                <Button
                  className="back_button"
                  onClick={() => {
                    onHideUeDetail();
                    setEditDisabled(false);
                    onCleanEtdError();
                    form.resetFields();
                  }}
                >
                  <ArrowLeftOutlined />
                  Retour
                </Button>
                <Button
                  disabled={isEditDisabled}
                  className="create_button"
                  onClick={() => setEditDisabled(true)}
                >
                  <EditOutlined />
                  Modifier
                </Button>
              </div>
            </div>
          </div>
          <Divider />
          <Form
            form={form}
            onFinish={onFinish}
            scrollToFirstError
            onFieldsChange={(_, fields) => onFieldsChange(fields)}
            initialValues={{
              description: get(ue, "description"),
              designation: get(ue, "designation"),
              enseignant:
                get(ue, "enseignant.nom").toUpperCase() +
                " " +
                capitalizeFirstLetter(get(ue, "enseignant.prenom")) +
                " | " +
                get(ue, "enseignant.email_Ubo"),
              code_Formation: get(ue, "id.code_Formation"),
              code_Ue: get(ue, "id.code_Ue"),
              nbh_Cm: get(ue, "nbh_Cm"),
              nbh_Etd: get(ue, "nbh_Etd"),
              nbh_Td: get(ue, "nbh_Td"),
              nbh_Tp: get(ue, "nbh_Tp"),
            }}
          >
            <Row type="flex" justify="space-between" gutter={[2, 20]}>
              {ueTopItems.map(
                ({ title, content, editElement, length }, index) => (
                  <Detail
                    key={index}
                    title={title}
                    content={content}
                    length={length}
                    editElement={editElement}
                    isEditDisabled={isEditDisabled}
                  />
                )
              )}
            </Row>
            <Divider />

            <Row type="flex">
              <Col span={10}>
                <Row type="flex" justify="space-between" gutter={[2, 20]}>
                  {ueSecondItems.map(
                    (
                      { title, content, length, popover, editElement },
                      index
                    ) => (
                      <Detail
                        key={index}
                        title={title}
                        content={content}
                        length={length}
                        popover={popover}
                        editElement={editElement}
                        isEditDisabled={isEditDisabled}
                      />
                    )
                  )}
                </Row>
              </Col>
              <Divider type="vertical" className="divider_height" />
              <Col span={12}>
                <Row type="flex" justify="start" gutter={[2, 20]}>
                  {ueThirdItems.map(
                    ({ title, content, length, editElement }, index) => (
                      <Detail
                        key={index}
                        title={title}
                        content={content}
                        length={length}
                        editElement={editElement}
                        isEditDisabled={isEditDisabled}
                      />
                    )
                  )}
                </Row>
              </Col>
            </Row>
            <Row justify="end" gutter={[8, 8]}>
              <Col>
                <Button
                  disabled={!isEditDisabled}
                  className="back_button"
                  onClick={() => {
                    form.resetFields();
                    setEditDisabled(false);
                    onCleanEtdError();
                  }}
                >
                  Annuler
                </Button>
              </Col>
              <Col>
                <Button
                  htmlType="submit"
                  disabled={!isEditDisabled || isValidateDisabled || errors}
                  className="create_button"
                >
                  Valider
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Col>
    </div>
  );
};

const View = ({
  ueQuery,
  teacherQuery,
  onHideUeDetail,
  onUpdateUe,
  onCalculateEtd,
  calculateEtdQuery,
  onCleanEtdError,
}) => {
  const {
    idle: ueIdle,
    data: ue,
    loading: uesLoading,
    errors: uesErrors,
  } = ueQuery;
  const {
    idle: teachersIdle,
    data: teachers,
    loading: teachersLoading,
    errors: teachersErrors,
  } = teacherQuery;

  if (ueIdle || teachersIdle) return <div />;
  if (uesLoading || teachersLoading) return <Loading />;
  if (uesErrors || teachersErrors) return <Unknown />;

  return (
    <DetailCard
      {...{
        onUpdateUe,
        onCalculateEtd,
        calculateEtdQuery,
        onHideUeDetail,
        ue,
        teachers,
        onCleanEtdError,
      }}
    />
  );
};

export default View;
