import SelectField from "../Form/SelectField";
import { yesNoOptions } from "../../config/options";

export default function Lifestyle() {

    return (

        <div className="form-section">

            <h3>🏃 Lifestyle</h3>

            <p className="section-description">
                These lifestyle habits help improve prediction accuracy.
            </p>

            <div className="form-grid">

                <SelectField
                    label="Do you smoke?"
                    name="Smoker"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Heavy Alcohol Consumption"
                    name="HvyAlcoholConsump"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Physical Activity"
                    name="PhysActivity"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Eat Fruits Regularly"
                    name="Fruits"
                    options={yesNoOptions}
                />

                <SelectField
                    label="Eat Vegetables Regularly"
                    name="Veggies"
                    options={yesNoOptions}
                />

            </div>

        </div>

    );

}