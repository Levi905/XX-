  // 百度地图API功能
  var map = new BMapGL.Map("allmap");
  var point = new BMapGL.Point(116.331398,39.897445);
  map.centerAndZoom(point,11);

  function theLocation(){
      var city = document.getElementById("cityName").value;
      if(city != ""){
          map.centerAndZoom(city,11);      // 用城市名设置地图中心点
      }
  }

  
        // 地图
        $("#top-logo").on("click",".city",function(e){
            var $elem = $(this);
            var $classname =$elem.attr("class"); 
            var $allmap=$("#allmap");
            var $result=$("#result");
            if($classname!="city on"){
                $allmap.hide();
                $result.hide();
                $elem.addClass("on")
            }else{
                $allmap.show();
                $result.show();
                $elem.removeClass("on")
            }
        })
        $(document).ready(function(){
            var $allmap=$("#allmap");
            var $result=$("#result");
            $allmap.hide();
                $result.hide();
        })


        //从网络获取数据
        $.ajax({
            "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
            "success":function(data){
                var arr = data.movies;
                    for(var i =0;i<arr.length;i++){
                        var movie = arr[i];
                        showData(movie)
                    }
                hideLoad();
            }
        })
     
        //搜索按钮
        function show(movie1){
            // console.log($("#m-c-left .row"))
            if(movie1.title.indexOf($("#search").val())!=-1){
               
               showData(movie1)
            //    console.log(movie1)
            }
        }
        //搜索
        $("body").on("click","#btn-search",function(){
            $.ajax({
                "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
                "success":function(data){
                $("#chaxun .col-3").remove();
                    var arr = data.movies;
                    for(var i =0;i<arr.length;i++){
                        var movie = arr[i];
                        // console.log(movie)
                        show(movie)
                    }    
                }
            })
        })

        //展示到页面上主页
        function showData(movie){
            
            var htmlStr=`<img src="${movie.imgSrc}" alt="">
                <p> <a href="movie-main.html?title=${movie.title}">${movie.title}</a></p>
            `;
            var $div = $(`<div class="col-3">${htmlStr}</div>`);
            $(" #chaxun").append($div)
        }



        //导航
        $("#top-nav").on("click","li",function(e){
            var $lis = $("#top-nav li");
            $lis.each(function(index,elem){
                $(elem).removeClass("red");
            })

            var $classname = $(this).attr("class");
            if($classname!="red"){
                $(this).addClass("red")
            }else{
                $(this).removeClass("red")
            }
        })

        //影藏
        function hideLoad(){
            $(".loader").hide();
        }