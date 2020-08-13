/*-- main.js --*/
window.onload = function() {
	var iblock = document.querySelectorAll('.dmain .dgrid .dimage-block');
	var icount = iblock.length;
	var ihover = document.querySelectorAll('dmain .dgrid .doverlay-card');
	for (var i = 0; i < icount; i++) {
		iblock[i].addEventListener('mouseover',function() {
			ihover.style.display = 'block';
		});
	} // end of for loop
}




/*
|
|
|
|
|
*/
/*-- end of file --*/