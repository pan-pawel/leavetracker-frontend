import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "shared/styles/dateRangePicker.css";

export default class DateRangePicker extends React.Component {
  state = {
    from: undefined,
    to: undefined
  };
  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range, () => {
      this.props.handleDateRangeChange(range.from, range.to);
    });
  };

  render() {
    const { numberOfMonths } = this.props;
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <DayPicker
        className="Selectable"
        numberOfMonths={numberOfMonths}
        selectedDays={[from, { from, to }]}
        modifiers={modifiers}
        onDayClick={this.handleDayClick}
      />
    );
  }
}

//
// <style>{`
//   .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
//     background-color: #f0f8ff !important;
//     color: #4a90e2;
//   }
//   .Selectable .DayPicker-Day {
//     border-radius: 0 !important;
//   }
//   .Selectable .DayPicker-Day--start {
//     border-top-left-radius: 50% !important;
//     border-bottom-left-radius: 50% !important;
//   }
//   .Selectable .DayPicker-Day--end {
//     border-top-right-radius: 50% !important;
//     border-bottom-right-radius: 50% !important;
//   }
// `}</style>
