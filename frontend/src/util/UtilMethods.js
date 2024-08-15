

export const printError = (error) => {
    const { code, message, response: { data = '', status, statusText }, request: { responseURL } } = error;
    const err = {
        code, message, data, status, statusText, responseURL
    }
    console.info(err);
}

