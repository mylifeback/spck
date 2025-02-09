#!/data/data/com.termus/files/usr/bin/bash
pkg install dropbear -y

termux-setup-storage

passwd

vncconfig &
(or vncconfig -nowin)
vncpasswd

apt install coreutils nano nodejs
npm i -g --unsafe-perm node-red

export OLLAMA_ORIGINS=http://mylifeback.github.io,http://crawford1903.mynetgear.com