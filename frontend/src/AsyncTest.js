import { useState } from 'react';
import { callLateApi } from './apis/MovieService'

const getApiResult = async (event) => {
    console.info('Before API call');
    try {
        console.info('Before AWAIT');
        const result = await callLateApi();
        console.info('After AWAIT');
        console.info('Result', JSON.stringify(result.data, null, 5));
        return result.data;
    } catch (error) {
        const { code, message, response: { data, status, statusText }, request: { responseURL } } = error;
        const err = {
            code, message, data, status, statusText, responseURL
        }
        console.info('Error', err);
    }
    console.info('After API call');
}

const AsyncTest = () => {

    const callAPI = async () => {
        console.info('Button clicked: ');
        const result = await getApiResult();
        console.info('Result: ', result);
    }
    

    const [value, setValue] = useState({ result: 'Pending...', status: 'COMPLETE' })
    console.log('');

    

    const callAPI_v1 = (event) => {
        setValue((prevState) => ({ result: '', status: 'WAIT' }));
        callLateApi()
            .then(result => {
                console.info('Inside then');
                console.info(result.data);
                setValue((prevState) => ({ ...result.data, status: 'WAIT' }));
            })
            .catch(error => {
                console.info(error.data);
                setValue((prevState) => ({ result: 'Error', status: 'ERROR' }));
                console.info('Inside error');
            })
            .finally(() => {
                setValue((prevState) => ({ ...prevState, status: 'COMPLETE' }));
                console.info('Inside Finally');
            });
        console.info('After Finally');
    }



    return <div>
        <h3>Async Test</h3>
        <div className={`alert ${value.result === 'Success' ? 'alert-primary' : 'alert-danger'}`} role="alert">
            {value.result}

            {
                value.status !== 'COMPLETE' && <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            }


        </div>
        <button onClick={callAPI} className="btn btn-outline-success">Call API</button>
    </div>
}

export default AsyncTest;