import Book from "./Book";
export default function BookBox(){
return(
    <div
            className="main-box shadow p-3 mt-4  rounded-1 "
            style={{ "background-color": "#EBECEC", "margin-bottom":"30px" }}
          >
            <h3 className="mb-3">
              New <span className="text-danger"> Books </span>
            </h3>
            <div
              className="box-container p-5 rounded-4 d-flex  gap-3"
              style={{ "background-color": "#424B5A" }}
            >
              <Book />
              <Book />
              <Book />
              <Book />
            </div>
            <div className="slider p-3 d-flex justify-content-between align-items-center">
              <i
                className="fa fa-arrow-left fs-4 text-danger"
                aria-hidden="true"
              ></i>
              <div
                className="slide  w-100 mx-2 p-0 d-flex align-items-center"
                style={{
                  height: "10px",
                  "background-color": "#ccc",
                  padding: "2.5px 0",
                }}
              >
                <p
                  className="w-25  mx-1 p-0 m-0"
                  style={{ height: "5px", "background-color": "#424B5A" }}
                >
                  {" "}
                </p>
              </div>
              <i
                className="fa fa-arrow-right fs-4 text-danger"
                aria-hidden="true"
              ></i>
            </div>
          </div>
)
}