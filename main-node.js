import { Generator } from '@jspm/generator';
import { writeFile } from 'fs/promises';
import { Buffer } from 'buffer';

const generator = new Generator( {
  defaultProvider: 'jspm',
  env: ['deno'],
  cache: false,
});

// Install a new package into the import map
// await generator.install({ target: './packages', subpath: './deps.js' });
await generator.install({ target: './packages', subpath: './app.jsx' });

// // Install a package version and subpath into the import map (installs lit/decorators.js)
// await generator.install('lit@2/decorators.js');

// // Install a package version to a custom alias
// await generator.install({ alias: 'react16', target: 'react@16' });

// // Install a specific subpath of a package
// await generator.install({ target: 'lit@2', subpath: './html.js' });

// Install an export from a locally located package folder into the map
// The package.json is used to determine the exports and dependencies.
// await generator.install({ alias: 'mypkg', target: './packages/local-pkg', subpath: './feature' });
// await generator.install({ target: './packages/app', subpath: './app/app.js' });
//await generator.install('@fusionstrings/jspm-examples/app');
const importmap =  JSON.stringify(generator.getMap(), null, 2);
console.log(importmap);

try {
  const controller = new AbortController();
  const { signal } = controller;
//   await writeFile('deps.node.importmap', importmap, { signal });
  await writeFile('app.node.importmap', importmap, { signal });
} catch (err) {
  // When a request is aborted - err is an AbortError
  console.error(err);
}