from  __future__ import division
import math 

#a function that returns true if number is prime
def prime(number):

    # checks if number is 2
    if number ==2:
        return(True)

    #starting at 2
    i = 2

    while i< (math.sqrt(number)+1) :

        #if the remainder of number divided by i is 0 then i goes evenly in to number 
        if number%i == 0:
            return(False)
        i+=1
    #if number is not divisable by any i then it is prime
    return(True)

#this finds a pair of factors of number
def factor_pair(number):
    factor_pair = None

    i = 2

    # checks for factors of number
    while i< (math.sqrt(number)+1):

       #if number is evenly divisable by i then i is a factor
       if number%i == 0:
           
            # a factor pair of number
            factor_pair = ([i,int(number/i)])
            return(factor_pair)
        
       i +=1

    #if there are no factors of number
    if factor_pair == None:
        return(str(number)+' is prime!')
    
  
    return(factor_pair)
    

#finds the prime factors of number
def Prime_factors(number):

    #gets a factor pair of number
    factor =  factor_pair(number)

    #a is one of the factor pair and b is the other
    a = factor[0]
    b = factor[1]

    #an array to be populated with the prime factors of a number
    prime_factors = []

    #checks to see if number is prime itself
    if prime(number) and prime_factors == []:
        return(str(number)+' IS prime!')

    k = 0
    
    while k != number:
       

        # if a is prime append it to prime factors
        if prime(a):
            prime_factors.append(a)

        #if b is prime append it to prime factors
        if prime(b):
            prime_factors.append(b)

        #if both a and b are prime break out of the loop
        if (prime(a) and prime(b)):
            break

        #if a isnt prime find a factor pair of it 
        if not prime(a):
            factors = factor_pair(a)
            a = factors[0]
            b = factors[1]

        # if b isn't prime find a factor pair for b
        if not prime(b):
            factors = factor_pair(b)
            a = factors[0]
            b = factors[1]

        # check to see if all the prime factors multiplied together are number if they are loop ends
        k = 1
        for p in range(len(prime_factors)):
            k = k*prime_factors[p]
            
    return(prime_factors)

Prime_factors(input('pick a number to find the prime factors of'))