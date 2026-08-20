from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers.prediction import router as prediction_router

app = FastAPI(
    title="HealthGuard AI",
    version="1.0.0",
    description="""
AI-Powered Early Disease Risk Prediction and Preventive Health Recommendation System.

Features

• Binary diabetes risk prediction
• Personalized health recommendations
• LightGBM machine learning model
• REST API
• FastAPI backend
"""
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register prediction routes
app.include_router(prediction_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to HealthGuard AI API"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.get("/model-info")
def model_info():
    return {
        "model": "LightGBM",
        "version": "1.0",
        "accuracy": 0.7522,
        "roc_auc": 0.8305,
        "features": 21,
        "prediction_type": "Binary Classification",
        "target": "Diabetes Risk",
    }