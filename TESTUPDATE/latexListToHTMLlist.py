LaTeXlist = """\item Updated LIGO summary pages (web pages that display live primary and secondary data channels). 
\item Began to set up summary pages on LIGO Hanford server. 
\item Fixed real time plotting on summary pages. """
LaTeXlist = LaTeXlist.replace('\item','<ul><li>',1)
LaTeXlist = LaTeXlist.replace('\item','</li><li>')
LaTeXlist = LaTeXlist.replace('\n','')
print LaTeXlist+"</ul>"