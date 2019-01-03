import setProp from './utils/setProp';

import sanitizeConfig from './utils/sanitizeConfig';
import { bodyMatch, valueMatch } from './globals';

class DatconfigParser {
    constructor(configStr) {
        this.data = sanitizeConfig(configStr);

        this.regex = {
            bodyMatch,
            valueMatch,
        };

        this.output = {};
    }

    parseLine(line) {
        line = line.trim().replace(/\n/, '');
        const value = this.regex.valueMatch.exec(line)[0];
        const path = text.match(keyMatch)[0].replace(/\:/, '.');
        return {
            path,
            value,
        };
    }

    /**
     * Parse the DatconfigParser's data
     * 
     * @public
     * 
     * @example
     * const data = `data:state [hello]
     * data:num [130]`
     * const parser = new DatconfigParser()
     */
    parse() {
        const lines = this.data.split(/\n/);

        lines.forEach(line => {
            let { path, value } = this.parseLine(line);

            if (value.trim() === 'true') value = true;
            else if (value.trim() === 'false') value = false;
            else if (!isNaN(value.trim())) value = Number(value.trim());
            else value = value;

            setProp(this.output, path, value);
        });

        return this.output;
    }
}

export default DatconfigParser;
