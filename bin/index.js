#!/usr/bin/env node
var crypto = require('crypto');
var fs = require('fs')
var path = require('path')

var hashes = crypto.getHashes();

var parseArgs = require('minimist')
var argv = parseArgs(process.argv.slice(2), options ={
	string:true
});

if (argv.f) var file = argv.f

var hash = argv.h
	, algorithm = argv.a

if(!algorithm) return console.log('should provide algorithmm');
if(!file) return console.log('should provide file');
if(!hash) return console.log('should provide hash');

if(fs.existsSync(path.join(__dirname, file))) return console.log('-f must be a file');
if(!hashes.some(isAlgorithm)) return console.log('algorithm not available');

var file = fs.readFileSync(file, 'binary');
var shasum = crypto.createHash(algorithm)
	, computedHash = shasum.update(file).digest('hex');

if(computedHash === hash) console.log(arg.f, 'hash match ', computedHash)
else console.log(argv.f, 'hashes NOT match ', '\ncomputed;', computedHash, '\nsupplied:', hash)

function isAlgorithm(el) {
  	return el === algorithm
}


