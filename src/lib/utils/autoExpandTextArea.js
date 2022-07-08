// https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize

export default function autoExpandTextArea(node) {
	node.setAttribute('style', 'height:' + node.scrollHeight + 'px;overflow-y:hidden;');
	node.addEventListener(
		'input',
		() => {
			node.style.height = 'auto';
			node.style.height = node.scrollHeight + 'px';
		},
		false
	);
}
