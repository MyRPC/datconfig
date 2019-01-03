import DatconfigParser from '../src/';
import { expect } from 'chai';

const data = `rpcData:state [hello]
rpcData:deep:test [deep testing]
rpcData:num [ 130]
rpcData:bool1 [true ]
rpcData:bool2 [ false]`;

describe('DatconfigParser', () => {
    const parser = new DatconfigParser(data);
    let parsedData = null;

    describe('#parse()', () => {
        it ('parses data', () => {
            parsedData = parser.parse();
        });

        it('parses strings correctly', () => {
            expect(parsedData.state).to.be.eq('hello');
        });

        it('parses numbers correctly', () => {
            expect(parsedData.num).to.be.eq(130);
        });

        it('parses booleans correctly', () => {
            expect(parsedData.bool1).to.be.eq(true);
            expect(parsedData.bool1).to.be.eq(false);
        });

        it('parses deep data correctly', () => {
            expect(parsedData.deep.test).to.be.eq('deep testing');
        });
    });
});