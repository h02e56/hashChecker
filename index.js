var crypto = require('crypto');
var fs = require('fs')
var path = require('path')

var hashes = crypto.getHashes();


module.exports = function (opt, cb) {
	var algorithm = opt.algorithm
		, file = opt.file
		, hash = opt.hash;

	if(!algorithm) return cb('should provide algorithmm', null);
	if(!file) return cb('should provide file', null);
	if(!hash) return cb('should provide hash', null);

	if(fs.existsSync(path.join(__dirname, file))) return cb('-f must be a file', null);
	if(!hashes.some(isAlgorithm)) return cb('algorithm not available', null);

	var file = fs.readFileSync(file, 'binary');
	var shasum = crypto.createHash(algorithm)
		, computedHash = shasum.update(file).digest('hex');

	if(computedHash === hash) cb(null, true)
	else cb(null, false)
	
	function isAlgorithm(el) {
	  	return el === algorithm
	}	
}


