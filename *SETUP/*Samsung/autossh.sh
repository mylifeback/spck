

diable - turn off hotspot automatically 
developer opton - no screen lock
termux-wake-lock
DLNA Server App
setup FTP on File Manager+


autossh (persistent & without disconnection)
  https://unix.stackexchange.com/questions/688479/autossh-options-not-consistent-with-what-is-in-its-man-page
  port 9099 (node-red) port 9088 (ssh user|natasha)
  autossh -M 0 -N -o "ServerAliveInterval 300" -o "ServerAliveCountMax 999999" -o "ExitOnForwardFailure=yes" -f -T -p 9022 -R 9099:localhost:1880 pi@crawford1903.mynetgear.com
  autossh -M 0 -N -o "ServerAliveInterval 300" -o "ServerAliveCountMax 999999" -o "ExitOnForwardFailure=yes" -f -T -p 9022 -R 9088:localhost:8022 pi@crawford1903.mynetgear.com
  
  
  ==============
[socat]
  socat TCP-LISTEN:8080 stdout

[netcat]
  netcat -v -n 127.0.0.1 9999






===================
https://unix.stackexchange.com/questions/688479/autossh-options-not-consistent-with-what-is-in-its-man-page

================
