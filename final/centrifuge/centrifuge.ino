// 1000 us = stop
// 2000 us = full
const int HIGH_PULSE = 2000;
const int LOW_PULSE = 1000;
int PULSE = LOW_PULSE;
const int PERIOD = 20000;

void setup() {
  Serial.begin(9600);
  pinMode(14, OUTPUT);
}

char r = 0;

void loop() {
  if (Serial.available() > 0) {
    r = Serial.read();

    if (r == '0') {
      PULSE = 1000;
      Serial.println("setting low");
    } else if (r == '1') {
      PULSE = 2000;
      Serial.println("setting high");
    } else if (r == '2') {
      PULSE = 1100;
      Serial.println("pulse = 1100/2000");
    } else if (r == '3') {
      PULSE = 1250;
      Serial.println("pulse = 1250/2000");
    } else if (r == '5') {
      PULSE = 1500;
      Serial.println("pulse = 1500/2000");
    }
  }
  
  digitalWrite(14, HIGH);
  delayMicroseconds(PULSE);
  digitalWrite(14, LOW);
  delayMicroseconds(PERIOD - PULSE);
}
