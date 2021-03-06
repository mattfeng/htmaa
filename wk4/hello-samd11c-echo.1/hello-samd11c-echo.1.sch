EESchema Schematic File Version 4
EELAYER 30 0
EELAYER END
$Descr A4 11693 8268
encoding utf-8
Sheet 1 1
Title ""
Date ""
Rev ""
Comp ""
Comment1 ""
Comment2 ""
Comment3 ""
Comment4 ""
$EndDescr
$Comp
L fab:Microcontroller_ATSAMD11C14A-SSUT U?
U 1 1 615F9379
P 5700 3850
F 0 "U?" H 5700 4731 50  0000 C CNN
F 1 "Microcontroller_ATSAMD11C14A-SSUT" H 5700 4640 50  0000 C CNN
F 2 "fab:SOIC-14_3.9x8.7mm_P1.27mm" H 5700 2800 50  0001 C CNN
F 3 "https://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-42363-SAM-D11_Datasheet.pdf" H 5700 3150 50  0001 C CNN
	1    5700 3850
	1    0    0    -1  
$EndComp
$Comp
L fab:C C?
U 1 1 615FA402
P 6950 3550
F 0 "C?" H 7065 3596 50  0000 L CNN
F 1 "1uF" H 7065 3505 50  0000 L CNN
F 2 "fab:C_1206" H 6988 3400 50  0001 C CNN
F 3 "" H 6950 3550 50  0001 C CNN
	1    6950 3550
	1    0    0    -1  
$EndComp
$Comp
L fab:Regulator_Linear_LM3480-3.3V-100mA IC2
U 1 1 615FB2CA
P 7950 3500
F 0 "IC2" H 7950 3742 50  0000 C CNN
F 1 "Regulator_Linear_LM3480-3.3V-100mA" H 7950 3651 50  0000 C CNN
F 2 "fab:SOT-23" H 7950 3725 50  0001 C CIN
F 3 "https://www.ti.com/lit/ds/symlink/lm3480.pdf" H 7950 3500 50  0001 C CNN
	1    7950 3500
	1    0    0    -1  
$EndComp
$Comp
L power:GND #PWR?
U 1 1 615FC67D
P 6500 5150
F 0 "#PWR?" H 6500 4900 50  0001 C CNN
F 1 "GND" H 6505 4977 50  0000 C CNN
F 2 "" H 6500 5150 50  0001 C CNN
F 3 "" H 6500 5150 50  0001 C CNN
	1    6500 5150
	1    0    0    -1  
$EndComp
$Comp
L fab:Conn_PinHeader_2x02_P2.54mm_Vertical_SMD J1
U 1 1 615FE08B
P 7200 4850
F 0 "J1" H 7250 5067 50  0000 C CNN
F 1 "programming header" H 7250 4976 50  0000 C CNN
F 2 "fab:PinHeader_2x02_P2.54mm_Vertical_SMD" H 7200 4850 50  0001 C CNN
F 3 "https://cdn.amphenol-icc.com/media/wysiwyg/files/drawing/95278.pdf" H 7200 4850 50  0001 C CNN
	1    7200 4850
	1    0    0    -1  
$EndComp
Wire Wire Line
	7950 3800 7950 5150
Wire Wire Line
	7950 5150 6500 5150
Wire Wire Line
	7000 4850 4650 4850
Wire Wire Line
	4650 4850 4650 3750
Wire Wire Line
	4650 3750 5200 3750
Wire Wire Line
	7000 4950 4550 4950
Wire Wire Line
	4550 4950 4550 3550
Wire Wire Line
	4550 3550 5200 3550
$EndSCHEMATC
