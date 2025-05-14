function knightMoves(startVertex, endVertex) {
	let queue = [{ position: startVertex, parentNode: null }];
	const visited = [];
	let result = null;
	while (queue.length != 0) {
		let element = queue[0]
		if (visited.includes(JSON.stringify(element.position))) {
			queue.shift();
			continue
		}
			
		if (element.position[0] === endVertex[0] && element.position[1] === endVertex[1]) {
			result = element;
			break;
		}
		visited.push(JSON.stringify(element.position));
		queue.shift();
		queue.push(...getPossibleVertices(element));
		
	}
	console.log(printResult(result))

}

function printResult(node, counter=0 ) {
	if(node.parentNode === null) {
		console.log(`You made it in ${counter} moves! Here's your path:`)
		console.log(node.position)
		return [node.position]
	}
	let array = printResult(node.parentNode, counter + 1)
	array.push(node.position)
	console.log(node.position)
	return array
}

function getPossibleVertices(node) {
	const [row, col] = node.position;
	const array = [];
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

		if (vertexCol1 >= 0 && vertexCol1 <= 7) array.push({ position: [vertexRow, vertexCol1], parentNode: node });
		if (vertexCol2 >= 0 && vertexCol2 <= 7) array.push({ position: [vertexRow, vertexCol2], parentNode: node });
	}

	return array;
}

// function createNode(position, parentNode = null) {
// 	return { position, parentNode };
// }
console.log(knightMoves([0, 0], [7, 7]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([0,0],[7,0]));
