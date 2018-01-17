import uuid from 'uuid/v4';

let span = document.querySelector('#message');

export default class Update {
	static printMessage() {
        span.textContent = "Random Id Generated: " + uuid();
	}
}