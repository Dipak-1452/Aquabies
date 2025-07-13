import { useEffect, useState } from "react";

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
    <div className="outerCon1">
      <div className="outerCon2">
        {images.length > 0 ? (
          images.map((img) => (
            <div key={img._id} className="innerCon1">
              <div className="innerCon2">
                <div className="conheader">
                <img className="profileImg" src="src/assets/profileImage.png" alt="profile image" />
                <span className="name">Tina_ka</span>
                <span className="date">2d</span>
                <span className="locationName">chennai</span>
                <span className="location"><span class="weui--location-outlined"></span></span>
              </div>
              <img
                src={img.image} // Base64 format
                alt="uploaded"
                style={{ width: "400px", height: "550px", objectFit: "cover", borderRadius: "10px" }}
              />
              <div style={{ margin: "5px" }}># the new plants is availble </div>
              <div className="confooter">
                <span><span class="majesticons--heart-line"></span></span>
                <span className="message"><span class="tabler-message"></span></span>
                <span className="bookmark"><span class="famicons--bookmark-outline"></span></span>
              </div>
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