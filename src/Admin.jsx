import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function Admin() {
  return (
    <>
      <h1 className="text-center mt-5">Admin Panel</h1>
      <main style={{ marginTop: "20px" }} className="text-center">
        <div className="container d-flex justify-content-center">
          <form>
            <div className="mb-3">
              <label htmlFor="hospital" className="form-label">
                اسم المستشفى
              </label>
              <input type="text" className="form-control" id="hospital" />
            </div>
            <div className="mb-3">
              <label htmlFor="BloodType" className="form-label">
                فئة الدم
              </label>
              <select className="form-select">
                <option selected value={"All"}>
                  All
                </option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="bloodno" className="form-label">
                عدد الوحدات
              </label>
              <input type="number" className="form-control" id="bloodno" />
            </div>
            <button type="submit" className="btn btn-primary">
              تسليم
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Admin;

// login Component
function Login() {
  return (
    <>
      <h1 className="text-center mt-5">Login</h1>
      <main style={{ marginTop: "20px" }} className="text-center">
        <div className="container d-flex justify-content-center">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
