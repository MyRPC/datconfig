import { commentsRegex } from '../globals';

export default text => text.replace(commentsRegex, '');