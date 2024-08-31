// "use client"

// import axios from "axios";
// import { useEffect, useState } from "react";


// const useScheduleApi = () => {
//   const [schedules, setSchedules] = useState<Schedule[]>([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/schedule/")
//       .then((res) => {
//         setSchedules(res.data);
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });
//   }, []);

//   return schedules;
// };

// export default useScheduleApi;