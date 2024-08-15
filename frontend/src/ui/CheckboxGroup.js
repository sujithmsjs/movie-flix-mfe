import Checkbox from "./Checkbox";

const CheckboxGroup = ({ name, options, register }) => {
    return (
        <div>
            <h4>{name}</h4>
            {options.map((e, i) => (
                <Checkbox key={i} name={name} label={e} register={register} />
            ))}
        </div>
    );
};

export default CheckboxGroup;
