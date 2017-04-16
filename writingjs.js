/* --------------------------------------------------
SECTION 0: Welcome!
	My name is AlisonRobin. This is the JavaScript page that contains the functions that work on my writing page on The Endless Forest Community.
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