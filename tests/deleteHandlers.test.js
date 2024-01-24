// eslint-disable-next-line no-undef
const config = require('../config');

const postKitRequestBody = {
    "name": "string",
    "cardId": 1
}

test('status code is 200', async () => {
    let newKitStatus;
    let actualStatus;
    try {
        // creating a new kit
		const postNewKit = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(postKitRequestBody)
		});
        newKitStatus = postNewKit.status;
        expect(newKitStatus).toBe(201);
        const newKitBody = await postNewKit.json();
        const newId = await newKitBody.id; // ID of the newly created kit
       
        const response = await fetch(`${config.API_URL}/api/v1/kits/${newId}`, {
			method: 'DELETE'
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200);
});

test('Response body is valid', async () => {
    let newKitStatus;
    try {
        // creating a new kit
		const postNewKit = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(postKitRequestBody)
		});
        newKitStatus = postNewKit.status;
        expect(newKitStatus).toBe(201);
        const newKitBody = await postNewKit.json();
        const newId = await newKitBody.id; // ID of the newly created kit
       
        const response = await fetch(`${config.API_URL}/api/v1/kits/${newId}`, {
			method: 'DELETE'
		});
        responseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(responseBody).toHaveProperty("ok",true);
});
