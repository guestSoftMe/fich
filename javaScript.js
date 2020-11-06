document.querySelector('.menu_burger').addEventListener('click', function () {
	this.classList.toggle('active')
	let menu_burger_li=document.querySelector('.menu_burger_li')
	menu_burger_li.classList.toggle('act')
})