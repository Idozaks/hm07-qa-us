// eslint-disable-next-line no-undef
const config = require('../config');
const id = 19;

const postKitRequestBody = {
    "name": "string",
    "cardId": 1
  }

const putKitRequestBody = {
        "name": "My modified kit",
        "productsList": [
            {
                "id": 1,
                "quantity": 1
            }
        ]
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
        const newKitBody = await postNewKit.json();
        const newId = await newKitBody.id; // ID of the newly created kit
       
        const response = await fetch(`${config.API_URL}/api/v1/kits/${newId}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(putKitRequestBody)
		});
        responseBody = await response.json();
        console.log(responseBody);
	} catch (error) {
		console.error(error);
	}
	expect(responseBody).toHaveProperty("ok",true);
});

/*test('Response body matches expected body', async () => {
    let responseBody;    
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${id}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        responseBody = await response.json();
        console.log(responseBody);
	} catch (error) {
		console.error(error);
	}
	expect(responseBody).toHaveProperty("ok",true);
});*/