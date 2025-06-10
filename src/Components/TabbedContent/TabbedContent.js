import React, { useState } from "react";
import "./TabbedContent.css";

function TabbedContent() {
  const [activeTab, setActiveTab] = useState("Giới thiệu");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="tabbed-container">
      <div className="tab-buttons">
        <button
          className={`tab-button ${activeTab === "Giới thiệu" ? "active" : ""}`}
          onClick={() => handleTabClick("Giới thiệu")}
        >
          Giới thiệu
        </button>
        <button
          className={`tab-button ${activeTab === "Dịch vụ" ? "active" : ""}`}
          onClick={() => handleTabClick("Dịch vụ")}
        >
          Dịch vụ
        </button>
        <button
          className={`tab-button ${activeTab === "liên hệ" ? "active" : ""}`}
          onClick={() => handleTabClick("liên hệ")}
        >
          Liên hệ
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "Giới thiệu" && (
          <div className="content-panel">
            <h3>ádifhiaushdfkj</h3>
            <p> asjdvhakjshdv;ka</p>
          </div>
        )}
        {activeTab === "Dịch vụ" && (
          <div className="content-panel">
            <h3>ạdghbkjasd</h3>
            <ul>
              <li>a</li>
              <li>b</li>
              <li>c</li>
            </ul>
          </div>
        )}
        {activeTab === "Liên hệ" && (
          <div className="content-panel">
            <h3>Thông tin liên hệ</h3>
            <p>Địa chỉ: </p>
            <p>Điện thoại: </p>
            <p>Email: ab@gmail.com</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TabbedContent;
