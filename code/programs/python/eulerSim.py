#the library i used for plotting
from pylab import plot,savefig,close

#the acceleration function
def spring(x):
    return(-2.*x)
    
#function that takes time step and acceleration function as args
def eulerSim(dt,f):
    
    #arrays to store data for plotting in
    T = []
    X = []
    
    #initial condition
    a = 0
    v = 0
    x = 3
    t = 0
    
    #loop that will run untill 25 seconds has been simulated
    while t<25:
        
        #increment time
        t+=dt
        
        #add it to array for plotting
        T.append(t)
        
        #calculate next x value
        x+=v*dt+1./2.*a*dt**2
        
        #add it to array for plotting
        X.append(x)
        
        #calculate next velocity
        v+=a*dt
        
        #calculate acceleration for next itteration
        a = eval('f(x)')
    
    #plot and save the result
    plot(T,X)
    savefig('plot_'+str(dt)+'.png')
    close()
    

#run the program for two different time steps
eulerSim(.0001,spring)
