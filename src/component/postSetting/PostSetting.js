import React from "react";
import './postSetting.scss';
import { Input } from 'antd';
import Tab from "./Tab/Tab";
import DatePosting from './DatePosting/DatePosting';
const { TextArea } = Input
const PostSetting = () => {
    return (
        <div className="post-setting">
            <h1>Post Setting</h1>
            <div className='post-setting__img'>
                <div className="post-setting__title">
                  <p>Image</p>
                  <i class="fa-solid fa-trash-can"></i>
                </div>
                <div className="post-setting__img__block">
                  <img src="../images/avt-3.jpg"  alt=""/>
                </div>
            </div>
            <div className='post-setting__description'>
                <div className="post-setting__title">
                  <p>Description</p>
                  <i class="fa-solid fa-marker"></i>
                </div>
                <div className="post-setting__description__detail">
                  <TextArea rows={5} defaultValue="We strongly discourage loading the entire files this will add bloat to your application and make it more difficult to receive bugfixes and updates. Antd is intended to be used in conjunction with a build tool, such as webpack, which will make it easy to import only the parts of antd that you are using.Note: you should import react/react-dom/moment before using antd.js." />
                </div>
            </div>
            <div className='post-setting__date'>
                <div className="post-setting__title">
                  <p>Date of Posting</p>
                  <i class="fa-solid fa-square-plus"></i>
                </div>
                <div className="post-setting__date__detail">
                   <DatePosting/>
                   <DatePosting/>
                </div>
            </div>
            <div className='post-setting__tags'>
                <div className="post-setting__title">
                  <p>Tags</p>
                </div>
                <div className="post-setting__tags__detail">
                  <Tab text='Party'/>
                  <Tab text='Dancing'/>
                  <Tab text='Girl'/>
                  <Tab text='Boy'/>
                  <Tab text='Jumb'/>
                  <Tab text='Relax'/>
                  <Tab text='Favorite'/>

                </div>
            </div>
        </div>

    )
}
   
export default PostSetting;