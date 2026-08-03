import joblib

from .config import MMODEL_PATH

model = joblib.load(MMODEL_PATH)