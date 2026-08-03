def get_recommendations(probability: float):

    recommendations = []

    if probability < 0.30:

        recommendations = [

            "Maintain your healthy lifestyle.",

            "Continue regular physical activity.",

            "Eat a balanced diet rich in fruits and vegetables.",

            "Attend routine health check-ups."

        ]

    elif probability < 0.60:

        recommendations = [

            "Increase weekly physical activity.",

            "Reduce sugar intake.",

            "Monitor your body weight.",

            "Schedule periodic blood glucose screening."

        ]

    else:

        recommendations = [

            "Consult a healthcare professional.",

            "Monitor your blood glucose regularly.",

            "Adopt a medically supervised diet plan.",

            "Increase physical activity if medically appropriate.",

            "Reduce sugary drinks and processed foods."

        ]

    return recommendations