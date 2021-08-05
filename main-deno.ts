import { Generator } from '@jspm/generator';

async function main(){
    try {
        const generator = new Generator( {
            defaultProvider: 'jspm',
            env: ['deno'],
            cache: false,
          });
          
          // Install a new package into the import map
          await generator.install('react');
          const importmap =  JSON.stringify(generator.getMap(), null, 2);
          console.log(importmap);
          await Deno.writeTextFile("./deno.importmap", importmap);
      } catch (err) {
        // When a request is aborted - err is an AbortError
        console.error(err);
      }
}

if(import.meta.main){
    main();
}