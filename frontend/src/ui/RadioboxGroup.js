
import Radiobox from "./Radiobox";

const RadioboxGroup = ({ name, options, register }) => {
    return (
        <div>
            <h4>{name}</h4>
            {options.map((e, i) => (
                <Radiobox key={i} name={name} label={e} register={register} />
            ))}
        </div>
    );
};

export default RadioboxGroup;
