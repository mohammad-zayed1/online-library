import "./pricing.css";
import Title from "../title/Title";
export default function Pricing() {
  return (
    <div id="pricing">
       <Title title="Pricing"/>
      <div className="container">
        <div className=" row card-deck mb-3 text-center justify-content-between p-2 gap-5">
          <div className="card mb-4 box-shadow col-12 col-lg-3  p-0 flex-grow-1">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $0 <small className="text-muted">USD / Month</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1 e-Book Per Month </li>
                <li>1 Audio-Book Per Month</li>
                <li>--------------------</li>
                <li>--------------------</li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block "
              >
                Sign up for free
              </button>
            </div>
          </div>
          <div className="card mb-4 box-shadow col-12 col-lg-3 p-0 flex-grow-1">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Pro</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                $40 <small className="text-muted">USD / 6 Month</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>5 e-Books Per Month</li>
                <li>10 Audio-Books Per Month</li>
                <li>Free Delivery for Printed Book</li>
                <li>10% Discount on Printed Book </li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block "
              >
                Get started
              </button>
            </div>
          </div>
          <div className="card mb-4 box-shadow col-12 col-lg-3 p-0 flex-grow-1">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Enterprise</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title ">
                $80 <small className="text-muted">USD / Year</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Unlimited e-Books </li>
                <li>Unlimited Audio-Books </li>
                <li>Free Delivery for Printed Book</li>
                <li>15% Discount on Printed Book </li>
              </ul>
              <button
                type="button"
                className="btn btn-lg btn-block "
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
