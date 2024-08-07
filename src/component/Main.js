import React,{useReducer,useEffect,useState} from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom';
import './Main.css';
import Booking from './Booking';
import { fetchAPI} from '../MockApi';
import About from './About';
import Home from './Home';
import ConfirmBooking from './ConfirmBooking';


// Reducer function
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'INITIALIZE_TIMES':
      return action.payload;
    case 'UPDATE_TIMES':
         return action.payload;
    default:
      return state;
  }
};

// Initial state function
const initializeTimes = async () => {
  const today = new Date().toISOString().split('T')[0];
  const times = await fetchAPI(today);
  return times;
};

const submitAPI = function(formData) {
  return true;
};




export default function Main() {

  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchInitialTimes = async () => {
      const times = await initializeTimes();
      dispatch({ type: 'INITIALIZE_TIMES', payload: times });
    };

    fetchInitialTimes();
  }, [dispatch]);


  useEffect(() => {
    const handleUpdateTimes = async (selectedDate) => {
      try {
        const times = await fetchAPI(selectedDate);
        console.log("Available times updated:", times);
        dispatch({ type: 'UPDATE_TIMES', payload: times });
      } catch (error) {
        console.error("Error updating times:", error);
      }
    };

    if (date) {
      handleUpdateTimes(date);
    }
  }, [date,dispatch]);

  const navigate = useNavigate();

  const submitForm = function(formData){
     if(submitAPI (formData)){
          navigate('./confirmed')
     }
  };




console.log(availableTimes);


  return (
    <main className="main">
      <Routes>
       <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/reservation" element={<Booking availableTimes={availableTimes} dispatch={setDate} data={submitForm}/>}></Route>
        <Route path="/confirmed" element={<ConfirmBooking/>}></Route>

       </Routes>
 </main>
  )
}





// const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

// const bookingByDate = [];

// export const store = () => {
//   if (
//     !window.localStorage.getItem("availableTimes") ||
//     !window.localStorage.getItem("bookingByDate")
//   ) {
//     window.localStorage.setItem(
//       "availableTimes",
//       JSON.stringify(availableTimes)
//     );
//     window.localStorage.setItem("bookingByDate", JSON.stringify(bookingByDate));
//   }
// };

// export const fetchAPI = async (date) => {
//   const booked = JSON.parse(localStorage.getItem("bookingByDate")).filter(
//     (b) => b.date === date
//   );
//   if (booked.length !== 0) {
//     const booking = availableTimes.filter((d) => !booked[0].booked.includes(d));
//     return booking;
//   }

//   return availableTimes;
// };

// export const submitApi = async (formData) => {
//   const date = formData.date;
//   const time = formData.time;
//   const bookingByDate = JSON.parse(localStorage.getItem("bookingByDate"));

//   const isBooked =
//     bookingByDate.filter((d) => d.booked.includes(time) && d.date === date)
//       .length !== 0;

//       const isDateExist =
//     bookingByDate.filter((d) => d.date === date)
//       .length !== 0;

//   if (isBooked) {
//     return false;
//   }

//   if (isDateExist) {
//     const newBooking = bookingByDate.filter((d) => d.date === date);
//     localStorage.setItem(
//         "bookingByDate",
//         JSON.stringify([...bookingByDate.filter((d) => d.date !== date), { ...newBooking[0], booked: [...newBooking[0].booked, time] }])
//       );
//     return true;
//   }

//   localStorage.setItem(
//     "bookingByDate",
//     JSON.stringify([...bookingByDate, { date: date, booked: [time] }])
//   );

//   return true;
// };