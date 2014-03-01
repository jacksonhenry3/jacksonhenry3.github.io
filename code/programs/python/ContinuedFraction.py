def continuedFraction(n,recursion):
    if recursion > 0:
        return(1./(n + continuedFraction(n,recursion-1)))
    if recursion == 0:
        return(1)

phi = continuedFraction(1,900)+1