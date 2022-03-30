import React, { useState } from "react";
import get from "lodash/get";

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
import { isEmpty } from "lodash";

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
    dataIndex: "etd",
    key: "etd",
    width: 300,
    render: (_, record) => 192 - get(record, "nbh_Etd", 0),
  },
];
const TeachersModal = ({
  teacherState,
  onCloseTeachersModal,
  teachers = [],
  onSelectTeacher,
  form,
}) => {
  const { visible, teacher, selectedRowKeys } = teacherState;
  const rowSelection = {
    selectedRowKeys,
    type: "radio",
    getCheckboxProps: (record) => ({
      disabled: 192 - record.nbh_Etd <= 0,
    }),
    onChange: (selectedRowKeys, selectedRows) =>
      onSelectTeacher({
        teacher: get(selectedRows, "[0]", {}),
        selectedRowKeys,
      }),
  };
  return (
    <Modal
      visible={visible}
      footer={false}
      onCancel={onCloseTeachersModal}
      bodyStyle={{ padding: 50 }}
      maskClosable={false}
      width={900}
    >
      <Row justify="space-between">
        <Col>
          <Input
            size="large"
            placeholder="Rechercher ..."
            onChange={(_) => {}}
            addonAfter={<SearchOutlined />}
          />
        </Col>
        <Col>
          <Button
            disabled={isEmpty(teacher)}
            className="create_button"
            onClick={() => {
              form.setFieldsValue({
                enseignant:
                  get(teacher, "nom").toUpperCase() +
                  " " +
                  capitalizeFirstLetter(get(teacher, "prenom")) +
                  " | " +
                  get(teacher, "email_Ubo"),
              });
              onCloseTeachersModal();
            }}
          >
            Choisir
          </Button>
        </Col>
      </Row>
      <Divider />
      <Table
        className="cursor_pointer"
        rowKey={"no_Enseignant"}
        columns={columns}
        rowClassName={(record, index) =>
          className({
            "table-row-red": 192 - record.nbh_Etd <= 0,
            "table-row-dark": isEvenNumber(index),
            "table-row-light": !isEvenNumber(index),
          })
        }
        dataSource={teachers}
        showSorterTooltip={false}
        pagination={false}
        rowSelection={rowSelection}
        locale={{
          emptyText: <Empty description="Aucun Enseignant trouvé." />,
        }}
      />
    </Modal>
  );
};

const DetailCard = ({ ue, teachers, onHideUeDetail }) => {
  const [form] = Form.useForm();
  const initialState = {
    visible: false,
    teacher: {},
    selectedRowKeys: [],
  };
  const [teacherState, setTeacherState] = useState(initialState);
  const onCloseTeachersModal = () => setTeacherState(initialState);
  const onSelectTeacher = ({ teacher, selectedRowKeys }) =>
    setTeacherState({ ...teacherState, teacher, selectedRowKeys });

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
          (required && (errors.length > 0 || !value)) || errors.length > 0
      )
    );
  };

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
          <InputNumber min={0} className="w-100" size="large" />
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
          <InputNumber className="w-100" min={0} size="large" />
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
          <InputNumber className="w-100" min={0} size="large" />
        </Item>
      ),
      length: 15,
    },
    {
      title: "Equivalent travaux dirigés",
      content: get(ue, "nbh_Etd") + " h",
      editElement: (
        <Item name={"nbh_Etd"} rules={rules}>
          <InputNumber className="w-100" min={0} size="large" />
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
              onCloseTeachersModal,
              onSelectTeacher,
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
              <Col span={10}>
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
                  }}
                >
                  Annuler
                </Button>
              </Col>
              <Col>
                <Button
                  htmlType="submit"
                  disabled={!isEditDisabled || isValidateDisabled}
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

const View = ({ ueQuery, teacherQuery, onHideUeDetail }) => {
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

  return <DetailCard {...{ onHideUeDetail, ue, teachers }} />;
};

export default View;
