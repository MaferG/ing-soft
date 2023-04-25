// import React from "react";
import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, getTasks, getProjects, addProject, deleteProject } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

// import Firebase from '../../../firebase'
import {
    Typography,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Tooltip,
    Progress,
    Button,
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Checkbox,

} from "@material-tailwind/react";
import {
    CheckIcon,
    EllipsisVerticalIcon,
    ArrowUpIcon,
} from "@heroicons/react/24/outline";
import {
    BanknotesIcon,
    UserPlusIcon,
    UserIcon,
    ChartBarIcon,
    TableCellsIcon,
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    BriefcaseIcon,
    ClockIcon
} from "@heroicons/react/24/solid";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
    statisticsCardsData,
    statisticsChartsData,
    projectsTableData,
    ordersOverviewData,
} from "@/data";
import { array, element } from 'prop-types';

// console.log('tasks: ',tasks_data)
// tasks_data.forEach(doc => {tasks.push(doc)})
// const tasks = []
// getTasks().then(array =>{array.forEach(element=> {tasks.push(element)})} )

export function Projects() {
    const [projects, setProjects] = useState([]);
    const [openDialog, setOpenDialog] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    const [newProjectName, setNewProjectName] = useState("");
    const [newProjectDescription, setNewProjectDescription] = useState("");
    const [toBeDeleted, setToBeDeleted] = useState("");

    const fetchData = async () => {
        const data = await getProjects()
        setProjects(data)
        // console.log('mydata', data)
    }
    const handleCreateNewProject = () => {

        const document = {projectName:newProjectName, description:newProjectDescription}
        console.log("doc1: ",document)
        addProject(document);
        // console.log(props)
        fetchData()
        setOpenDialog(!openDialog);
        
    }
    
    const handleOpen = () => setOpenDialog(!openDialog);
    const handleOpenDelete = () => setOpenDialogDelete(!openDialogDelete);

    const handleDelete = () => {
        deleteProject({name:toBeDeleted});
        fetchData()
        setOpenDialogDelete(!openDialogDelete);
    }


    useEffect(() => {

        if (loading) {
            setProjects([])
            return;
        }
        if (user) {
            fetchData()
        }

        const intervalId = setInterval(() => { fetchData() }, 120000)

        return () => {
            clearInterval(intervalId)
        }

    }, [user, loading]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <Tabs value="all">
            <Dialog
                size="xs"
                open={openDialog}
                handler={handleOpen}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="blue"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            New Project
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Name" size="lg" onChange={(event)=>setNewProjectName(event.target.value)}/>
                        <Input label="Description" size="lg" onChange={(event)=>setNewProjectDescription(event.target.value)} />
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button variant="gradient" onClick={handleCreateNewProject} fullWidth>
                            Add
                        </Button>
                        
                    </CardFooter>
                </Card>
            </Dialog>
            <Dialog
                size="xs"
                open={openDialogDelete}
                handler={handleOpenDelete}
                className="bg-transparent shadow-none"
            >
                <Card className="mx-auto w-full max-w-[24rem]">
                    <CardHeader
                        variant="gradient"
                        color="red"
                        className="mb-4 grid h-28 place-items-center"
                    >
                        <Typography variant="h3" color="white">
                            Delete Project
                        </Typography>
                    </CardHeader>
                    <CardBody className="flex flex-col gap-4">
                        <Input label="Name" size="lg" onChange={(event)=>setToBeDeleted(event.target.value)}/>
                    </CardBody>
                    <CardFooter className="pt-0">
                        <Button color='red' variant="gradient" onClick={handleDelete} fullWidth>
                            DELETE
                        </Button>
                        
                    </CardFooter>
                </Card>
            </Dialog>
            <TabsHeader>
                <Tab key="all" value="all">
                    <div className="flex items-center gap-2">
                        {React.createElement(BriefcaseIcon, { className: "w-5 h-5" })}
                        All
                    </div>
                </Tab>
                <Tab key="groups" value="groups">
                    <div className="flex items-center gap-2">
                        {React.createElement(Square3Stack3DIcon, { className: "w-5 h-5" })}
                        Groups
                    </div>
                </Tab>
                <Button color='green' onClick={handleOpen}>New Project</Button>
                <Button color='red' onClick={handleOpenDelete}>Delete</Button>
            </TabsHeader>
            <TabsBody>
                <Card className="w-full  shadow-lg overflow-hidden xl:col-span-2">
                    <CardHeader floated={false} color="blue-gray">

                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        {/* <Typography color="gray">
                            here some
                        </Typography> */}
                        <div className="mb-3 flex items-center justify-between">
                            <TabPanel key="all" value="all">
                                <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
                                    {projects.map(({ projectName, authorId, description, ...rest }) => (
                                        <StatisticsCard
                                            color='blue'
                                            icon={React.createElement(TableCellsIcon)}
                                            title={authorId.name}
                                            value={projectName}
                                            key={projectName}
                                            footer={description}
                                        />
                                    ))}

                                </div>
                            </TabPanel>
                            <TabPanel key="groups" value="groups">
                                panel 2
                            </TabPanel>

                        </div>
                        {/* <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            here some more
                        </div> */}
                    </CardBody>
                    <CardFooter className="pt-3">
                        <div />
                    </CardFooter>
                </Card>
            </TabsBody>
        </Tabs>

    );
}

export default Projects;
