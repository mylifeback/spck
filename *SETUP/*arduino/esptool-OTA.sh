https://www.hilltop-cottage.info/blogs/adam/uploading-esp8266-or-esp32-firmware-ota-from-android/


https://blog.csdn.net/CNflysky/article/details/130009529
========================

OTA (successful)
- espOTA.py in Android (*successful in Pad Pro)
  python espota.py -d -i 192.168.43.148 -f WiFiExtender.ino.bin
  https://www.hilltop-cottage.info/blogs/adam/uploading-esp8266-or-esp32-firmware-ota-from-android/
  
  


========================

compile sketches (successful)
- Compile (arduino-cli in proot-debian in Termux *successful in Pad Pro)
- how::
  curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | BINDIR=~/arduino sh
  
  arduino-cli core install esp32:esp32
  
  arduino-cli board listall
  
  esp32:esp32:ttgo-lora32
  
  arduino-cli compile -b esp32:esp32:ttgo-lora32 ~/sketchFolder/ -v --build-path ~/compiledBinaryFolder/
  
  https://arduino.github.io/arduino-cli/1.1/sketch-build-process/
  
esptool upload via USB in Termux not successful even with USB/PORT/Socat because unable to reset the chip manually without pressing the boot button
- here is how (but still not successful)
  
  install APP UART in play store
  
  esptool.py --before no_reset --after no_reset --port socket://localhost:9999 chip_id
  
  esptool.py --before no_reset --after no_reset --port socket://localhost:9999 write_flash -e -fs detect -fm keep 0 build.ino.bin
  
  see link https://blog.csdn.net/CNflysky/article/details/130009529
  
  
Upload Serial (tcp UART / socat)

  you should be able to access ~/ttyesp32
  
  socat pty,link=$HOME/ttyesp32,raw tcp:127.0.0.1:6667
  
==============
install esptool in Termux
pkg install python-pip
pkg install python-cryptography
pip3 install setuptools
pip3 install esptool



  