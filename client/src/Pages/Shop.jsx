import { useEffect, useState } from "react";

export const Shop = () => {
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
        <div className="container1">
            <div className="categories">
                <h2>categories</h2>
                <div className="searchCon">
                    <input type="text" placeholder='  search' id='searchInput' />
                    <div class="lets-icons-search-alt-light"></div>
                </div>
            </div>
            <div className="container2">
                {images.length > 0 ? (
                    images.map((img) => (
                        <div key={img._id} className="cartCon">
                            <div className="cart">
                                <img
                                src={img.image}
                                alt="uploaded"
                                style={{ width: "185px", height: "185px", objectFit: "cover", borderRadius: "10px" }}
                            />
                            <div className="cartDetail">
                                <p>cabomba</p>
                                <p>$10</p>
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