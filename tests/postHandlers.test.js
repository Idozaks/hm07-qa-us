// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = 
	{
		"productsList": [
			{
				"id": 1,
				"quantity": 2
			},
			{
				"id": 6,
				"quantity": 2
			}
		]
	}

let actualStatus;

test('expected status 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/2/products`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
		console.log(response.body)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
	
});
