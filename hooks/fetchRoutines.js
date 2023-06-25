import { useState, useEffect, useRef } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../utils/firebase';
import { useAuth } from '../context/AuthContext';

export default function useFetchRoutines() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [routines, setRoutines] = useState(null);

  const { currentUser } = useAuth();

  const getData = (isDeleted)  => {
    useEffect(() => {
      async function fetchData() {
        try {
          const docRef = doc(db, 'users', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
          setRoutines(docSnap.data().routines)
          }
        } catch (err) {
          setError('Could not load data, please try again');
        } finally {
          setLoading(false);
        }
      }
      fetchData()
    }, [isDeleted]);
  }


  return { loading, error, routines, getData };
}