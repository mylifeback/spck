//////////////////////  SETUP  ////////////////////
///////////////////////////////////////////////////

  void setup () {

    //////////////////////  setup - standard  ///////////////////
    ///////////////////////////////////////////////////
              Serial.begin(115200);
              Serial.println("Booting");
              // WiFi.mode(WIFI_STA);
              // WiFi.begin(ssid, password);
              // while (WiFi.waitForConnectResult() != WL_CONNECTED) {
              //   Serial.println("Connection Failed! Rebooting...");
              //   delay(5000);
              //   ESP.restart();
              // }


    /////////////// setup - time 
    ////////////////////////////

    //////////////////////  setup - wifiMulti  ////////////////
    ///////////////////////////////////////////////////
            // wifiMulti.addAP("aaa", "bbbbbbbb");
            setupWIFI();
    //////////////////////  setup - AP  ///////////////////////
    ///////////////////////////////////////////////////
            setupAP();
    //////////////////////  setup - mDNS  /////////////////////
    ///////////////////////////////////////////////////
            setupMDNS();
    //////////////////////  setup - OLED  /////////////////////
    ///////////////////////////////////////////////////  
            setupOLED();
    //////////////////////  setup - OTA  //////////////////////
    ///////////////////////////////////////////////////
            setupOTA();
    //////////////////////  setup - client  ///////////////////
    ///////////////////////////////////////////////////

    //////////////////////  setup - server  ///////////////////
    ///////////////////////////////////////////////////
            setupSERVER();
    //////////////////////  setup JSON  /////////////////////
    ///////////////////////////////////////////////////


    }

