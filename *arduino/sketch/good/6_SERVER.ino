// AdvancedWebServer.ino
// see examples in 
// WebServer.ino


                  #include <WiFi.h>
                  #include <NetworkClient.h>
                  #include <WebServer.h>
                  #include <ESPmDNS.h>
                  WebServer server(80);

                  void handleNotFound() {
                    // String message = "File Not Found\n\n";
                    server.send(404, "text/plain", NOTFOUND);
                  }
                  // void reply (WebServer &s, HTTPMethod method, const String &requestURI) {
                  void reply (){
                      server.send (200, "text/plain", server.uri()); 
                  }
                  void allRoute (){
                    for (int i=0; i < SIZE; i++){
                      server.on(route[i], reply);
                    }
                  }


                  void setupOTA (){
                    //////////////////
                              server.on("/", HTTP_GET, []() {
                                server.sendHeader("Connection", "close");
                                server.send(200, "text/html", serverIndex);
                              });

                               server.on(
                                "/update", HTTP_POST,
                                []() {
                                  server.sendHeader("Connection", "close");
                                  server.send(200, "text/plain", (Update.hasError()) ? "FAIL" : "OK");
                                  ESP.restart();
                                },
                                []() {
                                  HTTPUpload &upload = server.upload();
                                  if (upload.status == UPLOAD_FILE_START) {
                                    Serial.setDebugOutput(true);
                                    Serial.printf("Update: %s\n", upload.filename.c_str());
                                    if (!Update.begin()) {  //start with max available size
                                      Update.printError(Serial);
                                    }
                                  } else if (upload.status == UPLOAD_FILE_WRITE) {
                                    if (Update.write(upload.buf, upload.currentSize) != upload.currentSize) {
                                      Update.printError(Serial);
                                    }
                                  } else if (upload.status == UPLOAD_FILE_END) {
                                    if (Update.end(true)) {  //true to set the size to the current progress
                                      Serial.printf("Update Success: %u\nRebooting...\n", upload.totalSize);
                                    } else {
                                      Update.printError(Serial);
                                    }
                                    Serial.setDebugOutput(false);
                                  } else {
                                    Serial.printf("Update Failed Unexpectedly (likely broken connection): status=%d\n", upload.status);
                                  }
                                }
                              );


                    //////////////////
                  }


          void setupSERVER (){
                            server.onNotFound(handleNotFound);
                            server.begin();
                            allRoute();
                    
          }

          void loopSERVER(){

                     server.handleClient();     

          }