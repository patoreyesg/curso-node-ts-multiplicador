import { ServerApp } from "./presentation/server-app";
import { yarg } from './config/plugins/args.plugins';

(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;

  ServerApp.run({ base, limit, showTable, fileName, fileDestination });
}
