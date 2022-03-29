import React from "react";
import GreenLineImg from '../../assets/page-3/anim_stroke.png';
import './style.scss'

const GreenLine = () => {
    return (
        <div style={{position: 'relative', zIndex: '100'}}>
            <img className={'green-line'} src={GreenLineImg} alt={'green-line'}/>
        </div>
    )
}

export default GreenLine;