// import React from "react";
import React, { useState, useEffect } from "react";
import HomeTemplate from "@/components/templates/Home";
import { auth, db } from "../../configs/firebase";
import { doc, getDoc, addDoc } from "firebase/firestore";

export function Home() {
  const currentUser = auth.currentUser?.email;

  const [tasks, setTasks] = useState([]);
  // const [projectNames, setProjectNames] = useState([])
  // const [user, loading, error] = useState(auth);

  /*useEffect(() => {
    const fetchData = async () => {
      const data = await getTasks();
      setTasks(data);
      // data.forEach(element =>{

      // })
      console.log("mydata", data);
    };

    if (loading) {
      // setTasks([])
      return;
    }
    if (user) {
      fetchData();
      // console.log("im in data fetching")
    }

    const intervalId = setInterval(() => {
      fetchData();
    }, 120000);

    return () => {
      clearInterval(intervalId);
    };
  }, [user, loading]);

  if (!user) {
    return <div>Loading...</div>;
  }*/

  return <HomeTemplate />;
}

export default Home;
