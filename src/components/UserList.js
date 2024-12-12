// src/pages/UserList.js
import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Loader from "../ui/Loader";

const UserList = ({ tableColumns }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const result = await response.json();
      setUsers(result);
    } catch (error) {
      console.error("Ошибка загрузки пользователей:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2>Список клиентов</h2>
      <Table
        columns={tableColumns}
        dataSource={users}
        rowKey="id"
        onRow={(record) => {
          return {
            onClick: () => navigate(`/clients/edit-profile/${record.id}`),
          };
        }}
      />
    </div>
  );
};

export default UserList;
