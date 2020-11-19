$('.td').animate({
            
    marginLeft:-1028
},1500)
 
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
        },1500)
    },2000)

}













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












    var phone_reg=/^1[3|4|5|7|8]\d{9}$/;

    $('#but').click(function(){
        if($('#name').val().length==0){
            alert('手机号不能为空')
            return false;
        }
        if(!phone_reg.test($('#name').val())){
            alert('请输入正确的手机号')
            return false;
        }
      
       if($('#password').val().length<6||$('#password').val().length>8){
           alert('请输入正确的密码')
       }else{
           alert('登录成功') 
           }

 //请求数据
var name=$('.username').val()
       
var ajax=new XMLHttpRequest()||new ActiveXobjeck('Microsoft.XMLHTTP'); 
         
          ajax.open('get','http://192.168.1.64:3000/users/login?username=admin&password=123456');

         
         ajax.send('{ "username" :"admin", "password" :"123456"}')   
         
          ajax.onreadystatechange=function(){ 
                
               if(ajax.readyState==4||ajax.status==200){   
                   var data=ajax.responseText;
                   data = eval('('+data+')');
                   
                    console.log(data)       
               }
          }
})



