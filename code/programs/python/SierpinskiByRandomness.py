from pylab import *
import random

#the three points on the trianlge
p1 = [0,0]
p2 = [1,0]
p3 = [.5,1]


#the initial point
i = [.5,.5]


#the three initial points on the triangle
x = [0,1,.5,]
y = [0,0,1,]

#generates 200000 points
for k in range(200000):

    # generates a random number between 1 and 3
    r = (random.randrange(1,4))

    # if the number generated was 1
    if r == 1:
        p = p1

    #if the number generated was 2
    if r == 2:
        p = p2

    #if the number generated was 3
    if r == 3:
        p = p3
    
        
    #find the distance to the randomly chosen point and divide it by 2
    dx = (p[0]-i[0])/2
    dy = (p[1]-i[1])/2

    # generate the new location for the point
    i[0] +=dx
    i[1] += dy

    #appends the new point to the x array
    x.append(i[0])
    y.append(i[1])

#plot all the points as dots
plot(x,y,'.')

show()