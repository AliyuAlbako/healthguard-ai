import "./assessment.css";

export default function StepIndicator({

step,

totalSteps

}){

const percentage=(step/totalSteps)*100;

return(

<>

<h2>

Health Assessment

</h2>

<p>

Step {step} of {totalSteps}

</p>

<div className="progress">

<div

className="progress-fill"

style={{

width:`${percentage}%`

}}

>

</div>

</div>

</>

)

}