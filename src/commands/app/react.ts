import { Command, Flags } from "@xibakon/cli-core";
import chalk from "chalk";
import { exec, spawn } from "child_process";
import { createSpinner } from "nanospinner";

export default class React extends Command {
	static flags = {
		name: Flags.string({
			name: "name",
			char: "n",
			required: true,
		}),
	};

	async run() {
		const { flags } = await this.parse(React);

		const create = createSpinner(chalk.blue("CREATING REACT APP")).start();
		const spawnedApp = spawn(`npx`, [
			"create-react-app",
			`${flags.name.toLowerCase()}`,
		]);

		spawnedApp.stdout.on("data", (data) => {
			this.log(`${data}`);
		});
		spawnedApp.stderr.on("data", (data) => {
			create.error({ text: chalk.red(data.toString()) });
		});
		spawnedApp.on("error", (err) => {
			create.error({ text: chalk.red(err) });
		});
	}
}
