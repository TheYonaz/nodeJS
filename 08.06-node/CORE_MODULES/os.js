const OS = require('os')
const OS_NAME = OS.platform()
const TYPE = OS.type()
const VER = OS.version()
const HOSTNAME =OS.hostname()
const ARC =OS.arch()
const TOTAL_MEMORY = (`${OS.totalmem() / 1073741824}GB`)
const FREE_MEMORY = (`${OS.freemem() / 1073741824}GB`)
console.table({Host_Name:HOSTNAME ,os: OS_NAME,version: VER,type :TYPE,architecture: ARC,});