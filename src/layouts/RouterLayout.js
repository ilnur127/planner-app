import { BrowserRouter as Router, Routes } from "react-router-dom";

const RouterLayout = ({ children }) => {
  return (
    <Router>
      <Routes>{children}</Routes>
    </Router>
  );
};

export default RouterLayout;
