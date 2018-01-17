import uuidv4 from 'uuid/v4';

let span = document.querySelector('#message');

export default class Update {
	// span.textContent = format(new Date(), 'h:mm:ssa');
	// setTimeout(update, 1000);
	static myStatVariable = "Random Id Generated: " + uuidv4();
	static printMessage() {
        span.textContent = Update.myStatVariable;
	}
}