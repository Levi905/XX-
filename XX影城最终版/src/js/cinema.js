$.ajax({
    "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllOperas",
    "success":function(data){
        var arr = data.operas;
        // console.log(arr);
        for(var i =0;i<8;i++){
            var opera = arr[i];
            showData(opera);
        }
        
    }
})

//主要影院添加
function showData(opera){
    var htmlStr = `
    <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${opera.img_src}" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${opera.name} <button id="btn-pay">购买选座</button></h5>
                      <p class="card-text">地 址：<span>${opera.address}</span></p>
                      <p class="card-text">电 话：${opera.phone}</p>
                      <p class="card-text">交通路线：地铁1号线芳村站B1出口上右转30米；公交路线：芳村站（19、52、64、181、202、217、275、309、812、838、206、高峰快线206、夜11、夜29）芳村隧道口站（1、15、55、57、71、74、81、短线81、552、556、181、281、
                        夜1、夜26）</p>
                    </div>
                  </div>
                </div>
    `;
    var $div = $(`<div class="card mb-3" style="max-width: 720px;">${htmlStr}</div>`)
    $("#cinema-main-left").append($div);
  }


  //右侧
  $.ajax({
    "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
    "success":function(data){
        var arr = data.movies;
        // console.log(arr);
        for(var i =0;i<8;i++){
            var movie = arr[i];
            showData1(movie);
        }
    }
})

function showData1(movie){
    var htmlStr = `
                <div class="card mb-3" style="max-width: 540px;" >
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${movie.imgSrc}" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <p class="card-text">${movie.score}</p>
                      <p class="card-text">类型：剧情/悬疑</p>
                      <p class="card-text">片长：119分钟</p>
                      <p id="bg">预告片</p>
                    </div>
                  </div>
                </div>
              </div>
    `;
    var $div = $(`<div class="card mb-3" style="max-width: 540px;">${htmlStr}</div>`)
    $("#c-m-r-bottom").append($div)
  }



//跳转
  function jump(){
  var title = decodeURIComponent(location.search) ;
  console.log(title);
  var str = title.substr(7);
    var $lis = $("#top-nav li");
  $lis.each(function(index,elem){
    // console.log($(elem).text()) ;
    $(elem).removeClass("red");
    if($(elem).text()==str){
        $(elem).addClass("red")
    }
  })
  }
  jump();


  $("body").on("click",".card-text span",function(){
    var $text = $(this).text();
    console.log($text)
    var map = new BMapGL.Map('container');
    map.centerAndZoom(new BMapGL.Point(116.331398,39.897445), 12);
    //创建地址解析器实例
    var myGeo = new BMapGL.Geocoder();
    // 将地址解析结果显示在地图上，并调整地图视野
    myGeo.getPoint(`成都市${$text}`, function(point){
        if(point){
            map.centerAndZoom(point, 16);
            map.addOverlay(new BMapGL.Marker(point, {title: `成都市${$text}`}))
        }else{
            alert('您选择的地址没有解析到结果！');
        }
    }, '北京市')
  })