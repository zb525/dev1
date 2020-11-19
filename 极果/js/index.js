$('.td').animate({
            
    marginLeft:-1028
},1000)
 
var num=-1028
var time=null
fn()
function fn(){
   time= setInterval(function(){
        num-=1028
        if(num<=-4000){
            num=0
           
            
        }
        if(num==0){
            $('.td').css('marginLeft','0')
        }
        $('.td').animate({
            
            marginLeft:num
        },1000)
    },2000)

}


$('img').hover(function(){
    $(this).css('opacity','0.2')
},function(){
    $(this).css('opacity','1')
})












    $('.denglu').click(function(){
        $('.box_').show()
    })
    
    $('.xxx').click(function(){
        $('.box_').hide()
    })

   $('.reg').click(function(){
       window.open('./regist.html')
   })


$('.jz').click(function(){
    $('.loa').hide()
    $('.jt').show()
})












    

    $('#but').click(function(){
        if($('#name').val().length==0){
            alert('手机号不能为空')
            return false;
        }
        
      
       if($('#password').val().length<6||$('#password').val().length>8){
           alert('请输入正确的密码')
       }
 // 登录请求数据
 $.ajax({
    url:'http://192.168.1.64:3000/users/login',
    type:'post',
    data:{
        
        
        username:$('#name').val(),
        password:$('#password').val()
    },
    success:function(data){
        console.log(data)
        alert(data.msg)
        if(data.status == 200 ){
            window.open('./index.html')
        }
    },
    dataType:'json',
})
})



