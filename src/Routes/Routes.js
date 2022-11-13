import React from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LayoutComponent from "../components/layoutComponent";
import { DataJobProvider } from "../context/DataJobContext";
// import GameForm from "../game-form/game-form";
import JobList from "../dashboard/list-job";
import Home from "../home/LandingPage";
import Login from "../login/login";
import Regist from "../registrasi/resgistrasi";
import DashboardComponent from "../components/dashboard-component/dashboardComponent";
import CardProfile from "../dashboard/profile";
import JobCard from "../home/job-vacancy";
import JobForm from "../dashboard/job-form";
import ChangePassword from "../dashboard/changePassword";
import { Redirect } from "react-router-dom";
import SearchSection from "../home/searchSection";
import NotFound from "./notFound";

const Pages = () => {
  const LoginRoute = ({ ...props }) => {
    if (Cookies.get("token") === undefined) {
      return <Route {...props} />;
    } else if (Cookies.get("token") !== undefined) {
      return <Redirect to={"/"} />;
    }
  };
  const DashboardRoute = ({ ...props }) => {
    if (Cookies.get("token") !== undefined) {
      return <Route {...props} />;
    } else if (Cookies.get("token") === undefined) {
      return <Redirect to={"/login"} />;
    }
  };
  return (
    <>
      <BrowserRouter>
        <DataJobProvider>
          {/* <Navbar /> */}
          <Switch>
            <Route path="/" exact>
              <LayoutComponent content={<Home />} />
            </Route>
            <Route path="/job-vacancy/:slug" exact>
              <LayoutComponent content={<JobCard />} />
            </Route>
            <Route path="/search/:valueOfSearch" exact>
              <LayoutComponent content={<SearchSection />} />
            </Route>
            <DashboardRoute path="/dashboard/list-job-vacancy" exact>
              <DashboardComponent content={<JobList />} />
            </DashboardRoute>
            <DashboardRoute path="/dashboard/list-job-vacancy/edit/:slug" exact>
              <DashboardComponent content={<JobForm />} />
            </DashboardRoute>
            <DashboardRoute path="/dashboard/list-job-vacancy/form" exact>
              <DashboardComponent content={<JobForm />} />
            </DashboardRoute>

            <DashboardRoute path="/dashboard/profile" exact>
              <DashboardComponent content={<CardProfile />} />
            </DashboardRoute>
            <DashboardRoute path="/dashboard/profile/change-password" exact>
              <DashboardComponent content={<ChangePassword />} />
            </DashboardRoute>
            <LoginRoute path="/login" exact>
              <LayoutComponent content={<Login />} />
            </LoginRoute>
            <Route path="/register" exact>
              <LayoutComponent content={<Regist />} />
            </Route>
            <Route path="*">
              <LayoutComponent content={<NotFound />} />
            </Route>
          </Switch>
        </DataJobProvider>
      </BrowserRouter>
    </>
  );
};

export default Pages;
