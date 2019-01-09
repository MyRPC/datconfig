export const bodyMatch = /^([\w\d]+(?:\:[\w\d]+)+)/g;
export const valueMatch = /(?<=\[)(.+)(?=\])/g;
export const commentsRegex = /[ \t]*(?:\/\/.*\/\/|\/.*$)[ \t]*/gm;