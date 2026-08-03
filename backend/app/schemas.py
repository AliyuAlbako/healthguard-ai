from typing import List

from pydantic import BaseModel


class PatientData(BaseModel):

    HighBP: int
    HighChol: int
    CholCheck: int
    BMI: float
    Smoker: int
    Stroke: int
    HeartDiseaseorAttack: int
    PhysActivity: int
    Fruits: int
    Veggies: int
    HvyAlcoholConsump: int
    AnyHealthcare: int
    NoDocbcCost: int
    GenHlth: int
    MentHlth: int
    PhysHlth: int
    DiffWalk: int
    Sex: int
    Age: int
    Education: int
    Income: int


class PredictionResponse(BaseModel):

    prediction: int

    risk_level: str

    probability: float

    confidence: str

    model: str

    assessment: str

    recommendations: List[str]