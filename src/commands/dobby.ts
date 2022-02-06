import { Command } from "@xibakon/cli-core";
import figlet from "figlet";
import gradient from "gradient-string";

export default class Dobby extends Command {
	async run() {
		figlet("DOBBY IS AWESOME", (err, data) => {
			if (err) this.error(err);

			this.log(gradient.pastel.multiline(data));
		});
	}
}
