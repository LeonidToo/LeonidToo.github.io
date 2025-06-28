
    var Meni = document.getElementById("Meni");
    var Navigacia = document.getElementById("Navigacia");
    Navigacia.style.right="-250px";

    Meni.onclick = function(){
        if(Navigacia.style.right=="-250px"){
            Navigacia.style.right="0";
        }
        else{
            Navigacia.style.right="-250px";
        }
    };
    
	var scroll = new SmoothScroll('a[href*="#"]');

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Името е потребно';
        return false;
    }
    if(!name.match(/^[A-Za-z-аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]*\s{1}[A-Za-z-аАбБвВгГдДеЕёЁжЖзЗиИйЙкКлЛмМнНоОпПрРсСтТуУфФхХцЦчЧшШщЩъЪыЫьЬэЭюЮяЯ]*$/)){
        nameError.innerHTML = 'Напишете го вашето презиме';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Телефонскиот број е потребен';
        return false;
    }
    if(phone.length !== 9){
        phoneError.innerHTML = 'Телефонскиот број треба да е 9 бројки';
        return false;
    }
    if(!phone.match(/^[0-9]{9}$/)){
        phoneError.innerHTML = 'Само бројки';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0){
        emailError.innerHTML = 'Email адресата е потребна';
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        emailError.innerHTML = 'Невалидна email адреса';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left>0){
        messageError.innerHTML = left + ' повеќе карактери потребни'
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Поправете ја грешката и пробајте повторно';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
    if(validateName() || validatePhone() || validateEmail() || validateMessage()){
        document.getElementById('forma').reset();
    }
}