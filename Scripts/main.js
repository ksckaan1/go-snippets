
const goSnippets = require("./snippets/snippets.json");

class CompletionProvider {

	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in goSnippets) {
			let item = new CompletionItem(goSnippets[snippet].prefix, CompletionItemKind.Tag);
			console.log(goSnippets[snippet].description);
	
			item.documentation = goSnippets[snippet].description;
			item.insertText = goSnippets[snippet].body;
			item.insertTextFormat = InsertTextFormat.Snippet;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}


nova.assistants.registerCompletionAssistant("go", new CompletionProvider());
