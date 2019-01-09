import sanitizeConfig from './utils/sanitizeConfig';
import { bodyMatch, valueMatch, commentsRegex } from './globals';

const setWith = require('lodash.setwith');

class DatconfigParser {
    /**
     * Create a new parser with given options
     * @param {object} options Parser options
     * @param {boolean} options.allowComments Whether or not to allow comments
     */
    constructor(options) {
        this.allowComments = !!options.allowComments;
    }
    
    /**
     * Parse a line of datconfig code
     * @param {string} line The line to parse
     * @returns {object} Data retrieved from the line
     * 
     * @private
     * @memberof DatconfigParser
     */
    parseLine(line) {
        line = line.trim();
        const value = line.match(valueMatch)[0];
        const path = line.match(bodyMatch)[0].replace(/\:/g, '.');
        if (!value) throw new SyntaxError('No value detected.');
        
        return {
            path,
            value,
        };
    }

    /**
     * Parse some data using the DatconfigParser's options
     * @param {string} data The datconfig code to parse
     * @returns {object} The parsed config
     * 
     * @memberof DatconfigParser
     * @public
     * 
     * @example
     * const options = {};
     * const data = `data:state [hello]
     * data:num [130]`
     * 
     * const parser = new DatconfigParser(options);
     * 
     * parser.parse(data)
     * // => {data: {state: 'hello', num: 130}}
     */
    parse(data) {
        if (!this.allowComments && commentsRegex.test(data)) throw new SyntaxError('If `options.allowComments` is set to false, you must not use comments!');
        data = sanitizeConfig(data, true);
        const output = {};
        
        const lines = data.split(/\n/);

        for (const line of lines) {
            let { path, value } = this.parseLine(line);

            if (value.trim() === 'true') value = true;
            else if (value.trim() === 'false') value = false;
            else if (!isNaN(value.trim())) value = Number(value.trim());
            else value = value;

            setWith(output, path, value, Object);
        }

        return output;
    }
}

export default DatconfigParser;
