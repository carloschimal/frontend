jQuery('document').ready(function($){
    var menuBtm = $('.menu-des'),
     menu = $('.navigation ul');
    menuBtm.click(function(){
        if(menu.hasClass('show')){
            menu.removeClass('show');
        }else{
            menu.addClass('show');
        }
    });
});