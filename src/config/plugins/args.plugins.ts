import yargs, {options} from 'yargs';
import { hideBin } from 'yargs/helpers';

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de mutiplicar",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Es el limite de la tabla de mutiplicar",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla de mutiplicar",
  })
  .option("n", {
    alias: "name",
    type: "string",
    default: "multiplication-table",
    describe: "File name",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination",
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "Error: La base debe ser mayor a 0";

    return true;
  })
  .parseSync();

