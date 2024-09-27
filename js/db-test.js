import { getFirestore, doc, setDoc } from "firebase/firestore";

// Initialize Firestore
const db = getFirestore();

// Add a document to the "habits" collection
async function addHabit() {
  try {
    await setDoc(doc(db, "habits", "habit1"), {
      name: "Exercise",
      progress: 0
    });
    console.log("Habit added to Firestore!");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
}

addHabit();
