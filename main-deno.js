import { Generator } from '@jspm/generator';

async function main(){
    try {
        const generator = new Generator( {
            defaultProvider: 'jspm',
            env: ['deno'],
            cache: false,
          });

          (async () => {
            for await (const { type, message } of generator.logStream()) {
              console.log(`${type}: ${message}`);
            }
          })();
          
          // Install a new package into the import map
          // await generator.install({ target: './packages', subpath: './deps.js' });
          await generator.install({ target: './packages', subpath: './app.jsx' });

          // await generator.traceInstall('./main.jsx');
          const importmap =  JSON.stringify(generator.getMap(), null, 2);
          console.log(importmap);
          // await Deno.writeTextFile("./deps.deno.importmap", importmap);
          await Deno.writeTextFile("./app.deno.importmap", importmap);
      } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
      }
}

if(import.meta.main){
    main();
}