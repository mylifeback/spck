#include "arduino_secrets.h"

                            #include <WiFiMulti.h>
                            #include <WiFi.h>
                            WiFiMulti wifiMulti; 


                            void setupWIFI(){

                                    // wifiMulti.addAP("SSID", "PASS");
                                    // wifiMulti.addAP("SSID1", "PASS1");
                                    WiFi.begin("red", "bbbbbbbb");
                                    Serial.println("Connecting Wifi...");
                                    // if (wifiMulti.run() == WL_CONNECTED) {
                                    //   Serial.println("");
                                    //   Serial.println("WiFi connected");
                                    //   Serial.println("IP address: ");
                                    //   Serial.println(WiFi.localIP());
                                    // }
                                      while (WiFi.status() != WL_CONNECTED) {
                                        delay(500);
                                        Serial.print(".");
                                      }

                                      Serial.println("");
                                      Serial.println("WiFi connected");
                                      Serial.println("IP address: ");
                                      Serial.println(WiFi.localIP());
                                      WiFi.setHostname("esp32.local");
                                }



                            void loopWIFI(){
                                    // if (wifiMulti.run() != WL_CONNECTED) {
                                    if (WiFi.status() != WL_CONNECTED) {
                                      static int fail = 1;
                                      show("WiFi not connected!", 2, 0, 10);
                                      delay(500);
                                      WiFi.begin("red", "bbbbbbbb");
                                      show(String(fail), 3, 10, 10);
                                      delay(500);
                                      fail ++;
                                      // if (wifiMulti.run() == WL_CONNECTED) {
                                      if (WiFi.status() == WL_CONNECTED) {
                                            Serial.println("");
                                            Serial.println("WiFi connected");
                                            Serial.println("IP address: ");
                                            Serial.println(WiFi.localIP());
                                          }
                                    }

                            }