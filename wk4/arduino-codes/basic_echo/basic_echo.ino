#define MAX_BUFFER 25

static int idx = 0;
static char chr;
static char buffer[MAX_BUFFER] = {0};

void setup() {
  Serial.begin(115200);
}

void loop() {
  if (Serial.available() > 0) {
    chr = Serial.read();
    Serial.print("samd11c.echo: you typed \"");
    buffer[idx++] = chr;
    if (idx == (MAX_BUFFER - 1)) {
      idx = 0;
    }

    Serial.print(buffer);
    Serial.println("\"");
  }
}
