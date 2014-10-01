$(function(){
	var photos = [
		'https://lh6.googleusercontent.com/-Iv1V8HDVJ1U/VCPAjuXEidI/AAAAAAAAB4o/iauIzPOVO8g/s709-no/Sumit_Bajaj.jpg',
		'https://lh6.googleusercontent.com/-O7XWYJn1k3Y/TiQh53Qdy8I/AAAAAAAAB8g/vLu431a81YI/w712-h532-no/SB2.JPG',
		'https://lh4.googleusercontent.com/-3g7UDOowMQs/SSRZ2kNk6GI/AAAAAAAAAUM/EqAz6OejuU0/w945-h709-no/DSC00211.JPG',
		'https://lh3.googleusercontent.com/-CgkxFSj1UNY/T_j-PVhUcPI/AAAAAAAABcE/_ywojGvZhnQ/w945-h709-no/100_2988.JPG',
		'https://lh4.googleusercontent.com/-j6AXCQYU1ag/T_YiZJdIWcI/AAAAAAAABx8/rs3d-VJNvws/w945-h709-no/100_2867.JPG',
		'https://lh4.googleusercontent.com/-4kcTiwSZDEo/T_G8W5MK1cI/AAAAAAAABB8/AxzaRK1HArw/w945-h709-no/100_2671.JPG'
	];
	
	var slideshow = $('#slideShow').bubbleSlideshow(photos);

	$(window).load(function(){
		slideshow.autoAdvance(3000);
	});
	
	// Other valid method calls:
	
	// slideshow.showNext();
	// slideshow.showPrev();
	// slideshow.stopAutoAdvance();
});