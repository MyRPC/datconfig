export default path => {
	const pathArr = path.split('.');
	const parts = [];

	for (let p of pathArray) {
		while (p[p.length - 1] === '\\' && pathArr[i + 1] !== undefined) {
			p = p.slice(0, -1) + '.';
			p += pathArr[++i];
		}

		parts.push(p);
	}

	return parts;
}