import { useState, useEffect } from "react";

import "./Message.css";

export const Message = () => {
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


    const contacts = [
        {
            id: 1,
            name: "Alice",
            messages: [
                { text: "Hi!", sender: "them" },
                { text: "How are you?", sender: "them" },
                { text: "I'm good, thanks!", sender: "me" },
            ],
        },
        {
            id: 2,
            name: "Bob",
            messages: [
                { text: "Hello!", sender: "them" },
                { text: "Long time no see.", sender: "them" },
                { text: "Yeah, it's been a while!", sender: "me" },
            ],
        },
        {
            id: 3,
            name: "Charlie",
            messages: [
                { text: "Hey!", sender: "them" },
                { text: "Are you free tomorrow?", sender: "them" },
                { text: "Yes, let's plan something.", sender: "me" },
            ],
        },
    ];

    const [selectedContact, setSelectedContact] = useState(null);


    return (
        <div className="messageCon">
            <div className="messageNav">
                <div className="profileImageCon">
                    <div className="profilesearchCon">
                        <input type="text" placeholder='search' id='searchInput' />
                        <div className="lets--icons-search-alt-light"></div>
                    </div>
                    <div className="mcPC">
                        {/* {images.length > 0 ? (
                            images.map((img) => (
                                <div key={img._id} className="profileImage">
                                    <div className="profileImage2">
                                        <img
                                            src={img.image}
                                            alt="uploaded"
                                            style={{ width: "55px", height: "55px", objectFit: "cover", borderRadius: "50%" }}
                                        />
                                        <div >
                                            <p className="profileName">Naveen</p>
                                            <div className="profileContent">
                                                <span >hello </span><span className="profileDate">1d</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: "white" }}>Loading images...</p>
                        )} */}
                        {contacts.map((contact) => (
                            <div key={contact.id}
                                style={{
                                    // padding: "10px",
                                    cursor: "pointer",
                                    background:
                                        selectedContact?.id === contact.id ? "#e0e0e0" : "transparent",
                                    borderRadius: "10px",
                                }}
                                onClick={() => setSelectedContact(contact)}
                                className="profileImage">
                                <div className="profileImage2">
                                    <img
                                        src="https://images.unsplash.com/photo-1744125156184-e0d7e0bc04c4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="uploaded"
                                        style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%" }}
                                    />
                                    <div >
                                        <p className="profileName">{contact.name}</p>
                                        <div className="profileContent">
                                            <span >hello </span><span className="profileDate">1d</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="messageContent">
                <div className="MMC">
                    
                    {selectedContact ? (
                        <div className="MMEM">
                            {selectedContact.messages.map((msg, index) => (
                                <div className={msg.sender==="me" ? "right":"left"} key={index}>
                                    <div 
                                       className="mes"
                                        style={{
                                            background:
                                                msg.sender === "me" ? "#9de5ef" : "#FFFFFF",
                                        }}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="Default"><div>Select a contact to view messages</div></div>
                    )}
                </div>
                <div className="MIC">
                    <input className="messageInput" type="text" placeholder="Type message here..." />
                </div>
            </div>

        </div>
    )
} 