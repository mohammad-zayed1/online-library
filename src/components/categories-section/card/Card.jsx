/* eslint-disable react/prop-types */
import './card.css';
export default function Card(props){
    
    return(
       
        <>
        <div className="card-cat">
            <img src={`./img/${props.img}`} alt={props.title} />
            <h2>{props.title} </h2>
            <p>{props.description} </p>
            <a href="#">Read More</a>
        </div>
        </>
    )
}