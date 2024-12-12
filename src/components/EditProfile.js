import { Button, Col, Form, Input, Row } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../ui/Loader";

const EditProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const result = await response.json();
      setUser(result);
    } catch (error) {
      console.error("Ошибка загрузки пользователя:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const handleSave = async () => {
    setSaving(true);
    // Имитируем сохранение данных
    setTimeout(() => {
      setSaving(false);
      navigate("/clients/users");
    }, 1000);
  };

  if (loading || saving) {
    return <Loader />;
  }

  if (!user) {
    return <div>Пользователь не найден</div>;
  }

  return (
    <div>
      <h2>Редактирование профиля</h2>
      <Form
        name="basicInformation"
        layout="vertical"
        initialValues={{
          name: user.name,
          email: user.email,
          website: user.website,
          phone: user.phone,
          city: user.address.city,
          street: user.address.street,
          suite: user.address.suite,
        }}
        onFinish={handleSave}
      >
        <Row>
          <Col xs={24} sm={24} md={24} lg={16}>
            <Row gutter={16}>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input your name!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Phone" name="phone">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Website" name="website">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={24}>
                <Form.Item label="Street" name="street">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="City" name="city">
                  <Input />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12}>
                <Form.Item label="Suite" name="suite">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Button type="primary" htmlType="submit">
              Save Change
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default EditProfile;
