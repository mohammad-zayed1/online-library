import "./services.css";
import Title from "../landing-page/title/Title";
import Service from "./service-card/Service";
import { FaBook } from "react-icons/fa";
import { RiVoiceprintFill } from "react-icons/ri";
import { GiArchiveResearch } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
export default function Services() {
  return (
    <div id="services">
      <Title title="Services" />
      <div className="services container">
        <div className="box">
          <Service icon={<FaBook />} text="Printed Books" />
          <Service icon={<RiVoiceprintFill />} text="Voice Books" />
          <Service icon={<GiArchiveResearch />} text="User Research" />
          <Service icon={<TbTruckDelivery />} text="Free Delivery" />
        </div>
      </div>
    </div>
  );
}
