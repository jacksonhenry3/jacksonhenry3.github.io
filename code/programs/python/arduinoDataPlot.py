import serial
import numpy as np
from matplotlib import pyplot as plt
import time
ser = serial.Serial('COM4',9600)
data = []
for i in range(100):
    print(i)  
    data.append(ser.readline().rstrip())
    print(data)
    time.sleep(.01)
ser.close()
x = np.arange(len(data))
plt.plot(x,data)
plt.show()

