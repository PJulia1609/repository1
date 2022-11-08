const buttonPhone = document.querySelector('#Phone')
const buttonEmail = document.querySelector('#Email')
const tabsPhone = document.querySelector('#PhoneInput')
const tabsEmail = document.querySelector('#EmailInput')

const inputPhone = document.querySelector('#Phone')


buttonPhone.addEventListener('click', function(){
	tabsPhone.classList.remove('hidden');
	tabsEmail.classList.add('hidden');
	});

buttonEmail.addEventListener('click', function(){
	
	
	tabsEmail.classList.remove('hidden');
	tabsPhone.classList.add('hidden');
});

inputPhone.addEventListener('click', function(){

	inputPhone.classList.add('grayborder');
})

