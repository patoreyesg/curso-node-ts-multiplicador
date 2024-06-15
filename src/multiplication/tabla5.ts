import fs from 'fs';


export function tabla5() {

    let content: string = "";
    let titulo: string = `
    ----------------------------------------------------------
    --------------------   TABLA DEL 5    --------------------
    ----------------------------------------------------------

    `;

    for (let i = 1; i <= 10; i++) {
        content += '\n' + '5x' + i + ' = ' + (5 * i);   
    }

    const salidaMensage:string = titulo + content;

    console.log(salidaMensage);

    const outputPath = 'outputs';

    fs.mkdirSync(outputPath, { recursive: true });

    fs.writeFileSync(`${outputPath}/tabla5.txt`, salidaMensage);

    console.log(`File created: ${outputPath}/tabla5.txt`);
}

