import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "./layouts/base-layout";
import { lazy, ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/entities/auth/model";
import { TSession } from "@/shared/lib/types";


const Home = lazy(() => import("../pages/home/ui/home"));
const SignIn = lazy(() => import("../pages/auth/signin/ui/signin"));
const SignUp = lazy(() => import("../pages/auth/signup/ui/signup"));

type AuthGuardProps = {
  children: ReactElement;
};

function AuthGuard({ children }: AuthGuardProps) {
  const dispatch = useDispatch();
  const { auth } = useSelector((state: { auth: TSession }) => state);

  const isAuthenticated = auth.isAuthenticated;

  if (!isAuthenticated) {
    dispatch(logout());
    return <Navigate to="signin" />;
  }

  return children;
}

export const Router = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="home" />,
    },
    {
      children: [
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup/activate/:inviteId",
          element: <SignUp />,
        },
      ],
    },
    {
      element: (
        <AuthGuard>
          <BaseLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "home",
          element: <Home />,
        },
      ],
    },
  ]);
};
