# -*- coding: utf-8 -*-
#import required libraries
from numpy import sin,cos,pi,arange
from mayavi.mlab import plot3d,view,savefig,show

#the coefeceints of the x y and z equations
a=9
b=18
c=12

#the range of the function from t= 0 to t=2*pi+.1 with steps of .01
t = arange(0,2*pi+.1,0.01)

# the equations that describe the figure
x = cos(a*t)
y = sin(b*t)
z = sin(c*t)

#plots the data
plot3d(x,y,z)

#speed of rotation of the figure
omega = 5

##this loop rotates the camera from 180 degrees to 540 degrees
#deg = 180
#for i in range (int((360)/omega)):
#
#    #sets the position of the camera
#    view(deg,45,distance = 7)
#
#    #when being used to make a .gif we can save the image each time the camera is rotated
#    savefig("animation"+str(deg)+".png")
#
#    #changes where the camera will be located
#    deg += omega
#
##lastly, this will display the figure for user manipulation
show()