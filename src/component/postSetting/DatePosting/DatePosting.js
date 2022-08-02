import React from 'react';
import { TimePicker } from 'antd';
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import './datePosting.scss'
const DatePosting = () => {
    const format = 'HH:mm';
    const dateFormat = 'DD/MM';
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <div className='date-posting'>
          <div className='date-posting__date'>
            <DatePicker onChange={onChange} format = {dateFormat} />
          </div>
          <TimePicker defaultValue={moment('12:08', format)} format={format} />
        </div>
    )
}
export default DatePosting;