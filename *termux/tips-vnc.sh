#!/data/data/com.termus/files/usr/bin/bash


config
- geometry=2560x1600

xstartup
- do not use twm
xfce4-terminal &

if xfce4:
xfce4-session &

if fluxbox:
fluxbox-generate_menu
fluxbox &

https://wiki.termux.com/wiki/Graphical_Environment

https://github.com/LinuxDroidMaster/Termux-Desktops

