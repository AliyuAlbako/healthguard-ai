import SelectField from "../Form/SelectField";
import NumberField from "../Form/NumberField";

import {
    yesNoOptions,
    generalHealthOptions
} from "../../config/options";

export default function HealthIndicators(){

    return(

        <div className="form-section">

            <h3>📊 Health Indicators</h3>

            <p className="section-description">
                Enter your recent health information.
            </p>

            <div className="form-grid">

                <NumberField
                    label="Body Mass Index (BMI)"
                    name="BMI"
                    min={10}
                    max={70}
                    placeholder="Example: 27.5"
                    step={0.1}
                />

                <SelectField
                    label="General Health"
                    name="GenHlth"
                    options={generalHealthOptions}
                />

                <NumberField
                    label="Poor Physical Health (Days)"
                    name="PhysHlth"
                    min={0}
                    max={30}
                    placeholder="0 - 30"
                />

                <NumberField
                    label="Poor Mental Health (Days)"
                    name="MentHlth"
                    min={0}
                    max={30}
                    placeholder="0 - 30"
                />

                <SelectField
                    label="Cholesterol Checked (Last 5 Years)"
                    name="CholCheck"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Have Health Insurance / Healthcare"
                    name="AnyHealthcare"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Could Not Afford Doctor Visit"
                    name="NoDocbcCost"
                    options={yesNoOptions}
                />

            </div>

        </div>

    );

}