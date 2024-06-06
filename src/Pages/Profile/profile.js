import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { baseUrl } from "../../Components/Constant";

function Profile() {

  const [profileData, setProfileData] = useState('')

  const handleProfileData = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios.get(`${baseUrl}/accounts/profile/`, {
      headers: { 'Authorization': `Bearer ${token}` },
    })
      .then((res) => {
        console.log(res.data)
        setProfileData(res.data.profile.addressddet)

      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    handleProfileData()
  }, [])

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 text-warning fw-bold display-5">Profile</h2>
        <div className="row">
          <div className="col-lg-3 col-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 col-9 mb-5">
            <div className="prof-bg  p-4 " style={{ maxWidth: "650px" }}>
              <form method="post">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={profileData.name}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    value={profileData.phone}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    value={profileData.email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={profileData.addressline}
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="city" className="form-label">
                      City:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={profileData.city}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="state" className="form-label">
                      State:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="state"
                      name="state"
                      value={profileData.state}
                    />
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zipCode" className="form-label">
                      Zip:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      name="zipCode"
                      value={profileData.zipcode}
                    />
                  </div>
                </div>
                {/* <button type="submit" className="button-69 d-block mx-auto ">
                  Submit
                </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
