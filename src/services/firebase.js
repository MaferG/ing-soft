// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
/*
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { auth, db, firebaseConfig } from "../configs/firebase";

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    //const res = await createUserWithEmailAndPassword(auth, email, password);
    //const user = res.user;
    await setDoc(doc(db, "Usuarios", name), {
      apellido: name,
    });
    console.log("Registered");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

const getTasks = async () => {
  try {
    const user = auth.currentUser.uid;

    const userRef = doc(db, "users", user);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      console.log("User data:", docSnap.data());
    } else {
      console.log("No such user!");
    }
    const tasksQuery = query(
      collection(db, "tasks"),
      where("assignedId", "==", userRef)
    );
    const tasksDocs = await getDocs(tasksQuery);

    const tasks = [];
    tasksDocs.forEach((document) => {
      // console.log(docu.data())
      const dat = document.data();
      tasks.push(dat);
      // console.log("dat", dat )
    });
    // console.log(tasks)
    const taskStrings = await Promise.all(
      tasks.map(async (element) => {
        const authorId = doc(db, "users", element.authorId.id);
        const assignedId = doc(db, "users", element.assignedId.id);
        const projectId = doc(db, "projects", element.projectId.id);

        const authorIdDoc = await getDoc(authorId);
        const assignedIdDoc = await getDoc(assignedId);
        const projectIdDoc = await getDoc(projectId);

        const authorObj = {
          name: authorIdDoc.get("name"),
          email: authorIdDoc.get("email"),
        };
        const assignedObj = {
          name: assignedIdDoc.get("name"),
          email: assignedIdDoc.get("email"),
        };
        const projectObj = {
          projectName: projectIdDoc.get("projectName"),
          email: projectIdDoc.get("description"),
        };

        return {
          ...element,
          authorId: authorObj,
          assignedId: assignedObj,
          projectId: projectObj,
        };
      })
    );

    // tasks.forEach(async (element) => {
    //     const authorId = doc(db, 'users', element.authorId.id)
    //     const assignedId = doc(db, 'users', element.assignedId.id)
    //     const projectId = doc(db, 'projects', element.projectId.id)

    //     // const assignedQuery = query(collection(db, 'users'), where('uid', '==', assignedId))
    //     const authorIdDoc = await getDoc(authorId)
    //     const assignedIdDoc = await getDoc(assignedId)
    //     const projectIdDoc = await getDoc(projectId)

    //     const authorObj = { name: authorIdDoc.get("name"), email: authorIdDoc.get("email") }
    //     const assignedObj = { name: assignedIdDoc.get("name"), email: assignedIdDoc.get("email") }
    //     const projectObj = { projectName: authorIdDoc.get("projectName"), email: projectIdDoc.get("description") }

    //     // console.log("author ", authorIdDoc.data())
    //     // console.log("assigned ", assignedIdDoc.data())
    //     // console.log("project ", projectIdDoc.data())
    //     // console.log("obj", authorObj)

    //     taskStrings.push({ ...element, authorId: authorObj, assignedId: assignedObj, projectId: projectObj })
    //     // taskStrings.push(element)
    // })
    // }
    console.log(taskStrings);
    return taskStrings;
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  getTasks,
};
*/
