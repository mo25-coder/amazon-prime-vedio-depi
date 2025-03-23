import React from 'react'
// import { useState } from 'react'
import '../../assets/css/ManageAccounts/ManageAccounts.css'



const ManageAccounts = () => {
  return (
    <div className="profile-selection-container">
      {/* Header Section */}
      <div className="logo">prime video</div>

      {/* Main Content */}
      <div className="main-content">
        <h1>Who's watching?</h1>
        <div className="profiles">
          {/* Profile 1 */}
          <div className="profile">
            <div className="avatar" style={{ backgroundColor: '#00A8E1' }}>
              <div className="default-avatar"></div>
            </div>
            <p>abdelrhman...</p>
          </div>

          {/* Profile 2 (Kids) */}
          <div className="profile">
            <div className="avatar kids">
              <div className="kids-avatar">😊</div>
            </div>
            <p>Kids</p>
          </div>

          {/* Add New Profile */}
          <div className="profile">
            <div className="avatar add-new">
              <span>+</span>
            </div>
            <p>Add new</p>
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="edit-profile">Edit profile</button>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-links">
          <a href="#">Terms and Privacy Notice</a>
          <a href="#">Send us feedback</a>
          <a href="#">Help</a>
        </div>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  );
};

export default ManageAccounts;