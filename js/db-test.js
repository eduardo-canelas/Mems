async function getHabit() {
  const docRef = doc(db, "habits", "habit1");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Habit data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
}

// Call the function to read a habit
getHabit();
