import dotProp from 'dot-prop';

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
        const value = this.regex.valueMatch.exec(line)[0];
        const path = text.match(keyMatch)[0].replace(/\:/, '.');
        return {
            path,
            value,
        };
    }

    parse() {
        const lines = this.data.split(/\n/);

        lines.forEach(line => {
            const parsedLine = this.parseLine(line);
            dotProp.set(this.output, parsedLine.path, parsedLine.value);
        });

        return this.output;
    }
}