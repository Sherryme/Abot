//自定义背景
    function doChangeBg(){
     var bgUrl=$("#inputBgUrl").val();
     var s="<style>body{background:url(\""+bgUrl+"\");background-size:cover;}</style>";
     $("body").css("background","");
     $("canvas").hide(); 
     $("#outputDiv").html(s);
   //$.cookie("bg",$("#inputBgUrl").val(), {expires: 7});
    }   
//Cookie 
    //背景           //background-size="cover"
    $(function() {
        $("#setbox p").click(function() {
            $("body").css({"background":$(this).css("background"),"background-size":"cover"});
            $.cookie("bg", $(this).css("background"), {expires: 7});
        });
        if ($.cookie("bg")) {
            $("body").css({"background":$.cookie("bg"),"background-size":"cover"});
        }
    });
//Canvas开关
    $("#ShowC").click(function(){
        $("canvas").show(); 
    });
    $("#HideC").click(function(){
        $("canvas").hide(); 
    });
//音乐盒
   //切换歌单
    $(document).ready(function(){
        $(".tab li").click(function(){
        $(".tab li").eq($(this).index()).addClass("cur").siblings().removeClass('cur');
      //$(".mbox").replaceWith($(this).index().addClass("cur"));  
        $(".mbox").hide().eq($(this).index()).show();
       //another way: $("div").eq($(".tab li").index(this)).addClass("on").siblings().removeClass('on'); 
        });
    }); 
   //显隐动画
    $("#mbox").click(function(){
        $("#music").toggle("fast"); 
    });
    $(".hide").click(function(){
        $("#music").hide("slow"); 
    });
//屏保                
    $("#timebg").click(function(){
        $("#timebg").hide();    
        $(".search").hide("slow");
        $("#ld").hide("slow");
        $("#lead").show();    
        $("#clockb").show();
    });
    $("#lead").click(function(){
        $("#lead").hide();    
        $(".search").show("fast");
        $("#ld").show("fast");
        $("#timebg").show();
        $("#clockb").hide();
    });
//菜单显隐
    function Show_Hidden(fuck){
        if(fuck.style.display=="block"){
            fuck.style.display='none';
        }else{
            fuck.style.display='block';
        }
    }   
//搜索引擎
    $('.search_menu li').click(function(){
        $(this).parent().parent().children('a').attr('class',$(this).children('a').attr('class'));
        $(this).parent().hide();  
      /*$.cookie("sc",$(this).parent().parent().children('a').attr('class',$(this).children('a').attr('class')), {expires: 7});
        });
        if ($.cookie("sc")) {
            $('.search_menu li').parent().parent().children('a').attr('class',$.cookie('sc'));
        }*/
    });
    $('.search_text').keypress(function(e){
        var key = e.which; 
        if (key == 13) {
            $('.search_btn').click();
        }   
    })
    $('.search_btn').click(function(){
        var k = $('.search_text').val();
        if($('.search_engine').children('a').attr('class')=='baidu'){
            window.open('http://www.baidu.com/s?wd=' + k);
        }
        if($('.search_engine').children('a').attr('class')=='moegirl'){  
            window.open('http://zh.moegirl.org/' + k);
        }
        if($('.search_engine').children('a').attr('class')=='google'){
            window.open('http://google.com/search?q=' + k);
        }   
        if($('.search_engine').children('a').attr('class')=='bing'){        
            window.open('http://cn.bing.com/search?q=' + k);
        }   
        if($('.search_engine').children('a').attr('class')=='zhihu'){          
            window.open('https://www.zhihu.com/search?type=content&q=' + k);
        }   
        if($('.search_engine').children('a').attr('class')=='wiki'){
            window.open('https://zh.wikipedia.org/wiki/' + k);
        }   
        if($('.search_engine').children('a').attr('class')=='pixiv'){
            window.open('http://www.pixiv.net/member_illust.php?mode=medium&illust_id=' + k);
        }   
        if($('.search_engine').children('a').attr('class')=='douban'){
            window.open('https://www.douban.com/search?q=' + k);
        }   
    })
//搜索框
    $(document).ready(function(){
        //
        h = parseInt($(window).height());
        mh = parseInt($('#h_mid').height());
        //#h_mid
        ssmt = 70
        $('#h_mid').css('padding-top',ssmt + 'px');
        //
        $('.simg').click(function(){
            if($(this).attr('class')=='simg'){
                $(this).children('.sicon').show();
                $(this).addClass('full');
            }else{
                $(this).children('.sicon').hide();
                $(this).removeClass('full');
            }
        })
        $('.simg').each(function(index){
            if(index<5){
                $(this).children('.sicon').show();
                $(this).addClass('full');
            }
        })
        $('#check_all').click(function(){
            if($(this).attr('checked')){
                $('.simg').children('.sicon').show();
                $('.simg').addClass('full');
            }else{
                $('.simg').children('.sicon').hide();
                $('.simg').removeClass('full');
            }
        })
        //
        $("a").bind("focus",function(){
            if(this.blur){ 
            this.blur();
            }
        });//   
        $('.search_engine').hover(function(){
            $('.search_menu').show();   
        },function(){
            $('.search_menu').hide();   
        })       
        $('.search_menu li').hover(function(){
                $(this).css('background-color','#f4f4f4');
            },function(){
                $(this).css('background-color','#fff');
        })
        //
        $('.heat_box div:last').css('border','0');
        //gotoleft
        
        $('.gotoleft').click(function(){
            $('.pages li').eq(0).click();
        })
        //
        $('body').mousemove(function(e) {   
            var xx = e.originalEvent.x || e.originalEvent.layerX || 0;  
            var yy = e.originalEvent.y || e.originalEvent.layerY || 0; 
        //alert(xx);    
        });        
    })
//background
        //定义画布宽高和生成点的个数
        var WIDTH = window.innerWidth, HEIGHT = window.innerHeight, POINT = 35;
        
        var canvas = document.getElementById('canvas');
        canvas.width = WIDTH,
        canvas.height = HEIGHT;
        var context = canvas.getContext('2d');
        context.strokeStyle = 'rgba(0,0,0,0.02)',
        context.strokeWidth = 1,
        context.fillStyle = 'rgba(0,0,0,0.05)';
        var circleArr = [];
        //线条：开始xy坐标，结束xy坐标，线条透明度
        function Line (x, y, _x, _y, o) {
            this.beginX = x,
            this.beginY = y,
            this.closeX = _x,
            this.closeY = _y,
            this.o = o;
        }
        //点：圆心xy坐标，半径，每帧移动xy的距离
        function Circle (x, y, r, moveX, moveY) {
            this.x = x,
            this.y = y,
            this.r = r,
            this.moveX = moveX,
            this.moveY = moveY;
        }
        //生成max和min之间的随机数
        function num (max, _min) {
            var min = arguments[1] || 0;
            return Math.floor(Math.random()*(max-min+1)+min);
        }
        // 绘制原点
        function drawCricle (cxt, x, y, r, moveX, moveY) {
            var circle = new Circle(x, y, r, moveX, moveY)
            cxt.beginPath()
            cxt.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
            cxt.closePath()
            cxt.fill();
            return circle;
        }
        //绘制线条
        function drawLine (cxt, x, y, _x, _y, o) {
            var line = new Line(x, y, _x, _y, o)
            cxt.beginPath()
            cxt.strokeStyle = 'rgba(0,0,0,'+ o +')'
            cxt.moveTo(line.beginX, line.beginY)
            cxt.lineTo(line.closeX, line.closeY)
            cxt.closePath()
            cxt.stroke();
        }
        //初始化生成原点
        function init () {
            circleArr = [];
            for (var i = 0; i < POINT; i++) {
                circleArr.push(drawCricle(context, num(WIDTH), num(HEIGHT), num(15, 2), num(10, -10)/40, num(10, -10)/40));
            }
            draw();
        }
        //每帧绘制
        function draw () {
            context.clearRect(0,0,canvas.width, canvas.height);
            for (var i = 0; i < POINT; i++) {
                drawCricle(context, circleArr[i].x, circleArr[i].y, circleArr[i].r);
            }
            for (var i = 0; i < POINT; i++) {
                for (var j = 0; j < POINT; j++) {
                    if (i + j < POINT) {
                        var A = Math.abs(circleArr[i+j].x - circleArr[i].x),
                            B = Math.abs(circleArr[i+j].y - circleArr[i].y);
                        var lineLength = Math.sqrt(A*A + B*B);
                        var C = 1/lineLength*7-0.009;
                        var lineOpacity = C > 0.03 ? 0.03 : C;
                        if (lineOpacity > 0) {
                            drawLine(context, circleArr[i].x, circleArr[i].y, circleArr[i+j].x, circleArr[i+j].y, lineOpacity);
                        }
                    }
                }
            }
        }
        //调用执行
        window.onload = function () {
            init();
            setInterval(function () {
                for (var i = 0; i < POINT; i++) {
                    var cir = circleArr[i];
                    cir.x += cir.moveX;
                    cir.y += cir.moveY;
                    if (cir.x > WIDTH) cir.x = 0;
                    else if (cir.x < 0) cir.x = WIDTH;
                    if (cir.y > HEIGHT) cir.y = 0;
                    else if (cir.y < 0) cir.y = HEIGHT;                  
                }
                draw();
            }, 16);
        }   
