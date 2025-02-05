import axios from "axios";

export const registerFace = async (req, res) => {
    const { userId, image } = req.body;

    try {
        const response = await axios.post("http://127.0.0.1:8000/register", { userId, image });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Face registration failed", error: error.message });
    }
};

export const verifyFace = async (req, res) => {
    const { image } = req.body;

    try {
        const response = await axios.post("http://127.0.0.1:8000/verify", { image });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Face verification failed", error: error.message });
    }
};
