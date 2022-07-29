import React from "react";
import ButtonCustom from "../common/ButtonCustom";
import AvatarIcon from "./AvatarIcon/AvatarIcon";
import { PlusOutlined} from '@ant-design/icons';
import "./container.scss";
const Container = () => {

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
                imgSrc='../images/avt.jpg'
              />
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
                imgSrc='../images/avt.jpg'
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
                <div className="container__schedule__detail__item container__schedule__detail__month">
                    <p>Last Month Highlights</p>
                    <div className="schedule-month">
                       <div className='schedule-month__img'>
                        <div className='schedule-month__img__item schedule-month__img--1'>
                            <img src="../images/avt.jpg" alt=""/>
                        </div>
                        <div className='schedule-month__img__item schedule-month__img--2'>
                            <img src="../images/avt.jpg" alt=""/>
                        </div>
                        <div className='schedule-month__img__item schedule-month__img--3'>
                            <img src="../images/avt.jpg" alt=""/>
                        </div>
                        <div className='schedule-month__img__item schedule-month__img--4'>
                            <img src="../images/avt.jpg" alt=""/>
                        </div>
                       </div>
                       <div className='schedule-month__checkout'>
                        <span>Check out</span>
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                       </div>
                    </div>
                </div>
                <div className="container__schedule__detail__item container__schedule__detail__day"></div>
                <div className="container__schedule__detail__item container__schedule__detail__week"></div>
              </div>

            </div>
            <div className="container__calendar">

            </div>
        </div>
    )
}
export default Container;
