#the library i used for plotting
from pylab import plot,savefig,close,show

#the acceleration function
def partA_stokesDrag(x,v):
    k = 2
    b = .0462098
    return(-k*x-b*v)

def partB_quadDrag(x,v):
    k = 2
    b = .028
    return(-k*x-b*v*abs(v))

def partc_friction(x,v):
    k = 2
    f = 1.215
    if v >= 0 :
        return(-k*x-f)
    if v < 0 :
        return(-k*x+f)
    

    
#function that takes time step and acceleration function as args
def RungaKutta4Sim(dt,f):
    
    #arrays to store data for plotting in
    T = []
    X = []
    
    #initial condition
    v = 0
    x = .0001
    t = 0
    
    #loop that will run untill 25 seconds has been simulated
    while t<40:
        
        #increment time
        t+=dt
        
        #add it to array for plotting
        T.append(t)
        
        #calculate k values
        k1x = v
        k1v = eval('f(x,v)')
        k2x = v+k1v*dt/2.
        k2v = eval('f(x+k1x*dt/2.,v)')
        k3x = v+k2v*dt/2.
        k3v = eval('f(x+k2x*dt/2.,v)')
        k4x = v+k3v*dt
        k4v = eval('f(x+k3x*dt,v)')
        
        #calculate next x value
        x+=(k1x+2*k2x+2*k3x+k4x)*dt/6.
        
        #add it to array for plotting
        X.append(x)
        
        #calculate next velocity
        v+=(k1v+2*k2v+2*k3v+k4v)*dt/6.
    
    #plot and save the result
    plot(T,X)
    show()
    # savefig('plot_c.png')
    # close()
    


RungaKutta4Sim(.05,partc_friction)
