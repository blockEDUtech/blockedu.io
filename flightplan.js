// BLOCKEDU SERVER:
// ssh ubuntu@13.58.195.229
var plan = require('flightplan');
var appName = 'blockEDU';
var host = '13.58.195.229';
var username = 'ubuntu';
var startFile = 'server.js';
var webRoot = '/home/ubuntu/github/blockedu.io';

plan.target('prod', {
	host: host,
  username: username,
  agent: process.env.SSH_AUTH_SOCK,
	webRoot: webRoot,
  ownerUser: 'root',
  repository: 'https://github.com/blockEDUtech/blockedu.io.gitt',
  branchName: 'master',
  maxDeploys: 10
});

plan.local('deploy', function(local) {
	local.hostname();
	local.exec('git push origin master')
});

plan.remote('deploy', function(remote) {
	remote.hostname();
	remote.with('cd ' + webRoot, function() {
		remote.exec('git pull origin master');
		remote.exec('npm install');
		remote.exec('pm2 start server.js');
	});
});

plan.remote('check', function(remote) {
  remote.exec('pm2 list');
});
