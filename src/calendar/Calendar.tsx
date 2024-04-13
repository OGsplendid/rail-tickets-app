import React from 'react';

import { Calendar as Customed } from './components';

import './static/css/global.css';

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDay] = React.useState(new Date());

  console.log(selectedDate)

  return (
    <Customed selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)} />
  );
};
