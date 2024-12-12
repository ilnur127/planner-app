import { Navigate, Route } from "react-router-dom";

import { AppLayout, RouterLayout } from "../layouts";
import EditProfilePage from "../pages/EditProfile";
import UserListPage from "../pages/UserList";
import PlannerPage from "../pages/Planner";

const RoutesComponent = () => (
  <RouterLayout>
    <Route
      path="/"
      element={
        <AppLayout>
          <Navigate to="/planner" />
        </AppLayout>
      }
    />
    <Route
      path="/planner"
      element={
        <AppLayout>
          <PlannerPage />
        </AppLayout>
      }
    />
    <Route
      path="/clients/users"
      element={
        <AppLayout>
          <UserListPage />
        </AppLayout>
      }
    />
    <Route
      path="/clients/edit-profile/:id"
      element={
        <AppLayout>
          <EditProfilePage />
        </AppLayout>
      }
    />
  </RouterLayout>
);

export default RoutesComponent;
