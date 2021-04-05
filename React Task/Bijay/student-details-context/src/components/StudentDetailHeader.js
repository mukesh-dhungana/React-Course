import React from "react";

const StudentDetailHeader = () => {
  return (
    <>
      <div className="card border-secondary mb-3" style={{ maxWidth: "100%" }}>
        <div className="card-header student-detail-header">Student Details</div>
        <div className="card-body student-detail-body">
          <h4 className="card-title">Ashok Ganika</h4>
          <div className="student-detail">
            <div className="email">
              <cite>Email: </cite>
              <p className="card-text">ganikafunny@emoji.com</p>
            </div>
            <div className="contact">
              <cite>Contact No: </cite>
              <p className="card-text">9812151618</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetailHeader;
