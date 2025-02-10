#!/data/data/com.termux/files/usr/bin/bash
termux-toast "start downloading"
curl https://mylifeback.github.io/spck/shell/action.sh -o ~/.shortcuts/action/bash
curl https://mylifeback.github.io/spck/shell/action.js -o ~/.shortcuts/action/node
curl https://mylifeback.github.io/spck/shell/task.sh -o ~/.shortcuts/tasks/bash
curl https://mylifeback.github.io/spck/shell/task.js -o ~/.shortcuts/tasks/node

#bash ~/bash
#node ~/nodejs

termux-toast "download finished"