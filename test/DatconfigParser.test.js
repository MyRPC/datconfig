import DatconfigParser from '../src/';
import { expect } from 'chai';

const data = `rpcData:state [hello]
rpcData:deep:test [deep testing]
rpcData:num [130]
rpcData:bool1 [true]
rpcData:bool2 [false]`;

describe('DatconfigParser', () => {
    const parser = new DatconfigParser({
        allowComments: true,
    });
    
    let parsedData = null;

    describe('#parse()', () => {
        it ('parses data', () => {
            parsedData = parser.parse(data);
        });

        it('parses strings correctly', () => {
            expect(parsedData.rpcData.state).to.be.eq('hello');
        });

        it('parses numbers correctly', () => {
            expect(parsedData.rpcData.num).to.be.eq(130);
        });

        it('parses booleans correctly', () => {
            expect(parsedData.rpcData.bool1).to.be.eq(true);
            expect(parsedData.rpcData.bool2).to.be.eq(false);
        });

        it('parses deep data correctly', () => {
            expect(parsedData.rpcData.deep.test).to.be.eq('deep testing');
        });
    });
});