$.ajax({
    "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
    "success":function(data){
        var arr = data.movies;
        // console.log(arr);
        for(var i =0;i<8;i++){
            var movie = arr[i];
            showData(movie);
            showData1(movie);
        }
    }
})

//主要添加
function showData(movie){
    var htmlStr = `
    <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${movie.imgSrc}" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${movie.title}</h5>
                      <p class="card-text">导   &nbsp   &nbsp       演 ：${movie.director}</p>
                      <p class="card-text">领衔主演：${movie.actors}</p>
                      <p class="card-text">国家/地区：${movie.region}</p>
                      <p class="card-text">片  &nbsp   &nbsp            长 ：${movie.duration}</p>
                        <button id="btn-pay">购买选座</button>
                    </div>
                  </div>
                </div>
    `;
    var $div = $(`<div class="card mb-3" style="max-width: 720px;">${htmlStr}</div>`)
    $("#cinema-main-left").append($div)
  }

//右侧
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

  
  function jump(){
    //跳转
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