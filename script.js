function knightMoves(startVertex, endVertex) {
	let queue = [{ position: startVertex, parentNode: null }];
	const visited = [];
	let result = null;
	while (queue.length != 0) {
		const node = queue.shift();
		queue = getPossibleVertices(node, queue);
		for (const element of queue) {
			if (visited.includes(JSON.stringify(element))) continue;
			if (element.position[0] === endVertex[0] && element.position[1] === endVertex[1]) {
				result = element;
				break;
			}
			visited.push(JSON.stringify(node.position));
			queue = getPossibleVertices(element, queue);
		}
		if (result != null) break;
	}
	return result;
}

function getPossibleVertices(node, queue) {
	const [row, col] = node.position;
	const rowDifference = [-1, -2, 1, 2];
	for (const element of rowDifference) {
		const vertexRow = element + row;
		if (vertexRow < 0 || vertexRow > 7) continue;
		let vertexCol1;
		let vertexCol2;
		if (element === -1 || element === 1) {
			vertexCol1 = col + 2;
			vertexCol2 = col - 2;
		} else {
			vertexCol1 = col + 1;
			vertexCol2 = col - 1;
		}

		if (vertexCol1 >= 0 && vertexCol1 <= 7) queue.push({ position: [vertexRow, vertexCol1], parentNode: node });
		if (vertexCol2 >= 0 && vertexCol2 <= 7) queue.push({ position: [vertexRow, vertexCol2], parentNode: node });
	}

	return queue;
}

// function createNode(position, parentNode = null) {
// 	return { position, parentNode };
// }
console.log(knightMoves([0, 0], [3, 3]));
