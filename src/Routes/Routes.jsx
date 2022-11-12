import React from "react";
import Cookies from "js-cookie";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
import { Navigate } from "react-router-dom";
import SearchSection from "../home/searchSection";
import NotFound from "./notFound";

const RoutesComponent = () => {
  const token = Cookies.get("token");
  return (
    <BrowserRouter>
      <DataJobProvider>
        <LayoutComponent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrasi" element={<Regist />} />
            <Route path="/dashboard" element={<DashboardComponent />}>
              <Route path="/" element={<JobList />} />
              <Route path="/profile" element={<CardProfile />} />
              <Route path="/job-form" element={<JobForm />} />
              <Route path="/change-password" element={<ChangePassword />} />
            </Route>
            <Route path="/search/:search" element={<SearchSection />} />
            <Route path="/job-vacancy/:id" element={<JobCard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LayoutComponent>
      </DataJobProvider>
    </BrowserRouter>
  );
};

export default RoutesComponent;

// const Pages = () => {
//   const LoginRoute = ({ ...props }) => {
//     if (Cookies.get("token") === undefined) {
//       return <Route {...props} />;
//     } else if (Cookies.get("token") !== undefined) {
//       return <Navigate to={"/"} />;
//     }
//   };
//   const DashboardRoute = ({ ...props }) => {
//     if (Cookies.get("token") !== undefined) {
//       return <Route {...props} />;
//     } else if (Cookies.get("token") === undefined) {
//       return <Navigate to={"/login"} />;
//     }
//   };
//   return (
//     <>
//       <BrowserRouter>
//         <DataJobProvider>
//           {/* <Navbar /> */}
//           <Routes>
//             <Route path="/" exact element={<Home />} />
//             <Route path="/job-vacancy:slug" element={<JobCard />} />
//             <Route path="/search/:valueOfSearch" element={<SearchSection />} />
//             <LoginRoute path="/login" element={<Login />} />
//             <LoginRoute path="/registrasi" element={<Regist />} />
//             <DashboardRoute path="/dashboard" element={<DashboardComponent />}>
//               <Route path="/" element={<JobList />} />
//               <Route path="/profile" element={<CardProfile />} />
//               <Route path="/job-form" element={<JobForm />} />
//               <Route path="/change-password" element={<ChangePassword />} />
//             </DashboardRoute>
//             <Route path="*" element={<NotFound />} />

            
//               {/* <LayoutComponent content={<Home />} />
//             </Route>
//             <Route path="/job-vacancy/:slug" exact>
//               <LayoutComponent content={<JobCard />} />
//             </Route>
//             <Route path="/search/:valueOfSearch" exact>
//               <LayoutComponent content={<SearchSection />} />
//             </Route> */}
//             {/* <LoginRoute path="/login" element={<Login />} />
//             <Route path="/registrasi" element={<Regist />} />
//             <DashboardRoute path="/dashboard" element={<DashboardComponent />}>
//               <Route path="/" element={<JobList />} />
//               <Route path="/profile" element={<CardProfile />} />
//               <Route path="/job-form" element={<JobForm />} />
//               <Route path="/change-password" element={<ChangePassword />} />
//             </DashboardRoute>
//             <Route path="*" element={<NotFound />} /> */}

//             {/* <DashboardRoute path="/dashboard/list-job-vacancy" exact>
//               <DashboardComponent content={<JobList />} />
//             </DashboardRoute>
//             <DashboardRoute path="/dashboard/list-job-vacancy/edit/:slug" exact>
//               <DashboardComponent content={<JobForm />} />
//             </DashboardRoute>
//             <DashboardRoute path="/dashboard/list-job-vacancy/form" exact>
//               <DashboardComponent content={<JobForm />} />
//             </DashboardRoute>

//             <DashboardRoute path="/dashboard/profile" exact>
//               <DashboardComponent content={<CardProfile />} />
//             </DashboardRoute>
//             <DashboardRoute path="/dashboard/profile/change-password" exact>
//               <DashboardComponent content={<ChangePassword />} />
//             </DashboardRoute>
//             <LoginRoute path="/login" exact>
//               <LayoutComponent content={<Login />} />
//             </LoginRoute>
//             <Route path="/register" exact>
//               <LayoutComponent content={<Regist />} />
//             </Route>
//             <Route path="*" element={<NotFound />} /> */}
//           </Routes>
//         </DataJobProvider>
//       </BrowserRouter>
//     </>
//   );
// };

// export default Pages;
