import React, { Component } from "react";

class Qualifications extends Component {
  render() {
    return (
      <div>
        <h2>مؤهلاتي</h2>
        <li>
          <h3>ماجستير علم حاسوب</h3>
          <p>جامعة ستيفنز، الولايات المتحدة</p>
        </li>
        <hr></hr>
        <li>
          <h3>بكالوريوس هندسة البرمجيات</h3>
          <a href="http://www.bau.edu.jo" rel="noopener noreferrer" target="_blank"><p>جامعة البلقاء التطبيقية، الأردن</p></a>
        </li>
        <hr></hr>
        <li>
          <h3>Microsoft Certified Technology Specialist</h3>
          <p>Microsoft Corp.</p>
        </li>
      </div>
    );
  }
}

export default Qualifications;
