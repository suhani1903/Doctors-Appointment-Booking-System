import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  useEffect(() => {
    if (doctors && Array.isArray(doctors)) {
      if (speciality) {
        setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
      } else {
        setFilterDoc(doctors);
      }
    }
  }, [doctors, speciality]);

  return (
    <div className="px-4 py-6">
      <p className='text-gray-600 mb-4'>Browse through the doctors specialist.</p>

      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border roounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white': ''} `} onClick={() => setShowFilter(prev => !prev)}>Filters</button>

        <div className={`flex flex-col gap-2 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex' }`}>
          {["General physician", "Gynecologist", "Dermatologist", "Pediatricians", "Neurologist", "Gastroenterologist"].map((spec, i) => (
            <p
              key={i}
              onClick={() =>
                speciality === spec
                  ? navigate('/doctors')
                  : navigate(`/doctors/${spec}`)
              }
              className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === spec ? "bg-indigo-100 text-black" : ""}`}
            >
              {spec}
            </p>
          ))}
        </div>
      </div>

      <div className='w-full mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filterDoc.length > 0 ? (
          filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-blue-50'
              key={index}
            >
              <div className='flex items-center justify-center h-72'>
                <img className='h-full object-contain' src={item.image} alt={item.name} />
              </div>
              <div className='p-4 bg-white'>
                <div className='flex items-center gap-2 text-sm text-green-500'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <span>Available</span>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">No doctors found for selected speciality.</p>
        )}
      </div>
    </div>
  );
}

export default Doctors;
