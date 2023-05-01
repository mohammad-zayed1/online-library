/* eslint-disable react/prop-types */
import "./author.css";
export default function Author(props) {
  return (
    <>
      <div className="author">
        <div className="author-info">
          <img src={`./img/${props.img}`} alt={props.name} />
          <div className="text">
            <h2 className="name">{props.name} </h2>
            <p className="position">
              {props.position}
            </p>
          </div>
        </div>
        <div className="author-text">
          {props.description}
          
        </div>
        <a href="#" className="more-btn">
          Read More
        </a>
      </div>
    </>
  );
}
