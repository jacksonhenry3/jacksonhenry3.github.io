from pylab import plot,show,savefig
ptsX = []
ptsY = []
for y in range(255):
        for x in range(y):
                if x & y-x == 0:
                        ptsX.append(x+158*20-.5*y)
                        ptsY.append(-y+30)
plot(ptsX,ptsY,'.')
savefig("BinarySierpinski.png")
show()