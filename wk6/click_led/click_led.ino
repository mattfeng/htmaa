const int LED_PIN = 5;
const int BUTTON_PIN = 8;

int button_read = 0;

void setup() {
  Serial.begin(1152000);

  // setup pin modes
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON_PIN, INPUT);
}

void loop() {
  button_read = 1 - digitalRead(BUTTON_PIN);
  Serial.println(button_read);

  digitalWrite(LED_PIN, button_read);
}
