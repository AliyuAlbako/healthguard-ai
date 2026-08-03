import { useLocation, useNavigate } from "react-router-dom";

export default function Result(){

const {state}=useLocation();

const navigate=useNavigate();

if(!state){

return(

<h2>

No Result Available

</h2>

)

}

return(

<div className="assessment-page">

<div className="assessment-card">

<h1>

{state.risk_level}

</h1>

<h2>

Probability

</h2>

<h1>

{(state.probability*100).toFixed(1)}%

</h1>

<h3>

Confidence

</h3>

<p>

{state.confidence}

</p>

<h3>

Recommendations

</h3>

<ul>

{

state.recommendations.map((item,index)=>(

<li key={index}>

{item}

</li>

))

}

</ul>

<button

className="primary"

onClick={()=>navigate("/assessment")}

>

Start New Assessment

</button>

</div>

</div>

)

}