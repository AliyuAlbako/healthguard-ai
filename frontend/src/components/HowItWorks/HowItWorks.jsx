import "../../styles/HowItWorks.css";

const steps = [

    "Fill Your Health Assessment",

    "AI Analyzes Your Information",

    "Receive Diabetes Risk Prediction",

    "Get Personalized Recommendations"

];

export default function HowItWorks(){

return(

<section className="how">

<h2>

How It Works

</h2>

<div className="steps">

{steps.map((step,index)=>(

<div className="step" key={index}>

<div className="circle">

{index+1}

</div>

<p>

{step}

</p>

</div>

))}

</div>

</section>

)

}