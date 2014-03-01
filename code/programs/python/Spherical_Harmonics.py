#Import required libraries
from scipy import special
from mayavi import mlab
from numpy import *

#the 2D array of points over which the spherical harmonic will be mapped
dtheta,dphi =pi/25,pi/25
[theta,phi] = mgrid[0:2*pi+dtheta:dtheta,0:pi*2*1.1:dphi]


#a function that plots the harmonic
def dat(degree,order,theta,phi):
    harm=(real(special.sph_harm(degree,order,theta,phi)))

    #calculates the xy and z coordiantes of all the points
    r = .4
    x=r*cos(theta)*sin(phi)
    y=r*sin(theta)*sin(phi)
    z=r*cos(phi)

    #plot the figure
    mlab.mesh(x*harm-degree,y*harm-order,z*harm+1,scalars = harm)
    mlab.mesh(-x*harm-degree,-y*harm-order,-z*harm+1,scalars = harm)
    mlab.mesh(x-degree,y-order,z,scalars = harm)
    
#this loop plots all the harmonics of order below the range 
for order in range(5):
    for degree in range(order):
        dat(degree,order,theta,phi)
        
#displays the figure for user manipulation      
mlab.show()