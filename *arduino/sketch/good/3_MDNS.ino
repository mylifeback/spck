                #include <WiFi.h>
                #include <ESPmDNS.h>

                //   void browseService(const char *service, const char *proto) 
                //   int n = MDNS.queryService(service, proto);


                void setupMDNS (){
                        if (!MDNS.begin("OTANAME")) {
                              Serial.println("Error setting up MDNS responder!");
                              while (1) {
                                delay(1000);
                              }
                            }
                        Serial.println("mDNS set OTANAME");
                        MDNS.addService("http", "tcp", 80);
                      // Add service to MDNS-SD
                      // MDNS.addService("http", "tcp", 80);
                      // MDNS.queryService;
                }