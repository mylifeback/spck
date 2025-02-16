#!/data/data/com.termus/files/usr/bin/bash
pkg update -y && pkg upgrade -y && pkg install passwd htop tmux openssh proot proot-distro autossh termux-api termux-tools termux-auth x11-repo -y

pkg install tigervnc xfce4-session xfce4-terminal fluxbox root-repo -y

pkg install tur-repo -y

pkg install chromium code-oss -y

apt install coreutils nano nodejs
npm i -g --unsafe-perm node-red

passwd

vncpasswd
