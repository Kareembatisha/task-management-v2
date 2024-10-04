import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isHome, setIsHome] = useState(false);
  const [isRoles, setIsRoles] = useState(false);
  const [isAdmins, setisAdmins] = useState(false);
  const [isDepartments, setIsDepartments] = useState(false);
  const [isDesignation, setIsDesignation] = useState(false);
  const [isMembers, setIsMembers] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isTasks, setIsTasks] = useState(false);
  const [isProductivities, setIsProductivities] = useState(false);
  const [isReports, setIsReports] = useState(false);
  const [isIcons, setIsIcons] = useState(false);
  const [isMultiLevel, setIsMultiLevel] = useState(false);

  //Calender
  const [isCalender, setCalender] = useState(false);

  // Apps
  const [isEmail, setEmail] = useState(false);
  const [isSubEmail, setSubEmail] = useState(false);
  const [isEcommerce, setIsEcommerce] = useState(false);
  const [isCRM, setIsCRM] = useState(false);
  const [isCrypto, setIsCrypto] = useState(false);
  const [isInvoices, setIsInvoices] = useState(false);
  const [isSupportTickets, setIsSupportTickets] = useState(false);
  const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
  const [isLanding, setIsLanding] = useState(false);
  const [isJobs, setIsJobs] = useState(false);
  const [isJobList, setIsJobList] = useState(false);
  const [isCandidateList, setIsCandidateList] = useState(false);

  // Departmentsentication
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isPasswordReset, setIsPasswordReset] = useState(false);
  const [isPasswordCreate, setIsPasswordCreate] = useState(false);
  const [isLockScreen, setIsLockScreen] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState(false);

  // Designation
  const [isProfile, setIsProfile] = useState(false);

  // Reports
  const [isApex, setIsApex] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Roles") {
      setIsRoles(false);
    }
    if (iscurrentState !== "Admins") {
      setisAdmins(false);
    }
    if (iscurrentState !== "Departments") {
      setIsDepartments(false);
    }
    if (iscurrentState !== "Designation") {
      setIsDesignation(false);
    }
    if (iscurrentState !== "Landing") {
      setIsLanding(false);
    }
    if (iscurrentState !== "Members") {
      setIsMembers(false);
    }
    if (iscurrentState !== "Projects") {
      setIsProjects(false);
    }
    if (iscurrentState !== "Tasks") {
      setIsTasks(false);
    }
    if (iscurrentState !== "Productivities") {
      setIsProductivities(false);
    }
    if (iscurrentState !== "Reports") {
      setIsReports(false);
    }
    if (iscurrentState !== "Icons") {
      setIsIcons(false);
    }
    if (iscurrentState !== "Home") {
      setIsHome(false);
    }
    if (iscurrentState !== "MuliLevel") {
      setIsMultiLevel(false);
    }
    if (iscurrentState === "Widgets") {
      history("/widgets");
      document.body.classList.add("twocolumn-panel");
    }
  }, [
    history,
    iscurrentState,
    isRoles,
    isAdmins,
    isDepartments,
    isDesignation,
    isMembers,
    isProjects,
    isTasks,
    isProductivities,
    isReports,
    isIcons,
    isHome,
    isMultiLevel,
  ]);

  const menuItems = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "Home",
      label: "Home",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isHome,
      click: function (e) {
        e.preventDefault();
        setIsHome(!isHome);
        setIscurrentState("Home");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "Dashboard",
          label: "Dashboard",
          link: "/dashboard",
          parentId: "Home",
        },
      ],
    },
    {
      id: "Roles",
      label: "Roles",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isRoles,
      click: function (e) {
        e.preventDefault();
        setIsRoles(!isRoles);
        setIscurrentState("Roles");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "role",
          link: "/roles",
          parentId: "Roles",
        },
      ],
    },
    {
      id: "Admins",
      label: "Admins",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isAdmins,
      click: function (e) {
        e.preventDefault();
        setisAdmins(!isAdmins);
        setIscurrentState("Admins");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Admin",
          link: "/admins",
          parentId: "Admins",
        },
      ],
    },
    {
      id: "Departments",
      label: "Departments",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isDepartments,
      click: function (e) {
        e.preventDefault();
        setIsDepartments(!isDepartments);
        setIscurrentState("Departments");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Departments",
          link: "/Departments",
          parentId: "Departments",
        },
      ],
    },
    {
      id: "Designation",
      label: "Designation",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isDesignation,
      click: function (e) {
        e.preventDefault();
        setIsDesignation(!isDesignation);
        setIscurrentState("Designation");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Designation",
          link: "/Designation",
          parentId: "Designation",
        },
      ],
    },
    {
      id: "Members",
      label: "Members",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isMembers,
      click: function (e) {
        e.preventDefault();
        setIsMembers(!isMembers);
        setIscurrentState("Members");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "Members",
          label: "Member",
          link: "/Members",
          parentId: "Members",
        },
      ],
    },
    {
      id: "Projects",
      label: "Projects",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isProjects,
      click: function (e) {
        e.preventDefault();
        setIsProjects(!isProjects);
        setIscurrentState("Projects");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Projects",
          link: "/Projects",
          parentId: "Projects",
        },
      ],
    },
    {
      id: "Tasks",
      label: "Tasks",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isTasks,
      click: function (e) {
        e.preventDefault();
        setIsTasks(!isTasks);
        setIscurrentState("Tasks");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Tasks",
          link: "/Tasks",
          parentId: "Tasks",
        },
      ],
    },
    {
      id: "Productivities",
      label: "Productivities",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isProductivities,
      click: function (e) {
        e.preventDefault();
        setIsProductivities(!isProductivities);
        setIscurrentState("Productivities");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Productivities",
          link: "/Productivities",
          parentId: "Productivities",
        },
      ],
    },
    {
      id: "Reports",
      label: "Reports",
      icon: "ri-dashboard-2-line",
      link: "/#",
      stateVariables: isReports,
      click: function (e) {
        e.preventDefault();
        setIsReports(!isReports);
        setIscurrentState("Reports");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "adminDatatable",
          label: "Admin",
          link: "/adminDataTable",
          parentId: "Reports",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
