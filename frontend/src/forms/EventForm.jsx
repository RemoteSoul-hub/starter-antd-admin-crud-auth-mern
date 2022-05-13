import React from "react";
import { Form, Input, Select, Checkbox, Row, Col } from "antd";
import { DatePicker } from "@/components/CustomAntd";

export default function EventForm({ isUpdateForm = false }) {
  return (
    <>
     <Form.Item
        label="Titre"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input your title!",
          },
        ]}
      >
        <Input />
      </Form.Item>
    <Form.Item label="Status de l'événement" name="status">
        <Select rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}>
          <Select.Option value="à qualifier">à qualifier</Select.Option>
          <Select.Option value="proposition en cours">proposition en cours</Select.Option>
          <Select.Option value="proosition chiffrée">proosition chiffrée</Select.Option>
          <Select.Option value="contrat signé">contrat signé</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: "Veuillez remplir la date !",
          },
        ]}
      >
        <DatePicker format={"DD/MM/YYYY"} />
      </Form.Item>
      <Form.Item
        label="Assigné à"
        name="assigned"
        rules={[
          {
            required: true,
            message: "Veuillez remplir l'utilisateur concerné !",
          },
        ]}
      >
        <Input />
      </Form.Item>     
      <Form.Item
        label="Budget"
        name="budget"
        rules={[
          {
            required: true,
            message: "Veuillez insérer le budget !",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="tags" label="Tags">
        <Checkbox.Group rules={[
          {
            required: true,
            message: "Please input your surname!",
          },
        ]}>
          <Row>
            <Col span={8}>
              <Checkbox value="Tag1" style={{ lineHeight: '32px' }}>
                Tag1
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Tag2" style={{ lineHeight: '32px' }}>
              Tag2
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Tag3" style={{ lineHeight: '32px' }}>
              Tag3
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Tag4" style={{ lineHeight: '32px' }}>
              Tag4
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Tag5" style={{ lineHeight: '32px' }}>
              Tag5
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="Tag6" style={{ lineHeight: '32px' }}>
              Tag6
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
      </Form.Item>
    </>
  );
}
