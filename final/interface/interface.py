#!/usr/bin/env python

from tkinter import *
import serial
import argparse

WINDOW = 600 # window size
MAX_SPEED = 8000
MIN_SPEED = 0
SPEED = 0

# def idle(parent, ser):
#     ser.flush()
#     # loop
#     parent.after_idle(idle, parent, ser)

def main(port):
    ser = serial.Serial(port, 9600)
    ser.setDTR()

    root = Tk()
    root.title('Centrifuge (q to exit)')
    root.bind('q', 'exit')
    # speed_text = Text(root)
    # speed_text.insert(END, f"Speed: {SPEED}")
    # speed_text.pack()

    stop_btn = Button(root, text="Stop", command=lambda: set_speed(0), activeforeground="#f00", state="active")
    slow_btn = Button(root, text="Slow (800 rpm)", command=lambda: set_speed(2),activeforeground="#f00")
    medium_btn = Button(root, text="Medium (2000 rpm)", command=lambda: set_speed(3),activeforeground="#f00")
    fast_btn = Button(root, text="Fast (4000 rpm)", command=lambda: set_speed(5),activeforeground="#f00")

    def set_speed(speed):
        if speed == 0:
            SPEED = speed
            stop_btn["state"] = ACTIVE
            slow_btn["state"] = NORMAL
            medium_btn["state"] = NORMAL
            fast_btn["state"] = NORMAL

            ser.write(b"0\n")
        elif speed == 2:
            SPEED = speed
            stop_btn["state"] = NORMAL
            slow_btn["state"] = ACTIVE
            medium_btn["state"] = NORMAL
            fast_btn["state"] = NORMAL

            ser.write(b"2\n")
        elif speed == 3:
            SPEED = speed
            stop_btn["state"] = NORMAL
            slow_btn["state"] = NORMAL
            medium_btn["state"] = ACTIVE
            fast_btn["state"] = NORMAL

            ser.write(b"3\n")
        elif speed == 5:
            SPEED = speed
            stop_btn["state"] = NORMAL
            slow_btn["state"] = NORMAL
            medium_btn["state"] = NORMAL
            fast_btn["state"] = ACTIVE

            ser.write(b"5\n")

    stop_btn.pack()
    slow_btn.pack()
    medium_btn.pack()
    fast_btn.pack()

    # start idle loop
    # root.after(100, idle, root, ser)
    root.mainloop()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--port", default="/dev/cu.usbmodem1101")
    args = parser.parse_args()

    main(args.port)