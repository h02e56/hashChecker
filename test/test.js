var test = require('tape');
var hashChecker = require('../index.js');
var path = require('path');

var fs = require('fs');

test('hash matches', function(t){
	t.plan(1)
	hashChecker({
		file: path.join(__dirname, 'test.psd'),
		algorithm: 'sha256',
		hash: '4B211CD22CFB8D1D3C0BC326F6A5A1713047B78116BEAA20FC7EF7CFCDB5D9E1'.toLowerCase()
	}, function(err, res){
		t.equal(res, true)
	})
})
