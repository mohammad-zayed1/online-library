/* eslint-disable react/prop-types */
import './title.css'

export default function Title(props){
    return(
        <>
          <h1 className='title'>{props.title}</h1>
        </>
    )
}