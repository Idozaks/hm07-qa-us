// eslint-disable-next-line no-undef
const config = require('../config');
const id = 6;
test('status code is 200', async () => {
	let actualStatus;

    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/${id}`, {
			method: 'DELETE'
		});
		actualStatus = response.status;
		console.log(await response.body)

	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200)
});
