

import {FaCcMastercard , FaCcVisa , FaCcPaypal} from 'react-icons/fa';
import {BsPlus} from 'react-icons/bs';
import {GrFormSubtract} from 'react-icons/gr';


export default function ShoppCart() {
  return (
    <section className="h-100 h-custom">
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="fs-2">
                      Shopping Bag
                    </th>
                    <th scope="col" className='fs-2 '>Format</th>
                    <th scope="col" className='fs-2 '>Quantity</th>
                    <th scope="col" className='fs-2 '>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="d-flex align-items-center p-3">
                        <img
                          src="https://i.imgur.com/2DsA49b.webp"
                          className="img-fluid rounded-3"
                          style={{ width: "120px" }}
                          alt="Book"
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-2 fs-3">Thinking, Fast and Slow</p>
                          <p className="mb-0 fs-4">Daniel Kahneman</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle">
                      <p className="mb-0 fs-4" style={{ "font-weight": "500" }}>
                        Digital
                      </p>
                    </td>
                    <td className="align-middle">
                      <div className="d-flex flex-row">
                        <button className="btn btn-link px-2">
                          <GrFormSubtract className='fs-3'/>
                        </button>

                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value="2"
                          type="number"
                          className="form-control form-control-sm fs-4 text-center py-2"
                          style={{ width: "100px" }}
                        />

                        <button className="btn btn-link px-2">
                          <BsPlus className='fs-3'/>
                        </button>
                      </div>
                    </td>
                    <td className="align-middle">
                      <p className="mb-0 fs-4" style={{ "font-weight": "500" }}>
                        $9.99
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="border-bottom-0">
                      <div className="d-flex align-items-center p-3">
                        <img
                          src="https://i.imgur.com/Oj1iQUX.webp"
                          className="img-fluid rounded-3"
                          style={{ width: "120px" }}
                          alt="Book"
                        />
                        <div className="flex-column ms-4">
                          <p className="mb-2 fs-3">
                            Homo Deus: A Brief History of Tomorrow
                          </p>
                          <p className="mb-0 fs-4">Yuval Noah Harari</p>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle border-bottom-0">
                      <p className="mb-0 fs-4" style={{ "font-weight": "500" }}>
                        Paperback
                      </p>
                    </td>
                    <td className="align-middle border-bottom-0">
                      <div className="d-flex flex-row">
                        <button className="btn btn-link px-2">
                            <GrFormSubtract className='fs-3'/>
                        </button>

                        <input
                          id="form1"
                          min="0"
                          name="quantity"
                          value="1"
                          type="number"
                          className="form-control form-control-sm py-2 fs-4 text-center"
                          style={{ "width": "100px" }}
                        />

                        <button className="btn btn-link px-2">
                          <BsPlus className='fs-3'/>
                        </button>
                      </div>
                    </td>
                    <td className="align-middle border-bottom-0">
                      <p className="mb-0 fs-4" style={{ "font-weight": "500" }}>
                        $13.50
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="card shadow-2-strong mb-5 mb-lg-0"
              style={{ "border-radius": "16px", "background-color" :"#424B5A" }}
            >
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                    <form>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel1v"
                            value=""
                            aria-label="..."
                            checked
                          />
                        </div>
                        <div className="rounded border w-100 p-3 bg-white">
                          <p className="d-flex align-items-center mb-0 fs-3">
                            <FaCcMastercard className='fs-1 mx-3'/>
                            Credit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row pb-3">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel2v"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3 bg-white">
                          <p className="d-flex align-items-center mb-0 fs-3">
                            <FaCcVisa className='fs-1 mx-3'/>
                            Debit Card
                          </p>
                        </div>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="d-flex align-items-center pe-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="radioNoLabel"
                            id="radioNoLabel3v"
                            value=""
                            aria-label="..."
                          />
                        </div>
                        <div className="rounded border w-100 p-3 bg-white">
                          <p className="d-flex align-items-center mb-0 fs-3">
                            <FaCcPaypal className='fs-1 mx-3'/>
                            PayPal
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6 col-lg-4 col-xl-6">
                    <div className="row">
                      <div className="col-12 col-xl-6">
                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg py-3"
                            size="17"
                            placeholder="Name on card"
                          />
                        </div>

                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="text"
                            id="typeExp"
                            className="form-control form-control-lg py-3"
                            placeholder="MM/YY"
                            size="7"
                            min="7"
                            max="7"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-xl-6">
                        <div className="form-outline mb-4 mb-xl-5">
                          <input
                            type="text"
                            id="typeText"
                            className="form-control form-control-lg py-3"
                            size="17"
                            placeholder="Card Number"
                            min="19"
                            max="19"
                          />
                        </div>

                        <div className="form-outline mb-4 mb-xl-5 ">
                          <input
                            type="password"
                            id="typeText"
                            className="form-control form-control-lg py-3 "
                            placeholder="Cvv"
                            size="1"
                            min="3"
                            max="3"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-xl-3">
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ "font-weight": "500" }}
                    >
                      <p className="mb-2 fs-3 text-light">Subtotal</p>
                      <p className="mb-2 fs-4 text-light">$23.49</p>
                    </div>

                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ "font-weight": "500" }}
                    >
                      <p className="mb-0 fs-3 text-light">Shipping</p>
                      <p className="mb-0 fs-4 text-light">$2.99</p>
                    </div>

                    <hr className="my-4" />

                    <div
                      className="d-flex justify-content-between align-items-center mb-4"
                      style={{ "font-weight": "500" }}
                    >
                      <p className="mb-2 fs-3 text-light">Total (tax included)</p>
                      <p className="mb-2 fs-4 text-light">$26.48</p>
                    </div>

                    <button
                      type="button"
                      className="btn btn-block btn-lg w-100"
                      style={{"background-color":"#BF3C3C"}}
                    >
                      <div className="d-flex justify-content-between text-light">
                        <span>Checkout</span>
                        <span>$26.48</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
