import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = ({ condition, path }) => (
  <>{condition ? <Outlet /> : <Navigate to={path} />}</>
);
export default ProtectedRoutes;
