import { useFormContext } from "react-hook-form";

export default function NumberField({
  label,
  name,
  min = 0,
  max,
  step = 1,
  placeholder = ""
}) {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-group">

      <label>{label}</label>

      <input
        type="number"
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        {...register(name, {
          required: `${label} is required`,
          valueAsNumber: true
        })}
      />

      {errors[name] && (
        <small className="error">
          {errors[name].message}
        </small>
      )}

    </div>
  );
}