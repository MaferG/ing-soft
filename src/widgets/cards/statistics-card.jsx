import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import ModalDeleteProject from "@/components/UI/organisms/ModalDeleteProject";
import ModalEditProject from "@/components/UI/organisms/ModalEditProject";

export function StatisticsCard({ title, value, description, id, getProjects }) {
  const colors = ["blue", "orange", "pink", "green"];
  const navigate = useNavigate();

  return (
    <Card color={colors[Math.floor(Math.random() * colors.length)]}>
      <CardHeader
        variant="gradient"
        color={"transparent"}
        className="text-white-400 absolute -mt-0 grid place-items-center p-4"
      >
        <Typography className="text-white-400 font-normal">
          <strong>{title}</strong>
        </Typography>
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="text-white-600 font-normal">
          <ModalEditProject id={id} getProjects={getProjects} />
          <ModalDeleteProject id={id} getProjects={getProjects} />
        </Typography>
        <Typography variant="h4" color="white">
          {value}
        </Typography>
      </CardBody>
      <button onClick={() => navigate(`/dashboard/project`)}>
        <CardFooter className="border-white-50 border-t p-4">
          <div>
            <Typography className="text-white-400 font-normal">
              {description}
            </Typography>
          </div>
        </CardFooter>
      </button>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "white",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
