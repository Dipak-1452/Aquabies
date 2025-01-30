import React, { useEffect, useState } from "react";

export const Home=()=>{
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

    return(
        <div>
        <h2>Image Gallery</h2>
        <div style={{ display: "flex",flexDirection:'column',overflowL:"auto", gap: "10px" }}>
          {images.length > 0 ? (
            images.map((img) => (
              <img
                key={img._id} // Use _id as unique key
                src={img.image} // Base64 format
                alt="uploaded"
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
              />
            ))
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </div>
    )
}