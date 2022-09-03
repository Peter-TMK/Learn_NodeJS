const os = require('os')

const currentOs = {
    user: os.userInfo(),
    sysRuntime: os.uptime(),
    name: os.type(),
    release: os.release(),
    totMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)