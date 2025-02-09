#!/data/data/com.termux/files/usr/bin/bash
termux-toast "start downloading"
curl https://mylifeback.github.io/spck/shell/action.sh -o ~/bash
curl https://mylifeback.github.io/spck/shell/action.js -o ~/nodejs

#bash ~/bash
#node ~/nodejs

termux-toast "download finished"