import { db, doc, setDoc, getDoc } from './firebase-init';
import { collection, addDoc } from 'firebase/firestore'; 
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const dBase = collection(db, 'pics');

const addDocument = async () => {
  try {
    const newDocument = {
      name: 'John Doe',
      age: 30,
      email: 'john@example.com'
    };
    const docRef = await addDoc(dBase, newDocument);
    console.log(`Document added with ID: ${docRef.id}`);
  } catch (error) {
    console.error('Error adding document:', error.message);
  }
};

addDocument();

