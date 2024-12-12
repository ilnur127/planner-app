import React from "react";

import UserList from "../components/UserList";

const tableColumns = [
  {
    title: "Имя",
    dataIndex: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Телефон",
    dataIndex: "phone",
  },
  {
    title: "Сайт",
    dataIndex: "website",
  },
  {
    title: "Компания",
    dataIndex: ["company", "name"],
  },
  {
    title: "Адрес",
    dataIndex: "address",
    render: (value) => `${value.city} ${value.street} ${value.suite}`,
  },
];

const UserListPage = () => {
  return <UserList tableColumns={tableColumns} />;
};

export default UserListPage;
