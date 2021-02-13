$(document).ready(function(){
    $('#close>i').click(()=>{
        $('#resNav').hide();
    })
    $('.menu').click(()=>{
        $('#resNav').show();
    })
        
    $('#category button:nth-child(1)').click(()=>{
        $(".column:nth-child(1) img:nth-child(1)").attr("src",'https://images.unsplash.com/photo-1567866953028-7afde8db2876?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
        $('.column:nth-child(2) img:nth-child(1').attr('src','https://images.unsplash.com/photo-1613135674832-5c5b2764a71d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')
    })
    
});
