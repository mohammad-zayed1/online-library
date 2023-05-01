export default function FeedBack() {
  return (
    <>
      <div
        className="feedBack-box mt-4 p-3 rounded-2"
        style={{ backgroundColor: "#424B5A" }}
      >
        <div className="info d-flex align-items-center gap-2">
          <img
            className="rounded-circle"
            src="../../../public/img/18915856.jpg"
            alt="user"
            width="30px"
          />
          <h4 className="text-light">Mohammad Zayed</h4>
        </div>
        <div className="text p-2 mt-3 rounded-1 fs-5" style={{backgroundColor:"#D9D9D9"}}>
          I recently read &#34;The Great Gatsby&#34; from the library and I have to say
          it was a fantastic read! The writing was beautiful and the characters
          were so vividly portrayed that I felt like I knew them personally.
        </div>
      </div>
    </>
  );
}
