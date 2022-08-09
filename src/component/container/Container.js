// import React from "react";
// import ButtonCustom from "../common/ButtonCustom";
// import AvatarIcon from "./AvatarIcon/AvatarIcon";
// import { PlusOutlined} from '@ant-design/icons';
// import { Badge, Calendar } from 'antd';
// import "./container.scss";
// import moment from 'moment'
// import AvatarCalendar from "./AvatarCalendar/AvatarCalendar";
// import { Avatar, Divider, Tooltip } from 'antd';

// const Container = () => {

//   const getListData = (value) => {
//     let listData;
//     switch (value.date()) {
//       case 2:
//         listData =[
//           {
//             srcImg : '../images/avt-3.jpg'
//           }
//         ]
//         break
//       ;
      
//       case 5:
//         listData =[
//           {
//             srcImg : '../images/avt-2.jpg'
//           },
//           {
//             srcImg : '../images/avt-3.jpg'
//           },
//           {
//             srcImg : '../images/avt.jpg'
//           }
//         ]
//         break
//       ; 

//       case 14 :
//         listData =[
//           {
//             srcImg : '../images/avt.jpg'
//           }
//         ]
//         break;
//         default : 
//       }
    
//     return listData || [];
//   }
  

//   const dateCellRender = (value) => {
//     const listData = getListData(value);
//     console.log(listData);
//     return (
//         (
//          <Avatar.Group>
//              {listData.map (item => (
//               <Avatar src = {item.srcImg}/>
//              ))}
//           </Avatar.Group>
//         )
//     );
//   };

//     const onPanelChange = (value, mode) => {
//         console.log(value.format('YYYY-MM-DD'), mode);
//       };

//     //thay doi thu tu cot cua calendar
//     moment.updateLocale('en', {
//         weekdaysMin : ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat","Sun"]
//       });
//     return (
//         <div className="container">
//             <div className="container__add">
//               <AvatarIcon 
//                 icon={() => (
//                   <i class="fa-brands fa-youtube"></i>
//                 )}
//                 imgSrc='../images/avt.jpg'
//               />
//               <AvatarIcon 
//                 icon={() => (
//                     <i class="fa-brands fa-tiktok"></i>
//                 )}
//                 imgSrc='../images/avt-2.jpg'
//               />
//               <AvatarIcon 
//                 icon={() => (
//                   <i class="fa-brands fa-youtube"></i>
//                 )}
//                 imgSrc='../images/avt-3.jpg'
//               />
//               <AvatarIcon 
//                 icon={() => (
//                     <i class="fa-brands fa-tiktok"></i>
//                 )}
//                 imgSrc='../images/avt-4.jpg'
//               />
//               <button className="container__add__btn">
//                 <PlusOutlined />
//               </button>
//             </div>
//             <div className="container__schedule">
//                 <div className="container__schedule__title">
//                   <p>Post Schedule</p>
//                   <ButtonCustom text='Create a Post'/>
//                 </div>
//               <div className="container__schedule__detail">
//                 <div className="container__schedule__detail__month container__schedule__detail__item ">
//                     <p>Last Month Highlights</p>
//                     <div className="schedule-month">
//                        <div className='schedule-month__img'>
//                         <div className='schedule-month__img__item schedule-month__img--1'>
//                             <img src="../images/avt.jpg" alt=""/>
//                         </div>
//                         <div className='schedule-month__img__item schedule-month__img--2'>
//                             <img src="../images/avt-2.jpg" alt=""/>
//                         </div>
//                         <div className='schedule-month__img__item schedule-month__img--3'>
//                             <img src="../images/avt-3.jpg" alt=""/>
//                         </div>
//                         <div className='schedule-month__img__item schedule-month__img--4'>
//                             <img src="../images/avt-4.jpg" alt=""/>
//                         </div>
//                        </div>
//                        <div className='schedule-month__checkout'>
//                         <span>Check out</span>
//                         <div className="schedule-month__checkout__icon">
//                           <i class="fa-solid fa-chevron-right"></i>
//                         </div>
//                        </div>
//                     </div>
//                 </div>
//                 <div className="container__schedule__detail__day container__schedule__detail__item ">
//                     <span>2</span>
//                     <p>Schedules for today</p>
//                 </div>
//                 <div className="container__schedule__detail__week container__schedule__detail__item ">
//                     <span>3</span>
//                     <p>Posted this week</p>
//                 </div>
//               </div>

//             </div>
//             <div className="container__calendar">
//                <h1>September</h1>
//                <Calendar width ='200' validRange={[moment(), moment().add(20, "years")]}  fullscreen = {true} dateCellRender={dateCellRender} onPanelChange={onPanelChange} />
//             </div>
//         </div>
//     )
// }


//FULLCALENDAR

import React from "react";
import ButtonCustom from "../common/ButtonCustom";
import AvatarIcon from "./AvatarIcon/AvatarIcon";
import { PlusOutlined} from '@ant-design/icons';
import { Badge, Calendar } from 'antd';
import "./container.scss";
import moment from 'moment'
import AvatarCalendar from "./AvatarCalendar/AvatarCalendar";
import { Avatar, Divider, Tooltip } from 'antd';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Item from "antd/lib/list/Item";

const Container = () => {

  
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
        start: '2022-08-10',
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
        <div className="container">
            <div className="container__add">
              <AvatarIcon 
                icon={() => (
                  <i class="fa-brands fa-youtube"></i>
                )}
                imgSrc='../images/avt.jpg'
              />
              <AvatarIcon 
                icon={() => (
                    <i class="fa-brands fa-tiktok"></i>
                )}
                imgSrc='../images/avt-2.jpg'
              />
              <AvatarIcon 
                icon={() => (
                  <i class="fa-brands fa-youtube"></i>
                )}
                imgSrc='../images/avt-3.jpg'
              />
              <AvatarIcon 
                icon={() => (
                    <i class="fa-brands fa-tiktok"></i>
                )}
                imgSrc='../images/avt-4.jpg'
              />
              <button className="container__add__btn">
                <PlusOutlined />
              </button>
            </div>
            <div className="container__schedule">
                <div className="container__schedule__title">
                  <p>Post Schedule</p>
                  <ButtonCustom text='Create a Post'/>
                </div>
              <div className="container__schedule__detail">
                <div className="container__schedule__detail__month container__schedule__detail__item ">
                    <p>Last Month Highlights</p>
                    <div className="schedule-month">
                       <div className='schedule-month__img'>
                        <div className='schedule-month__img__item schedule-month__img--1'>
                            <img src="../images/avt.jpg" alt=""/>
                        </div>
                        <div className='schedule-month__img__item schedule-month__img--2'>
                            <img src="../images/avt-2.jpg" alt=""/>
                        </div>
                        <div className='schedule-month__img__item schedule-month__img--3'>
                            <img src="../images/avt-3.jpg" alt=""/>
                        </div>
                        <div className='schedule-month__img__item schedule-month__img--4'>
                            <img src="../images/avt-4.jpg" alt=""/>
                        </div>
                       </div>
                       <div className='schedule-month__checkout'>
                        <span>Check out</span>
                        <div className="schedule-month__checkout__icon">
                          <i class="fa-solid fa-chevron-right"></i>
                        </div>
                       </div>
                    </div>
                </div>
                <div className="container__schedule__detail__day container__schedule__detail__item ">
                    <span>2</span>
                    <p>Schedules for today</p>
                </div>
                <div className="container__schedule__detail__week container__schedule__detail__item ">
                    <span>3</span>
                    <p>Posted this week</p>
                </div>
              </div>

            </div>
            <div className="container__calendar">
               <h1>September</h1>
               <FullCalendar
                 plugins={[ dayGridPlugin ]}
                 initialView="dayGridMonth"
                 eventContent={renderEventContent}
                 events = {eventsData}
               />
            </div>
        </div>
    )
}
export default Container;
