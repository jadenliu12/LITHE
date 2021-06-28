import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';

import './calendarHeatmap.css';
import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();

function shiftDate(date, numDays) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + numDays);
    return newDate;
}

function getRange(count) {
    return Array.from({ length:count }, (_, i) => i);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

const CalendarHeatMap = () => (
  <>
    <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={randomValues}
        classForValue={value =>{
            if(!value) {
                return 'color-empty';
            }
            return `color-${value.count}`;
        }}           
        tooltipDataAttrs={value => {
            return {
                'data-tip': `${value.date.toISOString().slice(0,10)} has count: ${
                    value.count
                }`,
            };
        }}
        showWeekdayLabels={true}
        // weekdayLabels={['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']}
        onClick={value => alert(`${value.date}`)}
    />
  </>
);

export default CalendarHeatMap;