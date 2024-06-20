import { marked } from 'marked';


export async function parseMarkdown(content: string) {
	return marked(content, { gfm: true, breaks: true });
}
