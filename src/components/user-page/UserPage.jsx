import './userpage.css';
import BookBox from './BookBox';
import FeedBack from './FeedBack';
import Footer from '../footer-section/Footer'
import { Link } from 'react-router-dom';

export default function UserPage() {
  return (
    <>
      <nav className="navbar bg-light px-2 position-sticky top-0">
        <div className="container-fluid d-flex justify-content-between align-items-center p-2">
          <span className="navbar-brand mb-0 fs-2">Kitabk</span>
          <div className="user-info d-flex align-items-center gap-3">
           <Link to="/cart"> <i
              className="fa-solid fa-cart-shopping"
              style={{ "font-size": "20px" }}
            ></i></Link>
            <i className="fa-solid fa-bell" style={{ "font-size": "20px" }}></i>
            <div
              className="user-img rounded-circle bg-light "
              style={{ width: "32px:", height: "32px" }}
            >
              <img
                className="mw-100 rounded-circle"
                src="../../../public/img/18915856.jpg"
                alt="user-img"
                width="30px"
              />
            </div>
            <a className="text-black text-decoration-none" href="#">
              Mohammad Zayed
            </a>
          </div>
        </div>
      </nav>
      <main className="d-flex h-100 ">
        <aside className="w-25 position-sticky ">
          <div className="search p-2">
            <input
              className="form-control me-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <ul className="list-unstyled sidebar ">
            <li className="p-3 fw-semibold fs-4">
              <i className="fa-solid fa-house"></i> Home
            </li>
            <li className="p-3 fw-semibold fs-4">
              <i className="fa-solid fa-book"></i> New Books
            </li>
            <li className="p-3 fw-semibold fs-4">
              <i className="fa-solid fa-circle-info"></i> Help
            </li>
            <li className="p-3 fw-semibold fs-4">
              <i className="fa-solid fa-gear"></i> Setting
            </li>
            <li className="p-3 fw-semibold fs-4">
              <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
            </li>
          </ul>
        </aside>
        <div className="content p-4" style={{   }}>
          <h2>Find Your Next Friend</h2>
          <BookBox/>
          <BookBox/>
          <BookBox/>
          <BookBox/>
          <BookBox/>
          <BookBox/>
          <BookBox/>
        </div>
        <aside className=" p-4 position-sticky " style={{ width: "500px"  }}>
          <div className="quote-box-user">
            <div
              className="quote-box rounded-3 d-flex flex-column justify-content-center align-items-center p-2 "
              style={{ "background-color": "#424B5A" }}
            >
            <h4 className="mb-3 text-light">Some Quotes For You</h4>
              <p className="bg-light p-3 fs-4 text-center rounded-3">
                &#34;The world breaks everyone, and afterward, some are strong
                at the broken places.&#34;
                <span className="text-danger">
                  Ernest Hemingway, A Farewell to Arms
                </span>
              </p>
            </div>

          </div>

<FeedBack/>
<FeedBack/>
<FeedBack/>
<FeedBack/>
<FeedBack/>
        </aside>
      </main>
      <Footer />
      
    </>

  );
}
