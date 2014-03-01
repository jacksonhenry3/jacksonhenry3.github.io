function showFullCard(self)
{
	foc = '#'+String(self.id)
	window.location.hash = foc
	document.documentElement.scrollTop-=60;
}

function shrink(state)
{
	window.location.hash = ''
}

// you solution to the expand shrink problem means that if you keep clicking on an image the page scrolss up a bunch