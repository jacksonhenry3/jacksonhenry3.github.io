from numpy import arange,transpose,sin,cos,pi,inner,real,imag,e
from pylab import *
#function to generate the n by n fourier matrix 
def F(n):
    w = e**(2*pi*1j/n)   
    a = arange(n).reshape(1,n)
    a = a*transpose(a)
    m = w**a
    return(m/float(n))

#transform a set of data from cartesian space in to fourier space
def DFT(data):
    n = len(data)
    freqs = inner(data,F(n))    
    re_freqs = real(freqs)
    im_freqs = imag(freqs)
    return([re_freqs,im_freqs])

#transform a set of data from fourier space to cartesian space
def IDFT(data):
    n = len(data)
    freqs = inner(data,np.conjugate(F(n)*float(n)))  
    re_freqs = real(freqs)
    im_freqs = imag(freqs)
    return([re_freqs,im_freqs])
    
n = 1000
x = arange(n)
y = sin(100*x)+sin(10*x)+sin(200*x)+sin(50*x+3)+x/10000
plot(DFT(y)[0])
plot(DFT(y)[1])
show()