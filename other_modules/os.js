const os = require('os');


console.log(os.hostname(), '==== hostname')
console.log(os.version(), 'version')
console.log(os.arch(), 'arch');
console.log(os.freemem(), 'freemem')
console.log(os.totalmem(), 'totalMem')
console.log(os.cpus(), 'cpus')
console.log(os.cpus().length, 'cpu length')
console.log(os.type(), 'type')
console.log(os.tmpdir(), 'tmpDir')
console.log(os.platform(), 'platform');
console.log(os.userInfo(), 'userInfo')