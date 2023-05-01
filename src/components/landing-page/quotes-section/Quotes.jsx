import "./quotes.css";
import Title from "../title/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Quotes() {
  return (
    <div id="quotes">
      <Title title="Quotes" />
      <div className="quotes container">
        <div className="quotes-box">
          <div className="left arrow">
            <IoIosArrowBack />
          </div>

          <div className="quote-box">
            <div className="quote-text">
              &#34; There are only two days in the year that nothing can be done. One
              is called yesterday and the other is called tomorrow, so today is
              the right day to love, believe, do and mostly live. &#34;
            </div>

            <div className="quote-writer">
              - Dalai Lama XIV, The Art of Happiness
            </div>
          </div>

          <div className="right arrow">
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}
