function parse_trie(string) {
	var trie = {};
	var q = new Queue();
	q.enqueue(trie);
	elements = string.split(';');
	for (element of elements) {
		subtrie = q.dequeue();
		for (letter of element) {
			if (letter != '.') {
				subtrie[letter] = {}
				q.enqueue(subtrie[letter]);
			} else {
				subtrie['eow'] = true;
			}
		}
	}
	return trie;
}

TRIE = parse_trie(TRIE_STRING);
