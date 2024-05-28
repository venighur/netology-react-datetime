import React from 'react';

function DateTime(props: { date: string }) {
  return (
    <p className="date">{props.date}</p>
  )
}

export default DateTime;
