import SelectField from "../Form/SelectField";

import {
  ageOptions,
  genderOptions,
  educationOptions,
  incomeOptions,
} from "../../config/options";

export default function PersonalInfo() {

  return (

    <div className="form-section">

      <h3>👤 Personal Information</h3>

      <div className="form-grid">

        <SelectField
          label="Age Group"
          name="Age"
          options={ageOptions}
        />

        <SelectField
          label="Gender"
          name="Sex"
          options={genderOptions}
        />

        <SelectField
          label="Education"
          name="Education"
          options={educationOptions}
        />

        <SelectField
          label="Income"
          name="Income"
          options={incomeOptions}
        />

      </div>

    </div>

  );

}