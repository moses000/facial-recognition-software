import React, { useRef } from "react";

const FaceAuth = ({ onSuccess }) => {
    const videoRef = useRef(null);

    const startCamera = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
    };

    return (
        <div>
            <video ref={videoRef} autoPlay width="300" height="300"></video>
            <button onClick={startCamera}>Start Camera</button>
        </div>
    );
};

export default FaceAuth;
