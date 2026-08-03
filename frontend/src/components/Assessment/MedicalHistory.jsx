import SelectField from "../Form/SelectField";
import { yesNoOptions } from "../../config/options";

export default function MedicalHistory() {

    return (

        <div className="form-section">

            <h3>🩺 Medical History</h3>

            <p className="section-description">
                Tell us about your current medical conditions.
            </p>

            <div className="form-grid">

                <SelectField
                    label="High Blood Pressure"
                    name="HighBP"
                    options={yesNoOptions}
                />

                <SelectField
                    label="High Cholesterol"
                    name="HighChol"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Stroke History"
                    name="Stroke"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Heart Disease or Heart Attack"
                    name="HeartDiseaseorAttack"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Difficulty Walking"
                    name="DiffWalk"
                    options={yesNoOptions}
                />

            </div>

        </div>

    );

}