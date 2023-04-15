import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  TableCellsIcon,
} from "@heroicons/react/24/solid";

export const reportsData = [
  {
    color: "blue",
    icon: TableCellsIcon,
    title: "Tareas por hacer",
    footer: {
      label: "Generar lista de Tareas por hacer",
    },
  },
  {
    color: "pink",
    icon: TableCellsIcon,
    title: "Tareas en progreso",
    footer: {
      label: "Generar lista de Tareas en progreso",
    },
  },
  {
    color: "green",
    icon: TableCellsIcon,
    title: "Tareas en revision",
    footer: {
      label: "Generar lista de Tareas en revision",
    },
  },
  {
    color: "orange",
    icon: TableCellsIcon,
    title: "Tareas culminadas",
    footer: {
      label: "Generar lista de Tareas culminadas",
    },
  },
];

export default reportsData;
