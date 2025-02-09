#!/data/data/com.termus/files/usr/bin/bash
echo "start"
curl https://mylifeback.github.io/spck/*termux/shell/a.sh -o ~/bash
curl https://mylifeback.github.io/spck/*termux/shell/a.js -o ~/javascript

bash ~/bash
node ~/javascript

echo "finished"