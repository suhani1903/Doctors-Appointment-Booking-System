import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointment</p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row justify-between gap-6 py-6 border-b items-center"
          >
            <div className="flex gap-4 items-start">
              <img className="w-32 h-32 object-cover rounded-md bg-indigo-50" src={item.image} alt={item.name} />
              <div>
                <p className="text-sm text-zinc-600">{item.name}</p>
                <p className="text-lg font-semibold text-neutral-800">{item.speciality}</p>
                <p className="text-zinc-700 font-medium mt-2">Address:</p>
                <p className="text-xs">{item.address.line1}</p>
                <p className="text-xs">{item.address.line2}</p>
                <p className="text-sm mt-2">
                  <span className="text-neutral-700 font-medium">Date & Time:</span> 17, June, 2025 | 2:30 PM
                </p>
              </div>
              <div></div>
            </div>

            <div className="flex flex-col gap-4 items-center sm:items-center w-full sm:w-auto">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
