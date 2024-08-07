import React,{useState,useEffect} from 'react'
import './BookingForm.css';

export default function BookingForm({availableTimes, dispatch ,data}) {
  const[date, setDate] = useState("");
  const[time, setTime] = useState("");
  const[guest, setGuest] = useState(1);
  const[ocassion, setOcassion] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  console.log("time", availableTimes);

 // Effect to handle updating times when the date changes
 useEffect(() => {
  if (date) {
    dispatch(date);
  }
}, [date, dispatch]);


  const getIsFormValid = () => { 
    return ( 
      date && time && guest && ocassion && availableTimes
    );
  };

  const clearForm = () => { 
    setDate(""); 
    setTime(""); 
    setGuest(1); 
    setOcassion(""); 
  }; 

  const handleSubmit = (e) => { 
    e.preventDefault(); 
    // Store the current form data in `submittedData` before clearing the form
    setSubmittedData({
      date,
      time,
      guest,
      ocassion
    });
    data(e);
    console.log('hii there',e);
     alert("Form Submited!");
    clearForm(); 
  }; 

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Dispatch an action to update available times based on the selected date
    // dispatch({ type: 'UPDATE_TIMES', payload: selectedDate });
   
    //  // Ensure updateTimes is defined
    //  if (updateTimes) {
    //   updateTimes(selectedDate);
    // } else {
    //   console.error("updateTimes function is not defined");
    // }
  };


  return (
    <section className="booking-form">
    <h1>Book Now!</h1>
          <form  onSubmit={handleSubmit}>
              <label htmlFor="res-date">Choose date</label>
              <input type="date" id="res-date" value={date} onChange={handleDateChange} required/>
              <label htmlFor="res-time">Choose time</label>
              <select id="res-time" value={time} onChange={(e) => {  setTime(e.target.value);}} required>
                  <option value="">Select time</option>
                { Array.isArray(availableTimes) && availableTimes.map((time, index) => (
                 <option key={index} value={time}>
                   {time}
                </option>
                ))}
              </select>
              <label htmlFor="guests">Number of guests</label>
              <input type="number" placeholder="1" min="1" max="10" id="guests" value={guest} onChange={(e) => {  setGuest(e.target.value);}} required/>
              <label htmlFor="occasion">Occasion</label>
              <select id="occasion"  value={ocassion} onChange={(e) => {  setOcassion(e.target.value);}} required>
                 <option  value="">Choose Ocassion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
              </select>
              <input type="submit" value="Make Your reservation" disabled={!getIsFormValid()}/>
          </form>

       
          {submittedData && (
        <div>
          <h1>Submitted Data:</h1>
          <h2>Date: {submittedData.date}</h2>
          <h2>Time: {submittedData.time}</h2>
          <h2>Guests: {submittedData.guest}</h2>
          <h2>Occasion: {submittedData.ocassion}</h2>
        </div>
      )}
        </section>
  );
}
