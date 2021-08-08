import {renderMarkDown} from "./packages/render/markdown.js";

async function getContent(fileURL: string | null){
  try {
    if(fileURL){
      const response = await fetch(fileURL);
      return response.text();
    }
    return '';
  } catch (error) {
    console.error(error);
    return '';
  }
}

async function handleRequest(request: Request) {
    const url = new URL(request.url);
    const markdownFileURL = url.searchParams.get('md');
    const cssFileURL = url.searchParams.get('css');
    const importmapFileURL = url.searchParams.get('importmap');
    const jsFileURL = url.searchParams.get('js');
    
    const markdown = await getContent(markdownFileURL);
    const content = await renderMarkDown(markdown);
    
    const cssLink = cssFileURL ? `<link rel="stylesheet" href=${cssFileURL} />` : '';
    
    const scriptLink = jsFileURL ? `<script type="module" src=${jsFileURL}></script>` : '';

    const importmap = await getContent(importmapFileURL);
    const importmapTag = importmap ? `<script type="importmap">${importmap}</script>` : '';
    return new Response(
      `<html>
        <head>
          ${cssLink}
          ${importmapTag}
        </head>
        <body>
          ${content}
          ${scriptLink}
        </body>
      </html>`,
      {
        headers: {
          "content-type": "text/html; charset=utf-8",
        },
      },
    );
  }
  
  addEventListener("fetch", (event: FetchEvent) => {
    event.respondWith(handleRequest(event.request));
  });