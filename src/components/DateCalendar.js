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
        <div className="calendar-component">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        </div>
      </div>
    );
  }
}
export default DateCalendar;
