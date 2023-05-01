/* eslint-disable react/prop-types */
import './service.css';


export default function Service(props){
  
 return(
  <>
  <div className="sevice-card">
    <div className="icon">{props.icon}</div>
    <p>{props.text}</p>
  </div>
  </>
 )
}