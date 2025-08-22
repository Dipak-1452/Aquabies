import './Register.css';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Register = () => {

    const navigate = useNavigate();

    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');

    const handleloginBtnClick = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/v1/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password}),
                credentials: "include"   //allows browser to store cookie
            });

            const data = await response.json();
            if (data.success) {
                navigate("/");
                setemail('');
                setpassword('');
            }
        } catch (error) {
            console.log("error:", error)
        }
    }

    return (
        <div className="fullScreenCon">
            <div className="logoCon">
                <div className="logo">
                    <svg width="30vw" height="30vw" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M167.929 30C180.991 30 192.323 31.3268 201.909 33.2655C212.398 35.3871 222.42 39.8656 230.643 44.452C242.762 51.2119 254.944 63.1674 255 63.2228C254.93 63.1957 233.408 54.8849 214.87 53.6568C201.422 52.766 187.453 52.9882 179.261 56.4036C177.803 57.0142 176.597 58.1039 175.842 59.492C172.369 65.8144 163.413 85.677 173.832 106.654C175.55 110.126 188.526 112.584 192.219 111.451C197.125 109.942 196.553 111.447 205.398 107.996C213.359 104.89 221.681 96.0155 228.14 91.3414C232.18 88.4178 250.952 76.5582 252.141 81.4173C253.333 86.3051 253.829 88.3066 252.118 96.2801C250.407 104.254 252.009 97.2768 250.5 103.755C250.513 104.254 240.11 118.615 230.643 124.883C222.896 130.013 215.833 128.865 215.815 130.666C213.626 132.861 222.307 132.424 230.643 136.743C237.64 140.369 246.388 151.809 246.268 153.59C247.522 157.577 248.154 163.059 248.327 170.655C249.266 180.002 248.963 187.224 248.153 190.545C246.965 195.388 231.183 181.552 227.143 178.629C220.432 173.772 212.704 153.814 204.462 150.65C195.959 147.386 194.949 150.008 190.225 148.552C188.459 147.971 179.566 150.027 177.842 150.722C176.119 151.418 174.698 152.702 173.832 154.346C163.414 175.323 172.369 195.186 175.842 201.508C176.597 202.896 177.803 203.985 179.261 204.595C187.453 208.011 201.422 208.233 214.87 207.342C233.388 206.115 241.993 203.769 242.039 203.756C238.984 205.791 238.894 211.065 228.14 216.643C220.888 220.406 212.866 223.853 205.398 225.473C190.816 228.637 172.181 231 149.65 231C145.456 231 141.357 230.871 137.354 230.627V32.6835C146.977 30.9457 157.163 30 167.929 30Z" fill="#2E6B59" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M111.431 77.8412C99.8541 79.6195 89.5765 83.2739 80.5243 88.143L80.5253 151.378L80.5243 151.379V193.229C89.5961 196.215 99.8849 198.265 111.431 198.721V227.265C108.723 226.72 106.067 226.121 103.465 225.473C50.2397 212.234 19.2973 178.737 8.17533 164.487C6.61546 162.49 5.58681 160.129 5.18724 157.627C4.78779 155.125 5.02992 152.563 5.8902 150.179C17.6399 116.757 48.8388 65.5603 104.7 42.2827C106.906 41.3638 109.149 40.4884 111.431 39.6594V77.8412ZM64.5723 93.7883C41.5238 109.324 27.9811 132.706 22.2327 148.993C21.719 150.41 21.5746 151.935 21.8131 153.423C22.0517 154.912 22.6653 156.317 23.5968 157.505C29.039 164.45 42.4283 179.082 64.5723 188.474V93.7883Z" fill="#2E6B59" />
                    </svg>
                </div>
                <div className="intro">
                    <p className="intro1">Welcome to Aquabies</p>
                    <p className="intro2">A vibrant community for aquarium lovers.</p>
                </div>

            </div>

            <div className="loginCon">
                <div>
                    <p className="Herotag">Connecting through Nature</p>
                    <p className="Herotag2">join today.</p>
                    <input className="loginConInput" onChange={(e)=>setemail(e.target.value)} value={email} type="email" placeholder="get@ziontutorial.com" /><br />
                    <input className="loginConInput" onChange={(e)=>setpassword(e.target.value)} value={password} type="password" placeholder="Password" /><br />
                    <span className="lineText">Or continue with</span>
                    <span className="line2"></span>
                    <div className="loginIconCon">
                        <button className="loginIcon"><span className="flat-color-icons--google"></span></button>
                        <button className="loginIcon"><span className="logos--meta-icon"></span></button>
                        <button className="loginIcon"><span className="ic--baseline-apple"></span></button>
                    </div>
                    <button className="loginbtn" onClick={handleloginBtnClick}>sign in</button>
                </div>
            </div>
        </div>
    )
}