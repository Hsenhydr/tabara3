import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  //switch
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const search = document.getElementById("search").value;
    fetch(`http://localhost/....?search=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
    [search];
  };

  return (
    <>
      <h1 className="text-center mt-5">Tabaraa | تبرّع</h1>
      <p className="text-center mt-3 mb-5 lead mx-5">
        منصة تبرّع للتبرع بالدم لخدمة المستشفيات والجرحى بشكل منظّم
      </p>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <Link
          to={"/posts"}
          className="p-2 border rounded text-dark text-decoration-none post"
          style={{
            backgroundColor: "#fff",
          }}
        >
          طلبات المستشفيات
        </Link>
      </div>
      {/* toggle tab  */}
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button
          className="p-2 m-2 border rounded"
          style={{
            backgroundColor: activeTab === "Tab1" ? "blue" : "#fff",
          }}
          onClick={() => handleTabSwitch("Tab1")}
        >
          تعبئة استمارة التبرع
        </button>
        <button
          className="p-2 m-2 border rounded"
          style={{
            backgroundColor: activeTab === "Tab2" ? "blue" : "#fff",
          }}
          onClick={() => handleTabSwitch("Tab2")}
        >
          البحث عن متبرعين
        </button>
      </div>
      <main style={{ marginTop: "20px" }} className="text-center">
        {loading ? (
          <Loading />
        ) : (
          activeTab === "Tab1" && (
            <div className="container d-flex justify-content-center">
              <form>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label">
                    الأسم الثلاثي
                  </label>
                  <input type="text" className="form-control" id="Name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="Phone" className="form-label">
                    رقم الهاتف
                  </label>
                  <input type="text" className="form-control" id="Phone" />
                </div>
                <div className="mb-3">
                  <label htmlFor="location" className="form-label">
                    المنطقة
                  </label>
                  <input type="text" className="form-control" id="location" />
                </div>
                <div className="mb-3">
                  <label htmlFor="BloodType" className="form-label">
                    فئة الدم
                  </label>
                  <select className="form-select">
                    <option selected value={"A+"}>
                      A+
                    </option>
                    <option value={"A-"}>A-</option>
                    <option value={"B+"}>B+</option>
                    <option value={"B-"}>B-</option>
                    <option value={"AB+"}>AB+</option>
                    <option value={"AB-"}>AB-</option>
                    <option value={"O+"}>O+</option>
                    <option value={"O-"}>O-</option>
                  </select>
                </div>

                <div className="mb-3 d-flex justify-content-center align-items-center gap-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Sex"
                      id="Male"
                    />
                    <label className="form-check-label" htmlFor="Male">
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Sex"
                      id="Female"
                      defaultChecked=""
                    />
                    <label className="form-check-label" htmlFor="Female">
                      Female{" "}
                    </label>
                  </div>
                </div>

                <div className="mb-3">
                  <p dir="rtl" className="fs-3 text-center">
                    تأكد من تحقق الشروط التالية:
                  </p>
                  <ul
                    className="d-flex flex-column text-end lead fs-6"
                    dir="rtl"
                  >
                    <li>
                      أن يكون المتبرع بصحة جيدة بدون أمراض مزمنة كضغط وسُكر
                    </li>
                    <li>وزنه اكثر من 50 كيلوغرام</li>
                    <li>عمره اكثر من ١٨ سنة وأقل من 65 سنة</li>
                    <li>درجة حرارته طبيعية</li>
                    <li>نسبة الهيموغلوبين أعلى من 12,5</li>
                    <li>دقات قلبه طبيعية من 70-120</li>
                    <li>ضغط دمه طبيعي 60/110 | 90/140</li>
                    <li>غير متعرض لصدمة</li>
                  </ul>
                </div>

                <button type="submit" className="btn btn-primary mb-3 ">
                  تسليم
                </button>
              </form>
            </div>
          )
        )}
        {activeTab === "Tab2" && (
          <>
            <div className="d-flex justify-content-center align-items-center m-5">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search By BloodType"
                  id="search"
                  onChange={handleSearch}
                />
              </form>
            </div>
            <div className="container d-flex justify-content-center flex-wrap gap-3 ">
              <div className="card mb-3 forhover" style={{ width: "18rem" }}>
                <img
                  class="card-img-top w-50 mx-auto my-3"
                  src="public/oneg.png"
                  alt=""
                />
                <div className="card-body">
                  <h5 className="card-title display-6 ">Hussein Haidar</h5>
                  <p className="card-text fs-3 lead">78976841</p>
                  <div className=" d-flex justify-content-between align-items-center">
                    <p className="card-subtitle mb-2 mx-3 rounded border px-3 badge bg-success">
                      Male
                    </p>
                    <p className="card-subtitle mb-2 rounded border px-3 badge bg-danger">
                      O-
                    </p>
                  </div>
                  <p className="card-subtitle mb-2 text-muted pb-2">
                    حارة حريك
                  </p>
                  <a
                    className="card-btn btn btn-outline-secondary"
                    href="https://wa.me/+96178976841"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3">
          © 2024 Copyright: Blood Donation By Hussein Haidar
        </div>
      </footer>
    </>
  );
}
function Loading() {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}

function map() {
  users.map((users) => (
    <div className="card mb-3 forhover" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{users.Name}</h5>
        <p className="card-text">{users.PhoneNumber}</p>
        <div className=" d-flex justify-content-around align-items-center">
          <p className="card-subtitle mb-2 text-muted">{users.BloodType}</p>
          <p className="card-subtitle mb-2 text-muted">{users.Sex}</p>
        </div>
        <p className="card-subtitle mb-2 text-muted">{users.Location}</p>
      </div>
    </div>
  ));
}

export default App;
