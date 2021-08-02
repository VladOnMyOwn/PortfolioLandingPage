// Скрипт для слайдшоу
var m = ['pictures/bg_im1.jpg', 'pictures/bg_im2.jpg', 'pictures/bg_im3.jpg', 'pictures/bg_im4.jpg'];
var i = 0;
function next_img()
{
	i++;
	if (i >= m.length) i = 0;
	document.bg_img_name.src = m[i];
}
setInterval('next_img();', 3000);
