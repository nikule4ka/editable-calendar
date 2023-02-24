import React from "react";
import { momentLocalizer, Calendar, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

// const ColoredDateCellWrapper = ({ children }) =>
//   React.cloneElement(React.Children.only(children), {
//     style: {
//       backgroundColor: "lightblue"
//     }
//   });

// const allViews = Object.keys(Views).map((k) => Views[k]);

const MyCalendar = () => {
  return (
    <div style={{ height: 700 }}>
      <Calendar
        popup
        selectable
        localizer={localizer}
        step={60}
        views={{ month: true, week: true, day: true }}
        defaultDate={new Date()}
        defaultView={Views.MONTH}
        showMultiDayTimes
      />
    </div>
  );
};

export default MyCalendar;
