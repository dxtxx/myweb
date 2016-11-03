$(function(){
    var list=$('.nav-mi ul');
    var btn=$('.nav-mi-right');
    btn.click(function(){
        list.toggleClass('hot')
    })
})