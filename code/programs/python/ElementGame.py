import random
elements = [["hydrogen", "H"], ["helium", "He"], ["lithium", "Li"], ["beryllium",   "Be"], ["boron", "B"], ["carbon", "C"], ["nitrogen",   "N"], ["oxygen", "O"], ["fluorine", "F"], ["neon", "Ne"], ["sodium",   "Na"], ["magnesium", "Mg"], ["aluminum", "Al"], ["silicon",   "Si"], ["phosphorus", "P"], ["sulfur", "S"], ["chlorine",   "Cl"], ["argon", "Ar"], ["potassium", "K"], ["calcium",   "Ca"], ["scandium", "Sc"], ["titanium", "Ti"], ["vanadium",  "V"], ["chromium", "Cr"], ["manganese", "Mn"], ["iron",   "Fe"], ["cobalt", "Co"], ["nickel", "Ni"], ["copper",   "Cu"], ["zinc", "Zn"], ["gallium", "Ga"], ["germanium",   "Ge"], ["arsenic", "As"], ["selenium", "Se"], ["bromine",  "Br"], ["krypton", "Kr"], ["rubidium", "Rb"], ["strontium",   "Sr"], ["yttrium", "Y"], ["zirconium", "Zr"], ["niobium",  "Nb"], ["molybdenum", "Mo"], ["technetium", "Tc"], ["ruthenium",   "Ru"], ["rhodium", "Rh"], ["palladium", "Pd"], ["silver",  "Ag"], ["cadmium", "Cd"], ["indium", "In"], ["tin",   "Sn"], ["antimony", "Sb"], ["tellurium", "Te"], ["iodine",  "I"], ["xenon", "Xe"], ["cesium", "Cs"], ["barium",   "Ba"], ["lanthanum", "La"], ["cerium", "Ce"], ["praseodymium",  "Pr"], ["neodymium", "Nd"], ["promethium", "Pm"], ["samarium",   "Sm"], ["europium", "Eu"], ["gadolinium", "Gd"], ["terbium",  "Tb"], ["dysprosium", "Dy"], ["holmium", "Ho"], ["erbium",  "Er"], ["thulium", "Tm"], ["ytterbium", "Yb"], ["lutetium",   "Lu"], ["hafnium", "Hf"], ["tantalum", "Ta"], ["tungsten",  "W"], ["rhenium", "Re"], ["osmium", "Os"], ["iridium",   "Ir"], ["platinum", "Pt"], ["gold", "Au"], ["mercury",   "Hg"], ["thallium", "Tl"], ["lead", "Pb"], ["bismuth",   "Bi"], ["polonium", "Po"], ["astatine", "At"], ["radon",   "Rn"], ["francium", "Fr"], ["radium", "Ra"], ["actinium",  "Ac"], ["thorium", "Th"], ["protactinium", "Pa"], ["uranium",  "U"], ["neptunium", "Np"], ["plutonium", "Pu"], ["americium",  "Am"], ["curium", "Cm"], ["berkelium", "Bk"], ["californium",   "Cf"], ["einsteinium", "Es"], ["fermium", "Fm"], ["mendelevium",  "Md"], ["nobelium", "No"], ["lawrencium", "Lr"], ["rutherfordium",  "Rf"], ["dubnium", "Db"], ["seaborgium", "Sg"], ["bohrium",  "Bh"], ["hassium", "Hs"], ["meitnerium", "Mt"], ["darmstadtium",   "Ds"], ["roentgenium", "Rg"], ["copernicium", "Cn"], ["ununtrium",  "Uut"], ["ununquadium", "Uuq"], ["ununpentium",   "Uup"], ["ununhexium", "Uuh"], ["ununseptium",  "Uus"], ["ununoctium", "Uuo"]]


def whereInList(array,element):
	for i in range(len(list)):
		if array[i] == element:
			return(i)



for i in elements:
	symbols = i[1]
	names = i[0]

diff = input("Please input difficulty from 1 to 10:")

while not (diff < 11) or not (diff > 0):
	print("nonononono, it needs to be between 1 and 10, like, actually.")
	diff = input("Please input difficulty from 1 to 10:")

g = input("How many guesses would you like to allow? Your answer will be rounded to the nearest integer, with .5 rounded down.")
guesses=int(g)


def compGuess(diff,guesses):
	UserSymbol = input("Please input a chemical symbol with correct capitalization:")
	while UserSymbol not in symbols:
		print("Silly goose, that's not a real symbol!")
		UserSymbol = input("Please input a chemical symbol with correct capitalization:")


	def guess(UserSymbol,diff,guesses,tries):
	possibility = random.randint(1,10)
	if possibility<=diff:
		compGuess = True
	else:
		compGuess = False

	if compGuess:
		ElNum = whereInList(Symbols,UserSymbol)
		verification = raw_input("Is",names[ElNum],"the correct element name? (y,n)")
		if verification == “n”:
			print(“Are you sure? I’m pretty confident that this is correct.”)
MatteaGuess()
	elif not compGuess:
		ElNum = random.randint(1,118)
verification  = raw_input("Is",names[ElNum],"the correct element name? (y,n)")
		if verification == “n”:
if tries < guesses:
	print(“Let me try again! :) ”)
	guess(UserSymbol,diff,guesses,tries)
	tries+=1
			if tries == guesses:
				print(“OK, give me another one...”)
				compGuess(diff,guesses)
		if verification == “y”:
			print(“MUAHAHAHAAHAHA! Your turn!”)
			MatteaGuess()
	
				

	j=1
if j <= guess:
		while not compGuess:
			j+=1