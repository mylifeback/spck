



[autossh] 
-f (running in background)
-N (not connect to ssh session)

autossh -M 0 -N -o "ServerAliveInterval 300" -o "ServerAliveCountMax 999999" -o "ExitOnForwardFailure=yes" -f -T -p 9022  -R 9099:localhost:1880 pi@crawford1903.mynetgear.com

(successful & persistent)
autossh -p 9022 -M 0 -N -R 9088:localhost:1880 pi@crawford1903.mynetgear.com

[netstat]
netstat -l | grep :9099
netstat -ano | grep :9099


[ssh-keygen]


[ssh-copy-id]
ssh-copy-id -p 9022 -i /data/data/com.termux/files/home/.ssh/id_ed25519 pi@crawford1903.mynetgear.com

