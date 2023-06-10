$(document).ready(function () {

    $('.facility').magnificPopup({
        delegate:'a',
        type: 'image',
		closeBtnInside: false,
        gallery:{
            enabled:true
        },
        zoom:{
            enabled: true,
        }
    });

    AOS.init({
        duration:1000,
        delay:400
    });
});