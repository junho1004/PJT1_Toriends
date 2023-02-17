#include <SoftwareSerial.h>

SoftwareSerial hc06(3, 4); // Tx, Rx;
int btn = 8;               // Button pin
int last_btn_state;        // 마지막 버튼 상태 
int current_btn_state;     // 현재 버튼 상태 
// int state = 0;             // 전송될 상태
// int led = 10;              // LED pin

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  hc06.begin(9600);
  pinMode(btn, INPUT_PULLUP); // 버튼 OutPut 사용
//  pinMode(led, OUTPUT);       // LED OutPut 사용

  current_btn_state = digitalRead(btn); // 처음 버튼 값 >> 최근 버튼 상태 
}

void loop() {
  // put your main code here, to run repeatedly:
  last_btn_state = current_btn_state;   // 마지막 버튼 상태 갱신
  current_btn_state = digitalRead(btn); // 버튼 값 읽어서 최근 버튼 상태에 삽입

  // char* result = (char*)state;

  if(last_btn_state == HIGH && current_btn_state == LOW){   // 토글 조건
    // Serial.println("The button is pressed");  // Serial 모니터에 출력
    // digitalWrite(led, HIGH);  // LED 점등
    // state = !state;   // 토글
    // Serial.println(state);    // temp
    // hc06.write(1);          // 버튼 상태 출력 (Jetson nano)
    Serial.println(1);      // 버튼 상태 출력 (시리얼 모니터)
    delay(1000); // delay  
  } 

//  digitalWrite(led, LOW);  // LED 소등

  if(hc06.available()){
    Serial.write(hc06.read());
  }
 
  if(Serial.available()){
    hc06.write(Serial.read());  // 시리얼 모니터에 출력
    // hc06.write(result);          // 버튼 상태 출력 (Jetson nano)
  }
}
