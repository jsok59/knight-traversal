function knightMoves(startVertex, endVertex) {
	let queue = [];
	let vertices = getPossibleVertices(startVertex);
	queue = [...queue, ...vertices];
}

function getPossibleVertices(startVertex) {
	const result = [];
	const [row, col] = startVertex;
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

		if (vertexCol1 >= 0 && vertexCol1 <= 7) result.push([vertexRow, vertexCol1]);
		if (vertexCol2 >= 0 && vertexCol2 <= 7) result.push([vertexRow, vertexCol2]);
	}

	return result;
}

console.log(getPossibleVertices([7, 7]));
