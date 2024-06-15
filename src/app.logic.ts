import fs from "fs";
import { yarg } from "./config/plugins/args.plugins";

const { b: base, s: show, l: limit } = yarg;

  let content: string = "";
  let titulo: string = `
    ----------------------------------------------------------
    --------------------   TABLA DEL ${base}    --------------------
    ----------------------------------------------------------

    `;

  for (let i = 1; i <= limit; i++) {
    content += "\n" + `${base}x` + i + " = " + base * i;
  }

  const salidaMensage: string = titulo + content;

  if (show) console.log(salidaMensage);

  const outputPath = "outputs";

  fs.mkdirSync(outputPath, { recursive: true });

  fs.writeFileSync(`${outputPath}/tabla${base}.txt`, salidaMensage);

  console.log(`File created: ${outputPath}/tabla${base}.txt`);

