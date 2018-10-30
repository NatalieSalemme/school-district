import React, { Component } from 'react';
import Calendar from 'react-calendar';

class DateCalendar extends Component {
  state = {
    date: new Date()
  }
  onChange = date => this.setState({ date });
  navigationLabel = () => {
    this.setState({
      date: this.state.date
    });
  }
  render() {
    return (
      <div className="calendar-container">
      <div className="main-sub-header">
        <h3 className="main-sub-header-text">CALENDAR</h3>
      </div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default DateCalendar;
