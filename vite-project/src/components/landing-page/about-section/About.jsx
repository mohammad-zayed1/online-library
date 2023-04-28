import "./about.css";
import Title from "../title/Title";
import aboutImg from '../../../../public/img/about.png'

export default function About() {
  return (
    <div id="about">
      <Title title="About Us" />
      <div className="about container">
        <div className="about-text">
          Welcome to our library &#39;s &#34; About Us &#34; section! Our library is a hub of
          knowledge and inspiration, where individuals from all walks of life
          come together to explore, learn, and grow.
        </div>
        <div className="about-img">
            <img src={aboutImg} alt="about Img" />
        </div>
      </div>
    </div>
  );
}
