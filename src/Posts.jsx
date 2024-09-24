import React from "react";

function Posts() {
  return (
    <div>
      <h1 className="text-center mt-5 ">طلبات المستشفيات</h1>
      <div className="container d-flex justify-content-center flex-wrap gap-3 pt-5 ">
        <div className="card mb-3 forhover" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title display-6 ">Hospital Name</h5>
            <h6 className="m-0 p-0 text-center lead fs-6">Beirut</h6>
            <p className="card-text fs-3 lead text-center fw-semibold mt-1">
              Patient Name
            </p>
            <p className="card-text fs-3 lead text-center fw-bold">78976841</p>
            <div className=" d-flex justify-content-evenly align-items-center">
              <p className="card-subtitle mb-2 rounded border px-3 badge fs-5 bg-danger">
                O-
              </p>
              <p className="card-subtitle mb-2 rounded border px-3 badge fs-5 text-dark">
                3 وحدات
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
