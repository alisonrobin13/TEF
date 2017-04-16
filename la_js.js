/* --------------------------------------------------
SECTION 0: Welcome!
	My name is AlisonRobin. This is the JavaScript page that contains the functions that work on La's biography page on The Endless Forest Community.
	I've made them with the help of a lot of online tutorials, especially W3Schools, and the help of kind folks like GMSuerte. I am very much just a baby learner.
-------------------------------------------------- */



/* --------------------------------------------------
SECTION 1: Visibility Toggles
	Originally had a plethora of nearly-identical functions for toggling the visibility of different span tags. Now condensed into one function.
-------------------------------------------------- */



function toggle(thename)
{
document.getElementById(thename).style.display=(document.getElementById(thename).style.display=='inline')?'none':'inline';
}



/* --------------------------------------------------
SECTION 2: Tab Function
	Uses for loops. Significantly shorter than Hraeth's code but does the same thing.
-------------------------------------------------- */


function tabs(whichtab)
{
for(var i=0;i<4;i++)
	{
	document.getElementsByClassName('tab')[i].style.display='none';
	}
document.getElementById(whichtab).style.display='inline';
}



/* --------------------------------------------------
SECTION 3: Whatever
	
-------------------------------------------------- */


//gives screen size for people because I wanted people to be able to tell me their screen sizes

function howBigIsIt()
{
document.write('width '+screen.width+' by height '+screen.height);
}