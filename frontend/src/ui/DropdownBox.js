const DropdwonBox = ({ name, options = [], register }) => {
    
    return (
        <>
            <label htmlFor={name} className="form-label">
                {name}
            </label>
            <select className="form-select" id={name} {...register(name)}>
                {options.map((e, i) => (
                    <option key={i}>{e}</option>
                ))}
            </select>
        </>
    );
};

export default DropdwonBox;
