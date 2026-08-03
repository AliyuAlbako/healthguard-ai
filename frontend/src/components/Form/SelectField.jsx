import { useFormContext } from "react-hook-form";

export default function SelectField({
  label,
  name,
  options,
}) {

  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-group">

      <label>{label}</label>

      <select
        {...register(name, {
          required: `${label} is required`,
        })}
      >
        <option value="">Select...</option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {errors[name] && (
        <small className="error">
          {errors[name].message}
        </small>
      )}

    </div>
  );
}