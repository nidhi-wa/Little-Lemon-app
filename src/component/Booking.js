import React from 'react'
import BookingForm from './BookingForm'

export default function Booking({availableTimes,dispatch,data}) {
  
  return (
    <section>
       <BookingForm availableTimes={availableTimes} dispatch={dispatch} data={data} />

    </section>
  )
}
