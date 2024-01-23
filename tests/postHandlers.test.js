// eslint-disable-next-line no-undef
const config = require('../config');
const id = 2;
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
		const response = await fetch(`${config.API_URL}/api/v1/kits/${id}/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
		const responseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
	
});
test("Response body matches expected body", async() => {
	let responseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${id}/products`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		responseBody = await response.json();
	} catch {
		console.error(error);
	}

    //Check top-level structure
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('name');
    expect(responseBody).toHaveProperty('productsList');
    expect(responseBody).toHaveProperty('productsCount');

	// Check structure of each product in productsList
    responseBody.productsList.forEach(product => {
        expect(product).toHaveProperty('id');
        expect(product).toHaveProperty('name');
        expect(product).toHaveProperty('price');
        expect(product).toHaveProperty('weight');
        expect(product).toHaveProperty('units');
        expect(product).toHaveProperty('quantity');
    });
});