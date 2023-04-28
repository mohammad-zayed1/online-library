import "./hero.css";
import heroImg from '../../../../public/img/Browser.png'
export default function Hero() {
   
  return (

    <>
      <div id="home" className="hero">
       <div className="container hero-items">
       <div className="hero-text">
          <h1>There is no friend as loyal as a Book!</h1>
          <p>&#34; I have always imagined that paradise will be a kind of library.&#34;  - Jorge Luis Borges</p>
          <div className="btn-join-us" >Join Us</div>
        </div>
        <div className="hero-img ">
        <img src={heroImg} />

        </div>
       </div>
      </div>
    </>
  );
}
