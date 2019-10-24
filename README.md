# PM2 Restart Behaviour Test

This is a proof of concept to show that stopping and starting a PM2 process
does not lead it to picking up upgraded interpreters.

I use `nvm` and these instructions assume you do too.

To run this:

`npm install`

`pm2 start`

`pm2 logs`

Note that the process is logging the version of the interpreter once a second.

`nvm use <some other version`

`pm2 stop <id>`

`pm2 start <id>`

Note that the process is still logging the old version

`pm2 delete <id>`

`pm2 start`

Note that the process is now logging the new version of Node.
