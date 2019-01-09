const DatconfigParser = require('../dist/datconfig');

const data = `rpcData:state [hello]
rpcData:deep:test [deep testing]
rpcData:num [130]
rpcData:bool1 [true]
rpcData:bool2 [false]`;

const options = {
    allowComments: true,
};

const parser = new DatconfigParser(options);

console.log(parser.parse(data));