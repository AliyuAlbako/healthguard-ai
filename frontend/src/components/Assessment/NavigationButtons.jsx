export default function NavigationButtons({

step,

totalSteps,

nextStep,

prevStep

}){

return(

<div className="navigation-buttons">

{

step>1 && (

<button

type="button"

className="secondary"

onClick={prevStep}

>

Previous

</button>

)

}

{

step<totalSteps ? (

<button

type="button"

className="primary"

onClick={nextStep}

>

Next

</button>

)

:

(

<button

type="submit"

className="primary"

>

Analyze My Health

</button>

)

}

</div>

)

}