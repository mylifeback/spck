#!/data/data/com.termus/files/usr/bin/bash
pkg update -y && pkg upgrade -y && pkg install htop openssh tmux proot-distro termux-tools termux-api termux-auth -y
pkg install x11-repo tigervnc xfce4-session xfce4-terminal fluxbox root-repo tur-repo -y

