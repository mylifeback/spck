         //**** must correct address to 0x3C
          #include <SPI.h>
          #include <Wire.h>
          #include <Adafruit_GFX.h>
          #include <Adafruit_SSD1306.h>
          #define SCREEN_WIDTH 128 // OLED display width, in pixels
          #define SCREEN_HEIGHT 64 // OLED display height, in pixels
          #define OLED_RESET     -1 // Reset pin # (or -1 if sharing Arduino reset pin)
          // #define SCREEN_ADDRESS 0x3D ///< See datasheet for Address; 0x3D for 128x64, 0x3C for 128x32
          #define SCREEN_ADDRESS 0x3C ///datasheet is wrong: now address corrected to 0x3C
          Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

                void show(String message, int size, int x, int y) {
                  display.clearDisplay();
                  display.setCursor(x, y);             // Start at top-left corner
                  display.setTextColor(SSD1306_BLACK, SSD1306_WHITE); // Draw 'inverse' text
                  display.setTextSize(size);            
                  display.setTextColor(SSD1306_WHITE);
                  display.println(message);
                  display.display();
                  }

                void setupOLED (){
                          // SSD1306_SWITCHCAPVCC = generate display voltage from 3.3V internally
                          if(!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
                            Serial.println(F("SSD1306 allocation failed"));
                            for(;;); // Don't proceed, loop forever
                          }
                          display.clearDisplay();
                          show (BADGE, 3, 10, 10);
                          delay (1000);
                      }
                void loopOLED (){                
                          static int count = START;
                          show (String(count), 2, 30, 10);
                          count ++;
                }