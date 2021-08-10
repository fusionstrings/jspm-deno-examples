import MarkdownIt from 'https://esm.sh/markdown-it';

async function renderMarkDown(markdown){
    const md = new MarkdownIt();
    return md.render(markdown);
}
export {renderMarkDown}
/* import {parseMarkdown} from "https://deno.land/x/markdown_wasm/mod.ts"

console.log(parseMarkdown("# hello\n*世界*")) */