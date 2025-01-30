import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Upload = () => {
    const navigate=useNavigate();
    
    const [image, setImage] = useState(''); // State to store the preview URL

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      // When the file is read, update the state with the image URL
      reader.onload = (event) => {  
        setImage(event.target.result); // Base64 URL of the image
      };

      reader.readAsDataURL(file); // Read file as a data URL
    }
  };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!image) {
            alert('please select a file first!')
            return;
        } 

        const fileInput=document.querySelector("input[type='file']")
        const file=fileInput.files[0];
        const formData = new FormData();
        formData.append("image", file) //"image" is the key expected by the backend

        try {
            const response = await fetch("http://localhost:5000/api/create/upload", {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({image}), //send the base64 image in the body
            });

            const data=await response.json();
            console.log('upload success:',data)
            navigate("/")

        } catch (error) {
            console.log("Upload error:", error)
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="file" name="image" onChange={handleImageChange} /><br />
                <button type="submit" >Upload</button>
                {image && (
                    <div>
                        <h3>Preview:</h3>
                        <img
                            src={image}
                            alt="Preview"
                            style={{ width: "300px", height: "auto", borderRadius: "8px" }}
                        />
                    </div>
                )}
            </form>
        </>
    )
}