// import React from "react";
import React, { useState, useEffect } from "react";
import ProjectsTemplate from "@/components/templates/Projects";
import { auth, db } from "../../configs/firebase";
import { collection, getDocs } from "firebase/firestore";

export function Projects() {
  const [projects, setProjects] = useState([]);

  const projectsCollectionRef = collection(db, "projects");

  const getProjects = async () => {
    try {
      const data = await getDocs(projectsCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(filterData);
      console.log("Data", filterData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return <ProjectsTemplate projects={projects} getProjects={getProjects} />;
}

export default Projects;
