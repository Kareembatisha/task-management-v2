// Import Images
import product1 from "../../assets/images/products/img-1.png";
import product2 from "../../assets/images/products/img-2.png";
import product3 from "../../assets/images/products/img-3.png";
import product4 from "../../assets/images/products/img-4.png";
import product5 from "../../assets/images/products/img-5.png";

import company1 from "../../assets/images/companies/img-1.png";
import company2 from "../../assets/images/companies/img-2.png";
import company3 from "../../assets/images/companies/img-3.png";
import company5 from "../../assets/images/companies/img-5.png";
import company8 from "../../assets/images/companies/img-8.png";

import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";

const ecomWidgets = [
  {
    id: 1,
    cardColor: "primary",
    label: "Buildings",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "559.25",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "secondary",
    label: "Total Incidents",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "36894",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "success",
    label: "Floor",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "1835",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
  {
    id: 4,
    cardColor: "info",
    label: "Zones",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "1689",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
];
const newWidgets = [
  {
    id: 1,
    cardColor: "primary",
    label: "Total Footfall (Today)",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "474",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "secondary",
    label: "Total Footfall (Month)",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "28675",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "success",
    label: "Average Daily Footfall",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "1024",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
];
const feedback = [
  {
    id: 3,
    cardColor: "success",
    label: "Total Feedbacks (Month)",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "1656",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
];
const userTasks = [
  {
    id: 1,
    cardColor: "primary",
    label: "High Priority",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "559.25",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "secondary",
    label: "Medium Priority",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "36894",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "success",
    label: "Low Priority",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "1835",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
  {
    id: 4,
    cardColor: "info",
    label: "Normal",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "1689",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
];
const teamManagement = [
  {
    id: 1,
    cardColor: "success",
    label: "Active",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "20",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "danger",
    label: "Remaining",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "1",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "info",
    label: "Pending",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "0",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
  {
    id: 4,
    cardColor: "warning",
    label: "Total",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "21",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
];
const userDashboard = [
  {
    id: 1,
    cardColor: "primary",
    label: "Active Team Size",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "21",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "secondary",
    label: "Total Shift",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "36894",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "success",
    label: "Completed Shifted",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "1835",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
  {
    id: 4,
    cardColor: "info",
    label: "Total Logged Hrs",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "1689",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
];
const metricsReport = [
  {
    id: 1,
    cardColor: "primary",
    label: "Total Footfall",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "19354",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "secondary",
    label: "Peak HRS",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "12",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "success",
    label: "Peak Day of week",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "1835",
    day:"Thu",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },

];
const userInformation = [
  {
    id: 1,
    cardColor: "secondary",
    label: "Open Tasks",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+16.24",
    counter: "0",
    link: "View Building list",
    to: "/buildingTable",
    bgcolor: "light",
    icon: "bx bx-dollar-circle",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 2,
    cardColor: "info",
    label: "Tasks",
    badge: "ri-arrow-right-down-line",
    badgeClass: "white",
    // percentage: "-3.57",
    counter: "36",
    link: "View Incidents list",
    to: "/incidentTable",
    bgcolor: "info",
    icon: "bx bx-shopping-bag",
    decimals: 0,
    prefix: "",
    // separator: ",",
    // suffix: ""
  },
  {
    id: 3,
    cardColor: "info",
    label: "Pendding",
    badge: "ri-arrow-right-up-line",
    badgeClass: "white",
    // percentage: "+29.08",
    counter: "18",
    link: "View Floor list",
    to: "/floorTable",
    bgcolor: "warning",
    icon: "bx bx-user-circle",
    decimals: 0,
    prefix: "",
    // suffix: "M"
  },
  {
    id: 5,
    cardColor: "warning",
    label: "In Progress",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "16",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 6,
    cardColor: "success",
    label: "Completed",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "19",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
  {
    id: 4,
    cardColor: "danger",
    label: "Not Resolved",
    badgeClass: "white",
    // percentage: "+0.00",
    counter: "20",
    link: "View Zones list",
    to: "/zoneTable",
    bgcolor: "primary",
    icon: "bx bx-wallet",
    decimals: 0,
    prefix: "",
    // suffix: "k"
  },
];

const bestSellingProducts = [
  {
    id: 1,
    img: product1,
    label: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: 29.0,
    orders: 62,
    stock: 510,
    amount: 1798,
  },
  {
    id: 2,
    img: product2,
    label: "Bentwood Chair",
    date: "19 Mar 2021",
    price: 85.2,
    orders: 35,
    amount: 2982,
  },
  {
    id: 3,
    img: product3,
    label: "Borosil Paper Cup",
    date: "01 Mar 2021",
    price: 14.0,
    orders: 80,
    stock: 749,
    amount: 1120,
  },
  {
    id: 4,
    img: product4,
    label: "One Seater Sofa",
    date: "11 Feb 2021",
    price: 127.5,
    orders: 56,
    amount: 7140,
  },
  {
    id: 5,
    img: product5,
    label: "Stillbird Helmet",
    date: "17 Jan 2021",
    price: 54,
    orders: 74,
    stock: 805,
    amount: 3996,
  },
];

const topSellers = [
  {
    id: 1,
    img: company1,
    label: "iTest Factory",
    name: "Oliver Tyler",
    product: "Bags and Wallets",
    stock: 8547,
    amount: 541200,
    percentage: 32,
  },
  {
    id: 2,
    img: company2,
    label: "Digitech Galaxy",
    name: "John Roberts",
    product: "Watches",
    stock: 895,
    amount: 75030,
    percentage: 79,
  },
  {
    id: 3,
    img: company3,
    label: "Nesta Technologies",
    name: "Harley Fuller",
    product: "Bike Accessories",
    stock: 3470,
    amount: 45600,
    percentage: 90,
  },
  {
    id: 4,
    img: company8,
    label: "Zoetic Fashion",
    name: "James Bowen",
    product: "Clothes",
    stock: 5488,
    amount: 29456,
    percentage: 40,
  },
  {
    id: 5,
    img: company5,
    label: "Meta4Systems",
    name: "Zoe Dennis",
    product: "Furniture",
    stock: 4100,
    amount: 11260,
    percentage: 57,
  },
];

const recentOrders = [
  {
    id: 1,
    orderId: "#VZ2112",
    name: "Alex Smith",
    product: "mohammed",

    vendor: "22-5-2024",
    status: "High",
    statusClass: "success",
    rating: 5,
    
    Status: "--",
    time: "6:00 PM",
  },
  {
    id: 2,
    orderId: "#VZ2111",
    name: "Jansh Brown",
    product: "mohammed",

    vendor: "22-5-2024",
    status: "medium",
    statusClass: "warning",
    rating: 4,

    Status: "--",
    time: "6:00 PM",
  },
  {
    id: 3,
    orderId: "#VZ2109",
    name: "Ayaan Bowen",
    product: "mohammed",

    vendor: "22-5-2024",
    status: "High",
    statusClass: "success",
    rating: 6,

    Status: "--",
    time: "6:00 PM",
  },
  {
    id: 4,
    orderId: "#VZ2108",
    name: "Prezy Mark",
    product: "mohammed",

    vendor: "22-5-2024",
    status: "Normal",
    statusClass: "danger",
    rating: 4,

    Status: "--",
    time: "6:00 PM",
  },
  {
    id: 5,
    orderId: "#VZ2107",
    name: "Vihan Hudda",
    product: "mohammed",

    vendor: "22-5-2024",
    status: "High",
    statusClass: "success",
    rating: 4,

    Status: "--",
    time: "6:00 PM",
  },
];
const topLocations = [
  {
    name: "Male Public Washroom",
    TotalCount: "387",
  },
  {
    name: "Female Public Washroom",
    TotalCount: "87",
  },
];

const topCategories = [
  {
    id: 1,
    category: "Mobile & Accessories",
    total: "10,294",
  },
  {
    id: 2,
    category: "Desktop",
    total: "6,256",
  },
  {
    id: 3,
    category: "Electronics",
    total: "3,479",
  },
  {
    id: 4,
    category: "Home & Furniture",
    total: "2,275",
  },
  {
    id: 5,
    category: "Grocery",
    total: "1,950",
  },
  {
    id: 6,
    category: "Fashion",
    total: "1,582",
  },
  {
    id: 7,
    category: "Appliances",
    total: "1,037",
  },
  {
    id: 8,
    category: "Beauty, Toys & More",
    total: "924",
  },
  {
    id: 9,
    category: "Food & Drinks",
    total: "701",
  },
  {
    id: 10,
    category: "Toys & Games",
    total: "239",
  },
];

// Revenue Chart Data
const allAttendanceRevenueData = [
  {
    name: "present",
    type: "area",
    data: [34, 65, 46, 68, 49, 61],
  },
  {
    name: "present awaiting clock",
    type: "bar",
    data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03],
  },
  // {
  //   name: "Zone 3",
  //   type: "line",
  //   data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
  // },
];
const allRevenueData = [
  {
    name: "present",
    type: "area",
    data: [34, 65, 46, 68, 49, 61],
  },
  {
    name: "present awaiting clock",
    type: "bar",
    data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03],
  },
  // {
  //   name: "Zone 3",
  //   type: "line",
  //   data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35],
  // },
];

const monthRevenueData = [
  {
    name: "present",
    type: "area",
    data: [54, 85, 66, 18, 29, 31, 12, 14, 38, 72, 33, 27],
  },
  {
    name: "present awaiting clock",
    type: "bar",
    data: [
      89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
      88.51, 36.57,
    ],
  },
  // {
  //   name: "Zone 3",
  //   type: "line",
  //   data: [18, 22, 27, 37, 41, 21, 15, 19, 27, 19, 22, 45],
  // },
];

const halfYearRevenueData = [
  {
    name: "present",
    type: "area",
    data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67],
  },
  {
    name: "present awaiting clock",
    type: "bar",
    data: [
      89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36,
      88.51, 36.57,
    ],
  },
  // {
  //   name: "Zone 3",
  //   type: "line",
  //   data: [8, 22, 87, 47, 41, 31, 5, 9, 47, 49, 32, 55],
  // },
];

const yearRevenueData = [
  {
    name: "present",
    type: "area",
    data: [14, 35, 26, 38, 29, 31, 22, 24, 58, 32, 33, 77],
  },
  {
    name: "present awaiting clock",
    type: "bar",
    data: [
      99.25, 88.58, 78.74, 118.87, 87.54, 94.03, 61.24, 58.57, 102.57, 62.36,
      48.51, 66.57,
    ],
  },
  // {
  //   name: "Zone 3",
  //   type: "line",
  //   data: [58, 42, 47, 57, 71, 21, 15, 69, 17, 39, 52, 55],
  // },
];

export {
  ecomWidgets,
  userDashboard,
  bestSellingProducts,
  topSellers,
  recentOrders,
  topCategories,
  allRevenueData,
  monthRevenueData,
  halfYearRevenueData,
  yearRevenueData,
  userTasks,
  userInformation,
  newWidgets,
  topLocations,
  feedback,
  teamManagement,
  allAttendanceRevenueData,
  metricsReport
};
