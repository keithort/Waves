import React from "react";
import UserLayout from "../../hoc/user";
import Button from "../utils/button";

const UserDashboard = ({ user }) => {
  return (
    <UserLayout>
      <div>
        <div className="user_nfo_panel">
          <h1>User Information</h1>
          <div>
            <span>
              Name: {user.userData.name} {user.userData.lastname}
            </span>
            <span>Email: {user.userData.email}</span>
            <Button
              type="default"
              title="Edit Account Info"
              linkTo="/user/profile"
            />
          </div>
        </div>
        <div className="user_nfo_panel">
          <h1>Purchase History</h1>
          <div className="user_product_block_wrapper">History</div>
        </div>
      </div>
    </UserLayout>
  );
};

export default UserDashboard;
