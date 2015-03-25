# geocorecon 2.0.1

Whats new?
-------------
**2.0.1**
- changed seconds sign: two apostrophe marks instead of double quote

**2.0**
- you should not seek a field to fill. The program makes it for you. Though you should fill the only field correctly
- you can now use both mathematical and geographical representations (NSWE and +-)
- you should not seek for a degree sign - there is a button that pastes it
- map added

Instructions
----------------
- as in previous versions, formats are: dd°mm'ss", dd°mm.m', dd.d° with one whitespace as separator. You can omit degree sign ONLY in d.dd. I wanted to make spacebars remover but it seems very boring to me. So I added only regex validation.
- new format added: you can now input both (+-)dd°mm'ss" and dd°mm'ss"(N, S, W, E). Letters are not supported in WGS84 representation.
- if you are unwilling to seek degree sing in manual input, just press the appropriate button (°)
- minutes sigh is apostrophe ('), seconds one - is two apostrophes('')
- after right input press the (>) button and view the result

In the next version(s)
----------------
- batch convert
- gpx waypoints generator
- visual points (click'n'view)
