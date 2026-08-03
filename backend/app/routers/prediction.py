from fastapi import APIRouter

from ..schemas import (
    PatientData,
    PredictionResponse
)
from ..services.prediction_service import PredictionService


router = APIRouter(
    prefix="/predict",
    tags=["Prediction"]
)


@router.post(
    "",
    response_model=PredictionResponse
)
def predict(data: PatientData):

    return PredictionService.predict(data)