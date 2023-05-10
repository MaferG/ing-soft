import { useEffect, useState } from "react";
import { UsersTemplate } from "../../components/templates/Users";
import { auth, db } from "../../configs/firebase";
import { collection, getDocs } from "firebase/firestore";
export function Users() {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, "users");

  const getUsers = async () => {
    try {
      const data = await getDocs(usersCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(filterData);
      console.log("Data", filterData);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <UsersTemplate users={users} getUsers={getUsers} />
    </>
  );
}

export default Users;
