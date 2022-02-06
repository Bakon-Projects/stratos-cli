import { Command, Flags } from "@xibakon/cli-core";
import { createSpinner } from "nanospinner";
import fetch from "node-fetch";
import AdmZip from "adm-zip";
import fs from "fs";
import chalk from "chalk";

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

export default class Main extends Command {
	static flags = {
		testing: Flags.boolean({
			name: "testing",
			char: "t",
			default: false,
		}),
	};

	async run() {
		const { flags } = await this.parse(Main);

		const spinner_download = createSpinner(
			chalk.green("Downloading file...")
		).start();

		const spinner_unzip = createSpinner(chalk.green("Unzipping file..."));

		const zip = fs.createWriteStream(
			`SmokinBs-Main${flags.testing ? "-testing" : ""}.zip`
		);
		await fetch(
			`https://api.smokinbsbbq.tk/v0/downloads?file=main&testing=${flags.testing}`,
			{
				headers: {
					authorization: "A'3m}Q6NIqULW6(a'6ZoYxv",
				},
			}
		).then((res) => {
			res.body?.pipe(zip);
			res.body?.on("end", () => {
				sleep();
				spinner_download.success({
					text: `Downloaded SmokinBs-Main to ${process.cwd()}/SmokinBs-Main${
						flags.testing ? "-testing" : ""
					}`,
				});

				spinner_unzip.start();

				const extract = new AdmZip(
					`${process.cwd()}/SmokinBs-Main${
						flags.testing ? "-testing" : ""
					}.zip`
				);
				extract.extractAllTo(
					process.cwd() +
						`/SmokinBs-Main${flags.testing ? "-testing" : ""}`,
					true
				);

				// Delete the zip file.
				fs.rm(
					`${process.cwd()}/SmokinBs-Main${
						flags.testing ? "-testing" : ""
					}.zip`,
					(err) => {
						if (err)
							return spinner_unzip.error({
								text: "Could not delete zip file.",
							});
						return spinner_unzip.success({
							text: "Unzipped File!",
						});
					}
				);
			});
			zip.on("error", (err) => {
				spinner_download.error({
					text: `There was an error downloading file... (${chalk.red(
						err
					)})`,
				});
			});
		});
	}
}
