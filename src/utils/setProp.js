import getPathSegments from './getPathSegments';

export default (obj, path, value) => {
    const root = obj;
    const pathArr = getPathSegments(path);

    for (let p of pathArr) {
        if (Object.prototype.toString.call(obj[p]) !== '[object Object]') obj[p] = {};
        if (i === pathArr.length - 1) obj[p] = value;
        obj = obj[p];
    }

    return root;
}