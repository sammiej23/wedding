import React from 'react';

export const CountDownClock = props => {
  let timeToBigDay = props.timeToBigDay;

  return (
    <span>{timeToBigDay}</span>
  )

}
