#!/data/data/com.termus/files/usr/bin/bash
pkg install dropbear -y

termux-setup-storage

passwd

vncconfig &
(or vncconfig -nowin)
vncpasswd

