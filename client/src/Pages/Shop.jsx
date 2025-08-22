import { useEffect, useState } from "react";
import "./Shop.css";

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

    const handleCartClick = (e) => {
        const cartCon = e.currentTarget.closest(".cartCon");
        const cartDetails=cartCon.querySelector(".cartDetails");
        cartDetails.classList.toggle('active');

        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('active');


        document.addEventListener('click', function handleOutsideClick(event) {
            if (!cartCon.contains(event.target)) {
                cartDetails.classList.remove('active');
                overlay.classList.remove('active');

                document.removeEventListener('click', handleOutsideClick);
            }
        });
    }
    return (
        <div className="container1">
            <div className="overlay"></div>
            <div className="categoriesCon">
                <select name="categories" id="categories">
                    <option value="Store">Store</option>
                    <option value="ShareCare">ShareCare</option>
                    <option value="AquaHelp">AquaHelp</option>
                </select>
                <div className="searchCon">
                    <input type="text" placeholder='search' id='searchInput' />
                    <div className="lets-icons-search-alt-light"></div>
                </div>
            </div>
            <div className="container2">
                {images.length > 0 ? (
                    images.map((img) => (
                        <div key={img._id} className="cartCon">
                            <div className="cart" onClick={handleCartClick}>
                                <img
                                    src={img.image}
                                    alt="uploaded"
                                    style={{ width: "185px", height: "185px", paddingTop: '5px', objectFit: "cover", borderRadius: "10px" }}
                                />
                                <div className="cartDetail">
                                    <p>cabomba</p>
                                    <p>$10</p>
                                </div>
                            </div>
                            <div className="cartDetails">
                                <div className="cartAbout">
                                    <img src={img.image} alt="image" style={{ width: "450px", height: "450px", objectFit: "cover", borderRadius: "10px" }} />
                                    <div className="cartInfo">
                                        <p>Common Name: cabomba</p>
                                        <p>Price: $40</p>
                                        <p>Plant Use: Midground</p>
                                        <p>Difficulty Level: Easy</p>
                                        <p>Light Demand: Low</p>
                                        <p>Fertilizer Demand: Low</p><br />
                                        <p>Quantity</p>
                                        <div className="QuantityCon">
                                            <input className="cartQuantity" type="number" />
                                            <button className="addBtn"><span className="cart-arrow-down"></span><span>ADD TO CART</span></button>
                                            <span className='majesticons--heart'></span>
                                        </div>

                                    </div>
                                </div>
                                <div className="cartExtraImg">
                                    <img className="extraImg" src={img.image} alt="image" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }} />
                                    <img className="extraImg" src={img.image} alt="image" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }} />
                                    <img className="extraImg" src={img.image} alt="image" style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "10px" }} />
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