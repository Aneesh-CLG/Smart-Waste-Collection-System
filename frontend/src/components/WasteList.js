import React, { useEffect, useState } from "react";
import axios from "axios";

const WasteList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/waste")
      .then(res => setRecords(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h4>All Waste Records</h4>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Zone</th>
            <th>Date</th>
            <th>Vehicle ID</th>
            <th>Quantity (kg)</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec, idx) => (
            <tr key={idx}>
              <td>{rec.zone}</td>
              <td>{new Date(rec.collectionDate).toLocaleDateString()}</td>
              <td>{rec.vehicleId}</td>
              <td>{rec.wasteQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WasteList;