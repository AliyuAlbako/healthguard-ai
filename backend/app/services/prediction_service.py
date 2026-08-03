import pandas as pd

from ..model_loader import model
from ..recommender import get_recommendations


FEATURE_COLUMNS = [
    "HighBP",
    "HighChol",
    "CholCheck",
    "BMI",
    "Smoker",
    "Stroke",
    "HeartDiseaseorAttack",
    "PhysActivity",
    "Fruits",
    "Veggies",
    "HvyAlcoholConsump",
    "AnyHealthcare",
    "NoDocbcCost",
    "GenHlth",
    "MentHlth",
    "PhysHlth",
    "DiffWalk",
    "Sex",
    "Age",
    "Education",
    "Income",
]


class PredictionService:

    @staticmethod
    def preprocess(patient):

        return pd.DataFrame(
            [[
                patient.HighBP,
                patient.HighChol,
                patient.CholCheck,
                patient.BMI,
                patient.Smoker,
                patient.Stroke,
                patient.HeartDiseaseorAttack,
                patient.PhysActivity,
                patient.Fruits,
                patient.Veggies,
                patient.HvyAlcoholConsump,
                patient.AnyHealthcare,
                patient.NoDocbcCost,
                patient.GenHlth,
                patient.MentHlth,
                patient.PhysHlth,
                patient.DiffWalk,
                patient.Sex,
                patient.Age,
                patient.Education,
                patient.Income
            ]],
            columns=FEATURE_COLUMNS
        )

    @staticmethod
    def predict(patient):

        df = PredictionService.preprocess(patient)

        probability = float(
            model.predict_proba(df)[0][1]
        )

        prediction = int(probability >= 0.50)

        if probability < 0.30:
            risk = "Low Risk"

        elif probability < 0.60:
            risk = "Moderate Risk"

        else:
            risk = "High Risk"

        return {

            "prediction": prediction,

            "risk_level": risk,

            "probability": round(probability, 4),

            "confidence": f"{probability * 100:.1f}%",

            "model": "LightGBM v1.0",

            "assessment":
                (
                    "The prediction indicates a high likelihood of diabetes risk."
                    if prediction == 1
                    else
                    "The prediction indicates a low likelihood of diabetes risk."
                ),

            "recommendations":
                get_recommendations(probability)

        }