import React from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const AddWaste = () => {
  const {register, handleSubmit, reset} = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/waste", data);
      alert("Record added successfully!");
      reset();
    } catch (err) {
      alert(err.response?.data?.message || "Error adding record");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded bg-light">
      <h4>Add Waste Collection Record</h4>

      <input {...register("zone")} placeholder="Zone Name" className="form-control my-2" required />
      <input type="date" {...register("collectionDate")} className="form-control my-2" required />
      <input {...register("vehicleId")} placeholder="Vehicle ID" className="form-control my-2" required />
      <input type="number" {...register("wasteQuantity")} placeholder="Waste Quantity (kg)" className="form-control my-2" required />

      <button className="btn btn-primary mt-2">Submit</button>
    </form>
  );
};

export default AddWaste;