import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";

const Profile = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    let id = localStorage.getItem("id");
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData(data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div className="profile-content">
      {userData && (
        <div>
          <h1>Profile Page</h1>
          <h2>
            Name: {userData.firstName} {userData.lastName}
          </h2>
          <img src={userData.image} alt="" />
          <UserTable userData={userData} />
        </div>
      )}
    </div>
  );
};

export default Profile;
