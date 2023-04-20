import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Project, Projects } from "@/pages/dashboard";
import { SignIn, SignUp, LogOut } from "@/pages/auth";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "inicio",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "reportes",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "agenda",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "proyectos",
        path: "/project",
        element: <Project />,
      },
    ],
  },
  {
    title: "Proyectos",
    layout: "dashboard",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "projects",
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
  {
    title: "TODO",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "TODO",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    title: "Log Out",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/log-out",
        element: <LogOut />,
      },
    ],
  },
];

export default routes;
