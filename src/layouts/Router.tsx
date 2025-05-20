import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router";
import LoginForm from "../features/auth";
import MapsUtility from "../features/MapsUtility";
import { AuthLayout } from "./AuthLayout";
import { NotFoundPage } from "./components/NotFoundPage";
import ProtectedLayout from "./ProtectedLayout";

export const routers = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginForm />} />
      </Route>
      <Route path="/" element={<ProtectedLayout />}>
        <Route index element={<MapsUtility />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
