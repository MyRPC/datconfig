import getPathSegments from './getPathSegments';

export default (obj, path, value) => {
    const root = obj;
    const pathArr = getPathSegments(path);

    for (let i = 0; i < pathArr.length; i++) {
        let p = pathArr[i];
        
        if (Object.prototype.toString.call(obj[p]) !== '[object Object]') obj[p] = {};
        if (i === pathArr.length - 1) obj[p] = value;
        obj = obj[p];
    }

    return root;
};