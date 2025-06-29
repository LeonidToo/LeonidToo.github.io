var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length === 0){
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

function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length === 0){
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
    if(!validateName() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Поправете ја грешката и пробајте повторно';
        setTimeout(function(){submitError.style.display = 'none';}, 5000)
        return false;
    }
    if(validateName() || validatePhone() || validateEmail() || validateMessage()){
        document.getElementById('forma').reset();
    }
}

