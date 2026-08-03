import { Link } from "react-router-dom";

import "../../styles/CTA.css";

export default function CTA(){

return(

<section className="cta">

<h2>

Ready To Check Your Diabetes Risk?

</h2>

<p>

Complete the assessment in less than two minutes.

</p>

<Link to="/assessment">

Start Free Assessment

</Link>

</section>

)

}