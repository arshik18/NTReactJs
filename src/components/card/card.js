import React,{Component} from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faCalculator,faIdCard,
        faIdCardAlt,faRupeeSign,faFileAlt,faFile,faBatteryHalf,faBatteryFull,
        faCaretDown,faCaretUp} from "@fortawesome/free-solid-svg-icons";

const card=(props)=>
{
    return(
        <div className="card" style={{'background-color':props.color}}>
            
            <div className="card-body">
                <FontAwesomeIcon className="side-menu-icon-left" icon={faIdCard}  size="2x" />
                <span className="card-label">&nbsp;{props.body}</span>
                </div>
        </div>
    )
}

export default card;
