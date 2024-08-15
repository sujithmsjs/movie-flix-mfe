const FloatingInput = () => {
    return (
        <div className="form-floating mb-3">
            <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
        </div>
    );
};

export default FloatingInput;
