import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import {
  Home,
  Profile,
  Tables,
  Project,
  Users,
  Projects,
} from "@/pages/dashboard";
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
        icon: <UserPlusIcon {...icon} />,
        name: "Usuarios",
        path: "/users",
        element: <Users />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "proyectos",
        path: "/projects",
        element: <Projects />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "proyecto",
        path: "/project",
        element: <Project />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "reportes",
        path: "/profile",
        element: <Profile />,
      },
      {
        icon: <BellIcon {...icon} />,
        name: "agenda",
        path: "/tables",
        element: <Tables />,
      },
    ],
  },
  {
    title: "Registro",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Log Out",
        path: "/log-out",
        element: <LogOut />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Registrarse",
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "Iniciar sesion",
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
];

export default routes;
