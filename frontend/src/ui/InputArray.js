import { useFieldArray } from "react-hook-form";

const InputArray = ({ control, register, errors }) => {
    const { fields, append, remove } = useFieldArray({
        name: "skills",
        control
    });

    const hasError = (i) => {
        //console.log(errors);
        return !!errors[`skills`]?.[i];
    };

    return (
        <div className="pt-3">
            <label className="form-label">Skills</label>
            {fields?.map((sk, i) => {
                return (
                    <div className="input-group mb-1" key={sk.id}>
                        {" "}
                        {/* Use className here */}
                        <input
                            type="text"
                            className={`form-control ${hasError(i) && "is-invalid"} `}
                            {...register(`skills.${i}`, {
                                required: "Skill should not be empty"
                            })}
                        />
                        <button
                            className="btn btn-outline-danger"
                            onClick={() => remove(i)}
                        >
                            X
                        </button>
                        {hasError(i) && (
                            <div className="invalid-feedback">
                                {errors[`skills`]?.[i]?.message}
                            </div>
                        )}
                    </div>
                );
            })}
            <div>
                <button
                    type="button"
                    onClick={() => append("")}
                    className="btn btn-success btn-sm"
                >
                    Add Skill
                </button>
            </div>
        </div>
    );
};

export default InputArray;
