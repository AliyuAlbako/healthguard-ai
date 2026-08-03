import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import StepIndicator from "./StepIndicator";
import NavigationButtons from "./NavigationButtons";

import PersonalInfo from "./PersonalInfo";
import MedicalHistory from "./MedicalHistory";
import Lifestyle from "./Lifestyle";
import HealthIndicators from "./HealthIndicators";
import api from "../../services/api";

import LoadingOverlay from "../Loader/LoadingOverlay";

import "./assessment.css";

export default function AssessmentWizard() {

    const methods = useForm({

        defaultValues: {

            HighBP: 0,
            HighChol: 0,
            CholCheck: 1,
            BMI: "",
            Smoker: 0,
            Stroke: 0,
            HeartDiseaseorAttack: 0,
            PhysActivity: 1,
            Fruits: 1,
            Veggies: 1,
            HvyAlcoholConsump: 0,
            AnyHealthcare: 1,
            NoDocbcCost: 0,
            GenHlth: "",
            MentHlth: "",
            PhysHlth: "",
            DiffWalk: 0,
            Sex: "",
            Age: "",
            Education: "",
            Income: ""

        }

    });

    const [step, setStep] = useState(1);

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const totalSteps = 4;

    const nextStep = async () => {

    let fields = [];

    switch(step){

        case 1:
            fields = [
                "Age",
                "Sex",
                "Education",
                "Income"
            ];
            break;

        case 2:
            fields = [
                "HighBP",
                "HighChol",
                "Stroke",
                "HeartDiseaseorAttack",
                "DiffWalk"
            ];
            break;

        case 3:
            fields = [
                "Smoker",
                "HvyAlcoholConsump",
                "PhysActivity",
                "Fruits",
                "Veggies"
            ];
            break;

        default:
            fields = [
                "BMI",
                "GenHlth",
                "PhysHlth",
                "MentHlth",
                "CholCheck",
                "AnyHealthcare",
                "NoDocbcCost"
            ];

    }

    const valid = await methods.trigger(fields);

    if(valid){

        setStep(step + 1);

    }

};

    const prevStep = () => {

        if(step > 1){

            setStep(step - 1);

        }

    };

    const onSubmit = async (data) => {

    try{

        setLoading(true);

        const response = await api.post(
            "/predict",
            data
        );

        navigate(
            "/result",
            {
                state: response.data
            }
        );

    }

    catch(error){

        console.error(error);

        alert("Prediction failed.");

    }

    finally{

        setLoading(false);

    }

};

   return (

    <>

        {loading && <LoadingOverlay />}

        <FormProvider {...methods}>

            <div className="assessment-page">

                <div className="assessment-card">

                    <StepIndicator
                        step={step}
                        totalSteps={totalSteps}
                    />

                    <form
                        onSubmit={methods.handleSubmit(onSubmit)}
                    >

                        {step === 1 && <PersonalInfo />}

                        {step === 2 && <MedicalHistory />}

                        {step === 3 && <Lifestyle />}

                        {step === 4 && <HealthIndicators />}

                        <NavigationButtons
                            step={step}
                            totalSteps={totalSteps}
                            nextStep={nextStep}
                            prevStep={prevStep}
                        />

                    </form>

                </div>

            </div>

        </FormProvider>

    </>

);

}