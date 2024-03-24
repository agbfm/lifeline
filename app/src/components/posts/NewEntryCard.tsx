"use client";

import { useState } from "react";

export const NewEntryCard = () => {
  const [type, setType] = useState("general");
  return (
    <div
      id="new-entry-card"
      className="flex flex-col bg-white rounded-md shadow-md p-4 min-w-96 max-w-2xl"
    >
      <div id="card-header" className="flex flex-row items-center">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium">Add a new entry</h3>
        </div>
      </div>
      <div id="card-content" className="flex flex-col mt-4">
        <select
          className="border border-gray-300 bg-white rounded-md px-4 py-2"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="appointment">Appointment</option>
          <option value="general">General</option>
          <option value="meeting">Meeting</option>
          <option value="payment">Payment</option>
          <option value="property">Property</option>
          <option value="reminder">Reminder</option>
          <option value="vehicle">Vehicle</option>
        </select>
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 mt-4"
          placeholder="Provide some basic details (optional)"
        />
        <div className="flex flex-row justify-end mt-4">
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-md px-4 py-2"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
