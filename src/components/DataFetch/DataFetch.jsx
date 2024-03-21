import { db } from "../../firebase.config";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";

function DataFetch() {
  const [jobData, setJobs] = useState([]);

  const fetchJobs = async () => {
    const jobs = [];
    const jobSnapshot = await getDocs(
      query(collection(db, "jobs"), orderBy("postedDate", "desc"))
    );
    jobSnapshot.forEach((doc) => {
      jobs.push({
        id: doc.id,
        ...doc.data(),
        postedDate: doc.data().postedDate.toDate(),
      });
    });
    setJobs(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return jobData;
}

export default DataFetch;
