import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Upload.css"

export const Upload = () => {
    const [image,setImage]=useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image) {
            alert('please select a file first!')
            return;
        }


        try {
            const response = await fetch("http://localhost:5000/api/create/upload", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image }), 
            });

            const data = await response.json();
            console.log('upload success:')
            navigate("/")

        } catch (error) {
            console.log("Upload error:", error)
        }
    };
    return (
        <div className="createCon">
            <div>
                <input id="fileUpload" type="text" name="image" onChange={(e)=>setImage(e.target.value)}/><br />
                <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )
}