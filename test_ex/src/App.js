import React from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";

import { Cat } from "./Cat";
import { Dog } from "./Dog";

const getSleepList = () => {
  return axios.get("http://localhost:5001/sleep_times");
};

function App() {
  const sleep_query = useQuery("sleep_list", getSleepList, {
    onSuccess: (data) => {
      console.log("성공했어!", data);
    },
  });
  return (
    <div className="App">
      {sleep_query.data.data.map((d) => {
        return (
          <div>
            <p>{d.day}</p>
            <p>{d.sleep_time}</p>
          </div>
        );
      })}
      <Routes>
        <Route path="/cat" element={<Cat />} />
        <Route path="/" element={<Dog />} />
      </Routes>
    </div>
  );
}

export default App;
