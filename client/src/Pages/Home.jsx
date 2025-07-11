import React, { useEffect, useState } from "react";

export const Home = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/message");
        const data = await response.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching the message:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="con">
      <div style={{ display: "flex", flexDirection: 'column', overflow: "auto", gap: "5px" }}>
        {images.length > 0 ? (
          images.map((img) => (
            <div key={img._id} className="conbox">
              <div className="line"></div>
              <div className="conheader">
                <img className="profileImg" src="src/assets/profileImage.png" alt="profile image" />
                <span className="name">Tina_ka</span>
                <span className="date">2d</span>
                <span className="locationName">chennai</span>
                <span className="location"><svg width="22" height="29" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 8C12.7639 8 11.5555 8.36656 10.5277 9.05332C9.49988 9.74007 8.6988 10.7162 8.22575 11.8582C7.7527 13.0003 7.62893 14.2569 7.87009 15.4693C8.11125 16.6817 8.7065 17.7953 9.58058 18.6694C10.4547 19.5435 11.5683 20.1388 12.7807 20.3799C13.9931 20.6211 15.2497 20.4973 16.3918 20.0242C17.5338 19.5512 18.5099 18.7501 19.1967 17.7223C19.8834 16.6945 20.25 15.4861 20.25 14.25C20.25 12.5924 19.5915 11.0027 18.4194 9.83058C17.2473 8.65848 15.6576 8 14 8ZM14 18C13.2583 18 12.5333 17.7801 11.9166 17.368C11.2999 16.956 10.8193 16.3703 10.5355 15.6851C10.2516 14.9998 10.1774 14.2458 10.3221 13.5184C10.4667 12.791 10.8239 12.1228 11.3483 11.5983C11.8728 11.0739 12.541 10.7167 13.2684 10.5721C13.9958 10.4274 14.7498 10.5016 15.4351 10.7855C16.1203 11.0693 16.706 11.5499 17.118 12.1666C17.5301 12.7833 17.75 13.5083 17.75 14.25C17.75 15.2446 17.3549 16.1984 16.6517 16.9017C15.9484 17.6049 14.9946 18 14 18ZM14 0.5C10.3545 0.504136 6.85958 1.95412 4.28185 4.53185C1.70412 7.10958 0.254136 10.6045 0.25 14.25C0.25 19.1562 2.51719 24.3563 6.8125 29.2891C8.74254 31.5181 10.9148 33.5252 13.2891 35.2734C13.4992 35.4207 13.7496 35.4996 14.0062 35.4996C14.2629 35.4996 14.5133 35.4207 14.7234 35.2734C17.0933 33.5245 19.2614 31.5174 21.1875 29.2891C25.4766 24.3563 27.75 19.1562 27.75 14.25C27.7459 10.6045 26.2959 7.10958 23.7182 4.53185C21.1404 1.95412 17.6455 0.504136 14 0.5ZM14 32.6875C11.4172 30.6562 2.75 23.1953 2.75 14.25C2.75 11.2663 3.93526 8.40483 6.04505 6.29505C8.15483 4.18526 11.0163 3 14 3C16.9837 3 19.8452 4.18526 21.955 6.29505C24.0647 8.40483 25.25 11.2663 25.25 14.25C25.25 23.1922 16.5828 30.6562 14 32.6875Z" fill="#2ED6A4" />
                </svg></span>
              </div>
              <img
                src={img.image} // Base64 format
                alt="uploaded"
                style={{ width: "430px", height: "550px", objectFit: "cover", borderRadius: "15px" }}
              />
              <div style={{ margin: "5px" }}># the new plants is availble </div>
              <div className="confooter">
                <span><svg width="35" height="32" viewBox="0 0 35 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.6708 26.6896L17.5 26.8604L17.3121 26.6896C9.1975 19.3267 3.83333 14.4579 3.83333 9.52083C3.83333 6.10417 6.39583 3.54167 9.8125 3.54167C12.4433 3.54167 15.0058 5.25 15.9113 7.57333H19.0888C19.9942 5.25 22.5567 3.54167 25.1875 3.54167C28.6042 3.54167 31.1667 6.10417 31.1667 9.52083C31.1667 14.4579 25.8025 19.3267 17.6708 26.6896ZM25.1875 0.125C22.215 0.125 19.3621 1.50875 17.5 3.67833C15.6379 1.50875 12.785 0.125 9.8125 0.125C4.55083 0.125 0.416668 4.24208 0.416668 9.52083C0.416668 15.9612 6.225 21.24 15.0229 29.2179L17.5 31.4729L19.9771 29.2179C28.775 21.24 34.5833 15.9612 34.5833 9.52083C34.5833 4.24208 30.4492 0.125 25.1875 0.125Z" fill="#2ED6A4" />
                </svg></span>
                <span className="message"><svg width="40" height="40" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_41_30)">
                    <path d="M15.1667 15.1667H29.8333M15.1667 22.5H26.1667M33.5 6C34.9587 6 36.3576 6.57946 37.3891 7.61091C38.4205 8.64236 39 10.0413 39 11.5V26.1667C39 27.6254 38.4205 29.0243 37.3891 30.0558C36.3576 31.0872 34.9587 31.6667 33.5 31.6667H24.3333L15.1667 37.1667V31.6667H11.5C10.0413 31.6667 8.64236 31.0872 7.61091 30.0558C6.57946 29.0243 6 27.6254 6 26.1667V11.5C6 10.0413 6.57946 8.64236 7.61091 7.61091C8.64236 6.57946 10.0413 6 11.5 6H33.5Z" stroke="#2ED6A4" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges" />
                  </g>
                  <defs>
                    <filter id="filter0_d_41_30" x="0" y="4" width="45" height="43.1667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_41_30" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_41_30" result="shape" />
                    </filter>
                  </defs>
                </svg></span>
                <span className="bookmark"><svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 32V5.33333C2 4.44928 2.35119 3.60143 2.97631 2.97631C3.60143 2.35119 4.44928 2 5.33333 2H22C22.8841 2 23.7319 2.35119 24.357 2.97631C24.9821 3.60143 25.3333 4.44928 25.3333 5.33333V32L15.47 25.6583C14.9322 25.3124 14.3062 25.1284 13.6667 25.1284C13.0272 25.1284 12.4012 25.3124 11.8633 25.6583L2 32Z" stroke="#2ED6A4" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                </span>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "white" }}>Loading images...</p>
        )}
      </div>
    </div>
  )
}