var typed = new Typed(".typing",{
  strings:["Web Developer","Programmer","Web Designer"],typeSpeed:80, backSpeed:110, loop:true
})

var typed = new Typed(".typing-2",{
  strings:["Web Developer","Programmer","Web Designer"],typeSpeed:40, backSpeed:60, loop:true
})


// Show/Hide aswer
const faqs = document.querySelectorAll('.faq');
faqs.forEach( faq => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open');

		const icon = faq.querySelector('.faq-icon i');
		if(icon.className === 'fa-solid fa-plus'){
			icon.className = 'fa-solid fa-minus';
		}else {
			icon.className = 'fa-solid fa-plus'
		}
	})
})


//Nav

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const menuCls = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', function(){
	menu.style.display = "flex";
	menuCls.style.display = 'inline-block';
	menuBtn.style.display = "none";
})

menuCls.addEventListener('click', function(){
	menu.style.display = "none";
	menuCls.style.display = 'none';
	menuBtn.style.display = "inline-block";
})

window.addEventListener('scroll', () =>{
	document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>100);
})