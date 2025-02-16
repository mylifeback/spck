/////////////////////// WIFI ////////////////////////////////////
      #include <NTPClient.h>
      #include <WiFi.h> // for WiFi shield
      #include <WiFiUdp.h>
      #include <NetworkClient.h>
      #include <WebServer.h>
      #include <ESPmDNS.h>
      #include <HTTPClient.h>
      #include <NetworkClientSecure.h>
      // const char *ssid = "red";
      const char *ssid = "aaa";
      const char *password = "bbbbbbbb";
//////////////////////// OLED ///////////////////////////////
      #include <SPI.h>
      #include <Wire.h>
      #include <Adafruit_GFX.h>
      #include <Adafruit_SSD1306.h>
      #define SCREEN_WIDTH 128 // OLED display width, in pixels
      #define SCREEN_HEIGHT 64 // OLED display height, in pixels
      #define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)
      #define SCREEN_ADDRESS 0x3C ///0x3C for 128x64
      Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);
  void Write(String message) {
    display.clearDisplay();
    display.setCursor(0,0);             // Start at top-left corner
    display.setTextColor(SSD1306_BLACK, SSD1306_WHITE); // Draw 'inverse' text
    display.setTextSize(2);            
    display.setTextColor(SSD1306_WHITE);
    display.println(message);
    display.display();
    }
  void testscrolltext(void) {
    display.clearDisplay();
    display.setTextSize(2); // Draw 2X-scale text
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(10, 0);
    display.println(F("scroll"));
    display.display();      // Show initial text
    delay(100);
    // Scroll in various directions, pausing in-between:
    display.startscrollright(0x00, 0x0F);
    delay(2000);
    display.stopscroll();
    delay(1000);
    display.startscrollleft(0x00, 0x0F);
    delay(2000);
    display.stopscroll();
    delay(1000);
    display.startscrolldiagright(0x00, 0x07);
    delay(2000);
    display.startscrolldiagleft(0x00, 0x07);
    delay(2000);
    display.stopscroll();
    delay(1000);
    }
//////////////////////// TIME ///////////////////////////////
        WiFiUDP ntpUDP;
        NTPClient timeClient(ntpUDP);
///////////////////////// Server /////////////////////////////
        const int led = 13;
        WebServer server(80);
    void handleRoot() {
      digitalWrite(led, 1);
      server.send(200, "text/plain", "hello from esp32!");
      digitalWrite(led, 0);
     }
    void handleNotFound() {
      digitalWrite(led, 1);
      String message = "File Not Found\n\n";
      message += "URI: ";
      message += server.uri();
      message += "\nMethod: ";
      message += (server.method() == HTTP_GET) ? "GET" : "POST";
      message += "\nArguments: ";
      message += server.args();
      message += "\n";
      for (uint8_t i = 0; i < server.args(); i++) {
        message += " " + server.argName(i) + ": " + server.arg(i) + "\n";
      }
      server.send(404, "text/plain", message);
      digitalWrite(led, 0);
      }
///////////////////// client  /////////////////////
  String serverName = "https://192.168.43.1:1880/a";

  String httpsGETRequest (String serverName){
          NetworkClientSecure *client = new NetworkClientSecure;
          if (client) {
                    client->setInsecure();
                    HTTPClient https; 
                    https.begin(*client, serverName);
                    int httpsResponseCode = https.GET();
                    String payload = "{}";
                      if (httpsResponseCode > 0) {
                        Serial.print("HTTPS Response code: ");
                        Serial.println(httpsResponseCode);
                        payload = https.getString();
                        Write(payload);
                      }
                      else {
                        Serial.print("Error code: ");
                        Serial.println(httpsResponseCode);
                      }
                    https.end();  // free resources
                    delete client;
                    return payload;
            }
                  else {
                    Serial.println("Unable to create client");
            }
            }
    
  
///////////////////// SETUP ///////////////////////
  void setup(){
  ////////////////  setup Serial  /////////////////////////////
    Serial.begin(9600);
    // Serial.begin(115200);
    delay (1000);
  ////////////////  setup WIFI  //////////////////////////////
    pinMode(led, OUTPUT);
    digitalWrite(led, 0);
    WiFi.mode(WIFI_STA);
    WiFi.begin(ssid, password);
    Serial.print("Connecting");
    Serial.print("");
    // Wait for connection
    while (WiFi.status() != WL_CONNECTED) {
      delay(500);
      Serial.print(".");
    }
    Serial.println("");
    Serial.print("Connected to ");
    Serial.println(ssid);
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
    String m = String(WiFi.localIP());
    Serial.println(m);

  // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
    if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
      Serial.println(F("SSD1306 allocation failed"));
      for(;;); // Don't proceed, loop forever
    }
    display.clearDisplay();
    Write(m); 
    display.display();
    delay(300); // Pause for 2 seconds

  ////////////////  setup mDNS  /////////////////////////////////
    if (MDNS.begin("esp32")) {
      Serial.println("MDNS responder started");
      Serial.println("my hostname is 'esp32.local'");
    }
  ////////////////  setup Time  /////////////////////////////////
    timeClient.begin();
  ////////////////  setup Server  /////////////////////////////////
    server.on("/", handleRoot);
    server.on("/inline", []() {
      server.send(200, "text/plain", "this works as well");
    });
    server.onNotFound(handleNotFound);
    server.begin();
    Serial.println("HTTP server started");

  }

///////////////////  LOOP  ////////////////////////////////////
  void loop() {
  /////////////////////////  webserver //////////////////////////////////////
      server.handleClient();
      delay(2); 
  //////////////////////// ntp time ///////////////////////////////////////
      timeClient.update();
      Serial.println(timeClient.getFormattedTime());
      String n = String(timeClient.getFormattedTime());
      Write(n);
      delay(1000);
  /////////////////////// https request ////////////////////////////////////////
    // httpsGETRequest (serverName);
    Serial.println(httpsGETRequest (serverName));
    delay (500);
  }
