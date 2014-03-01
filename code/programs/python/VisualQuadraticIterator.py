import pylab
import math
# the x values over which the function will be graphed
x_list = pylab.arange(0.0, 1.0, 0.01)

#initial ylist
y_list = []

#value at which we begin iteration
x0 = 2/math.pi

#coefeceint
a = math.pi

# loop runs for all values of x_list
for x in x_list:

    #evaluates the quadratic equation at that x
    y = (a*x)-(a*x**2)

    #adds the value to the y list
    y_list.append(y)


#plots the function
pylab.plot(x_list, y_list, '-')

#plots the line y = x
pylab.plot([0,1],[0,1])

# empty arrays for the x and y of the itteration
X = []
Y = []

#makes the initial x = x0 and the initial y = 0
x = x0
y = 0

#this determines the number of iterations
for i in range(100):

    #adds the coordinates to their respective lists
    X.append(x)
    X.append(x)
    Y.append(y)

    #calculates the new y coordinate
    y = a*x*(1-x)
    
    Y.append(y)

    #calculates the new x coordinates
    x = y

#plots the iteration
pylab.plot(X,Y)

#displays it
pylab.show()