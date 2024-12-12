import { Layout } from "antd";
import { useEffect, useState } from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

import { MENU } from "../const";

const { Header } = Layout;

const MenuItem = (props) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (props.setIsChildActive && location.pathname === props.menuItem.href) {
      props.setIsChildActive(true);
    }
  }, [props, location.pathname]);

  return (
    <li>
      <li
        className={`${
          location.pathname === props.menuItem.href ? "active" : ""
        } ${isActive ? "activeChild" : ""} ${
          props.setIsChildActive ? "childElement" : ""
        }`}
      >
        {props.menuItem.icon ? (
          props.menuItem.icon
        ) : (
          <div style={{ width: "16px", height: "16px" }}></div>
        )}
        <span>
          <Link
            to={props.menuItem.href}
            disabled={!props.menuItem.href}
            style={{
              textDecoration: props.menuItem.href ? "none" : "line-through",
            }}
          >
            {props.menuItem.title}
          </Link>
          {props.menuItem.children?.length > 0 ? (
            isActive ? (
              <UpOutlined
                onClick={() => setIsActive(false)}
                style={{ color: "black" }}
              />
            ) : (
              <DownOutlined
                onClick={() => setIsActive(true)}
                style={{ color: "black" }}
              />
            )
          ) : (
            <></>
          )}
        </span>
      </li>
      <ul
        style={{
          display:
            props.menuItem.children?.length > 0 && !isActive ? "none" : "block",
        }}
      >
        {props.menuItem.children?.map((menuItem, i) => (
          <MenuItem
            key={i}
            menuItem={menuItem}
            setIsChildActive={setIsActive}
          />
        ))}
      </ul>
    </li>
  );
};

const AppLayout = ({ children }) => {
  return (
    <>
      <Header className="header">
        <img src="/logo.png" alt="Logo" />
      </Header>
      <main>
        <nav>
          <ul>
            {MENU.map((menuGroup, i) => (
              <li>
                <h2>{menuGroup.title.toUpperCase()}</h2>
                <ul>
                  {menuGroup.children.map((menuGroupItem) => (
                    <MenuItem key={i} menuItem={menuGroupItem} />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
        <section>{children}</section>
      </main>
    </>
  );
};

export default AppLayout;
