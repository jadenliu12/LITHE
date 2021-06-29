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

function getPercentage(index) {
    var percentage = 0;
    if(index === 0) {
        percentage = getRandomInt(0, 20);
        return "Today's achievement is " + percentage + "%.";
    }
    else if(index === 1) {
        percentage = getRandomInt(21, 40);
        return "Today's achievement is " + percentage + "%.";
    }
    else if(index === 2) {
        percentage = getRandomInt(41, 60);
        return "Today's achievement is " + percentage + "%.";
    }
    else if(index === 3) {
        percentage = getRandomInt(61, 80);
        return "Today's achievement is " + percentage + "%.";
    }
    else if(index === 4) {
        percentage = getRandomInt(81, 100);
        return "Today's achievement is " + percentage + "%.";
    }
}

const randomValues = getRange(200).map(index => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(0, 4),
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
        onClick={value => alert(`${value.date}\n${getPercentage(value.count)}`)}
    />
  </>
);

export default CalendarHeatMap;