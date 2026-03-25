const { initializeApp } = require("firebase/app");
const { getFirestore, collection, addDoc } = require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCha_pfcRqCVOAPcsqyNolVd72S7asBSh0",
    authDomain: "grace-skating-240af.firebaseapp.com",
    projectId: "grace-skating-240af",
    storageBucket: "grace-skating-240af.firebasestorage.app",
    messagingSenderId: "850252446428",
    appId: "1:850252446428:web:2c3b1c8fe9bf9a91f69219",
    measurementId: "G-5FGE3HLHMW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testInsert() {
    try {
        const docRef = await addDoc(collection(db, "registrations"), {
            name: "Test User Antigravity",
            age: "10 Years",
            gender: "Male",
            skateType: "Quad",
            rink: "Rink I",
            paymentScreenshot: "https://via.placeholder.com/150",
            timestamp: new Date().toLocaleString()
        });
        console.log("Document written with ID: ", docRef.id);
        process.exit(0);
    } catch (e) {
        console.error("Error adding document: ", e);
        process.exit(1);
    }
}

testInsert();
