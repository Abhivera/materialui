import React, { useEffect, useState } from "react";
import axios from "axios";

const Test = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   // Fetch data when the component mountsF
  //   axios
  //     .get("http://10.0.20.131:8000/department")
  //     .then((response) => {
  //       // Update the state with the fetched data
  //       console.log(response.data);

  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);

  return (
    <div>
      <h1>Data Display</h1>
      {/* {data.map((item: any) => (
        <h1 key={item.d_id}>{item.dept_name}</h1>
      ))} */}
    </div>
  );
};

export default Test;
