// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    getDoc,
    doc,
} from "firebase/firestore";
import { json } from "react-router-dom";
import { element } from "prop-types";



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-hOJroSlqyP_BE7pmk-hJxDuX92S5JEc",
    authDomain: "demo1-2eb35.firebaseapp.com",
    databaseURL: "https://demo1-2eb35-default-rtdb.firebaseio.com",
    projectId: "demo1-2eb35",
    storageBucket: "demo1-2eb35.appspot.com",
    messagingSenderId: "872586334690",
    appId: "1:872586334690:web:39fc0009fc7fc58d21e9bb",
    measurementId: "G-J81Q24NK3J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

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
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
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
        const user = auth.currentUser.uid

        const userRef = doc(db, 'users', user)
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            console.log("User data:", docSnap.data());
        } else {
            console.log("No such user!");
        }
        const tasksQuery = query(collection(db, "tasks"), where("assignedId", "==", userRef));
        const tasksDocs = await getDocs(tasksQuery)
        const tasks = []
        tasksDocs.forEach((document) => {
            const dat = document.data()
            tasks.push(dat)
        })

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
                return { ...element, authorId: authorObj, assignedId: assignedObj, projectId: projectObj };
            })
        );
        console.log(taskStrings)
        return taskStrings
    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

const getProjects = async () => {
    try {
        const user = auth.currentUser.uid
        const userRef = doc(db, 'users', user)
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            console.log("User data:", docSnap.data());
        } else {
            console.log("No such user!");
        }

        const projectsQuery = query(collection(db, "projects"), where("members", "array-contains", userRef));
        // console.log("projects query:", projectsQuery);
        const projectsDocs = await getDocs(projectsQuery)
        // console.log("projects docs:", projectsDocs);
        const projects = []
        projectsDocs.forEach((document) => {
            const dat = document.data()
            projects.push(dat)
        })

        // console.log("projects:", projects);

        const projectsStrings = await Promise.all(
            projects.map(async (element) => {
                const authorId = doc(db, "users", element.authorId.id)
                const authorDoc = await getDoc(authorId)
                const authorObj = {
                    name: authorDoc.get("name"),
                    email: authorDoc.get("email"),
                };
                return { ...element, authorId: authorObj }

            })
        )
        return projectsStrings;

    } catch (error) {
        console.error(error)
        alert(error.message)
    }
}

const addProject = async (project) => {
    try {
        const user = auth.currentUser.id
        const userRef = doc(db, 'users', user)
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
            console.log("User data:", docSnap.data());
        } else {
            console.log("No such user!");
        }
        console.log("doc2: ")
        const document = {...project, authorId:userRef, members:[userRef]}
        console.log("doc3: ", document)
        // const docRef = await addDoc(collection(db, "projects"), document);
        console.log("Project added with ID: ", docRef.id);
    } catch (error) {
        console.error("Error adding project: ", error);
    }
}


export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    getTasks,
    getProjects,
    addProject,
};