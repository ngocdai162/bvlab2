import React from "react";
import { Avatar, Divider, Tooltip } from 'antd';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
const CalendarContent = () => {
    const renderEventContent=(eventInfo) => {
        /*eventInfo.event.url trả về một chuỗi nối từ các item trong mảng url ở eventsData, 
        vì vậy , cần dùng hàm split để cắt thành từng url thành phần trở lại mới dùng được */
        let srcImgs = eventInfo.event.url.split(','); 
        console.log(srcImgs);
        return (
          <div>
            <Avatar.Group>
              {srcImgs.map((srcImg)=> (
                <Avatar src = {srcImg} shape = 'square'/>
              ))}     
            </Avatar.Group>
            
          </div>
        )
   }

   const eventsData = 
   [
     {
       title: '',
       start: '2022-08-02',
       backgroundColor:'red',
       url: [
         "../images/avt-4.jpg",
         "../images/avt-2.jpg",
         "../images/avt-3.jpg"
       ],
     },
     {
       title: '',
       start: '2022-08-09',
       backgroundColor:'red',
       url: [
         "../images/avt-4.jpg",
       ],
     }
     ,      {
       title: '',
       start: '2022-08-14',
       backgroundColor:'red',
       url: [
         "../images/avt-2.jpg",
       ],
     }
    ]

    return (
            <div className="container-content container__calendar">
               <h1>September</h1>
               <FullCalendar
                 plugins={[ dayGridPlugin ]}
                 initialView="dayGridMonth"
                 eventContent={renderEventContent}
                 events = {eventsData}
               />
            </div>
    )
}
export default CalendarContent;