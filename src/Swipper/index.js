import React from 'react';
import {Swiper} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './Swipper.css';

function Swipper(props){
    return(
        <Swiper navigation={true} modules={[Navigation]} className={props.clase}>
            {props.children}
        </Swiper>
    );
}

export {Swipper};