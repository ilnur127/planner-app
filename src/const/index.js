import { QuestionCircleOutlined } from "@ant-design/icons";

export const MENU = [
  {
    title: "Основные",
    href: "",
    children: [
      {
        title: "Дашборд",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Каталог",
        href: "",
        icon: <QuestionCircleOutlined />,
        children: [
          { title: "Товары", href: "" },
          { title: "Категории", href: "" },
          { title: "Коллекция", href: "" },
          { title: "Комбо", href: "" },
        ],
      },
      {
        title: "Заказы",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Клиенты",
        href: "/clients",
        icon: <QuestionCircleOutlined />,
        children: [
          { title: "Список клиентов", href: "/clients/users" },
          { title: "Группы клиентов", href: "" },
        ],
      },
      {
        title: "Баннеры",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Промокоды",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Оффлайн точки",
        href: "",
        icon: <QuestionCircleOutlined />,
        children: [
          { title: "Адресса", href: "" },
          { title: "Геозоны", href: "" },
        ],
      },
      {
        title: "Сотрудники",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Рассылки",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
    ],
  },
  {
    title: "Системные",
    href: "",
    children: [
      {
        title: "Настройки",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Планнер",
        href: "/planner",
        icon: <QuestionCircleOutlined />,
      },
      {
        title: "Логи",
        href: "",
        icon: <QuestionCircleOutlined />,
      },
    ],
  },
];
