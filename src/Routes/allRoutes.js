import React from "react";
import { Navigate } from "react-router-dom";

//AuthenticationInner pages
import BasicSignIn from "../pages/AuthenticationInner/Login/BasicSignIn";
import CoverSignIn from "../pages/AuthenticationInner/Login/CoverSignIn";
import BasicSignUp from "../pages/AuthenticationInner/Register/BasicSignUp";
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from "../pages/AuthenticationInner/PasswordReset/BasicPasswReset";
import UserProfile from "../pages/Authentication/user-profile.js";

//pages

import CoverPasswReset from "../pages/AuthenticationInner/PasswordReset/CoverPasswReset";
import BasicLockScreen from "../pages/AuthenticationInner/LockScreen/BasicLockScr";
import CoverLockScreen from "../pages/AuthenticationInner/LockScreen/CoverLockScr";
import BasicLogout from "../pages/AuthenticationInner/Logout/BasicLogout";
import CoverLogout from "../pages/AuthenticationInner/Logout/CoverLogout";
import BasicSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg";
import CoverSuccessMsg from "../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg";
import BasicTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify";
import CoverTwosVerify from "../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify";
import Basic404 from "../pages/AuthenticationInner/Errors/Basic404";
import Cover404 from "../pages/AuthenticationInner/Errors/Cover404";
import Alt404 from "../pages/AuthenticationInner/Errors/Alt404";
import Error500 from "../pages/AuthenticationInner/Errors/Error500";

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";

// User Profile

import BuildingTable from "../pages/BuildingTable/BuildingTable.jsx";
import IncedentTable from "../pages/IncedentTable/IncedentTable.jsx";
import FloorTable from "../pages/FloorTable/FloorTable.jsx";
import ZoneTable from "../pages/ZoneTable/ZoneTable.jsx";
import Feedback from "../pages/Feedback/Feedback.jsx";
import MainUserTask from "../pages/UserTasks/MainUserTask.jsx";
import UserDashboard from "../pages/UserDashboard/UserDashboard.jsx";
import AdminTasks from "../pages/AdminTasks/index.js";
import Admin from "../pages/DataTables/Admin/Admin.jsx";
import Area from "../pages/DataTables/Area/Area.jsx";
import City from "../pages/DataTables/City/City.jsx";
import Country from "../pages/DataTables/Country/Country.jsx";
import Shift from "../pages/DataTables/Shift/Shift.jsx";
import Supervisor from "../pages/DataTables/Supervisor/Supervisor.jsx";
import User from "../pages/DataTables/User/User.jsx";
import SystemBoard from "../pages/SystemBoard/SystemBoard.jsx";
import UserInformation from "../pages/UserInformation/UserInformation.jsx";
import FeedbackReport from "../pages/FeedbackReport/FeedbackReport.jsx";
import DashboardEcommerce from "../pages/Dashboard/index.js";
import RolePage from "../pages/RolePage/RolePage.jsx";
import Group from "../pages/DataTables/Group/Group.jsx";
import TaskList from "../pages/TaskList/TaskList.jsx";
import AttendanceList from "../pages/AttendanceList/AttendanceList.jsx";
import Optimus from "../pages/Optimus/Optimus.jsx";
import TeamManagement from "../pages/TeamManagement/TeamManagement.jsx";
import TimeSheet from "../pages/TimeSheet/TimeSheet.jsx";
import MetricsReport from "../pages/MetricsReport/MetricsReport.jsx";

const authProtectedRoutes = [
  { path: "/buildingTable", component: <BuildingTable /> },
  { path: "/incidentTable", component: <IncedentTable /> },
  { path: "/floorTable", component: <FloorTable /> },
  { path: "/zoneTable", component: <ZoneTable /> },

  { path: "/feedback", component: <Feedback /> },
  { path: "/userTasks", component: <MainUserTask /> },
  { path: "/adminTasks", component: <AdminTasks /> },
  { path: "/userDashboard", component: <UserDashboard /> },
  { path: "/adminDataTable", component: <Admin /> },
  { path: "/areaDataTable", component: <Area /> },
  { path: "/cityDataTable", component: <City /> },
  { path: "/countryDataTable", component: <Country /> },
  { path: "/shiftDataTable", component: <Shift /> },
  { path: "/groubtDataTable", component: <Group /> },
  { path: "/supervisorDataTable", component: <Supervisor /> },
  { path: "/userDataTable", component: <User /> },
  { path: "/systemboard", component: <SystemBoard /> },
  { path: "/userinformation", component: <UserInformation /> },
  { path: "/feedbackReport", component: <FeedbackReport /> },
  { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/role", component: <RolePage /> },
  { path: "/taskList", component: <TaskList /> },
  { path: "/attendanceList", component: <AttendanceList /> },
  { path: "/optimus", component: <Optimus /> },
  { path: "/teamManagement", component: <TeamManagement /> },
  { path: "/timeSheet", component: <TimeSheet /> },
  { path: "/metricsReport", component: <MetricsReport /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },
];

export { authProtectedRoutes, publicRoutes };
