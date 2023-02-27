export class Logger {
	constructor(private readonly _name: string) {}

	log(message: string) {
		console.log(`[${this._name}] ${message}`);
	}

	error(message: string) {
		console.error(`[${this._name}] ${message}`);
	}

	warn(message: string) {
		console.warn(`[${this._name}] ${message}`);
	}

	info(message: string) {
		console.info(`[${this._name}] ${message}`);
	}
}
