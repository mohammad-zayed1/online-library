import "./contact.css";
import Title from "../title/Title";

import { HiLocationMarker, HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";

export default function Contact() {
  return (
    <div id="contact" className="container">
      <Title title="Contact Us" />
      <div className="contact row justify-content-between   ">
        <div className="contact-text col-lg-5 col-12 flex-grow-1 ">
          <h3>We&#39;d love to hear from you</h3>
          <p>If you have any problem or any question for us please tell us.</p>
          <ul className="p-0">
            <li className="py-2 fs-2 d-flex align-items-center">
              <HiLocationMarker className="icon" /> Jordan / Zarqa
            </li>
            <li className="py-2 fs-2 d-flex align-items-center">
              <BsTelephoneFill className="icon" /> 0788120269
            </li>
            <li className="py-2 fs-2 d-flex align-items-center">
              <HiMail className="icon" /> moh@library.com
            </li>
          </ul>
        </div>
        <div className="contact-form col-lg-5 col-12  flex-grow-1">
          <form action="#">
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control py-3  "
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control py-3  "
                id="exampleFormControlInput1"
                placeholder="Full Name"
              />
            </div>
            <div className="mb-3 ">
              <textarea
                className="form-control py-2 "
                id="exampleFormControlTextarea1"
                rows="6"
                placeholder="Write something"
              ></textarea>
            </div>
            <div className="mb-3 ">
              <input
                className="form-control submit w-100 "
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
