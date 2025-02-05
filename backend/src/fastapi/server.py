from fastapi import FastAPI
from pydantic import BaseModel
import face_recognition
import numpy as np
import pickle

app = FastAPI()

# Fake database
face_db = {}

class FaceData(BaseModel):
    userId: str
    image: str  # Base64 image

@app.post("/register")
def register_face(data: FaceData):
    image_np = face_recognition.load_image_file(data.image)
    face_encoding = face_recognition.face_encodings(image_np)[0]
    face_db[data.userId] = face_encoding.tolist()
    return {"message": "Face registered successfully"}

@app.post("/verify")
def verify_face(data: FaceData):
    image_np = face_recognition.load_image_file(data.image)
    face_encoding = face_recognition.face_encodings(image_np)[0]

    for user_id, encoding in face_db.items():
        if face_recognition.compare_faces([np.array(encoding)], face_encoding)[0]:
            return {"message": "Face verified", "userId": user_id}
    return {"message": "Face not recognized"}
