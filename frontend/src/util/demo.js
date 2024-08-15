

console.error("Promise creation :: start");

const promise = new Promise((resolve, reject) => {
    // Create a custom error object with a 'status' property and additional data
    const customError = new Error("Resource not found");
    customError.status = 404;
    customError.additionalData = { key: 'value' };

    // Reject the Promise with the custom error object
    reject(customError);
});

console.error("Promise creation :: end");
console.error("Promise calling :: start");

const getResult = async () => {
    try {
        const result = await promise;
        return {
            data: 'Success'
        }
    } catch (err) {
        console.log(err.status);
        console.log(err.additionalData);
        return {
            error: 'Hey, No Food for you!',
            status: 404
        }
    }
}

const getRusult2 = async () => {
    try {
        const result = await getResult();
        console.log("Result ", result);
    } catch (err) {
        console.info('Utilizing: ', err);
    }
}
console.error("Promise calling :: end", getRusult2());
