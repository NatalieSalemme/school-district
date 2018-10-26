import React, { Component } from 'react';
import Calendar from 'react-calendar';

class DateCalendar extends Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({ date });

  render() {
    console.log('max detail', this.props.maxDetail);
    return (
      <div className="calendar-container">
        <p>Calendar</p>
        <Calendar
          onChange={this.onChange}
          value={this.state.date} />
      </div>
    );
  }
}
export default DateCalendar;
