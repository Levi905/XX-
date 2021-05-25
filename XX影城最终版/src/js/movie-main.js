var title = decodeURIComponent(location.search) ;
var str = title.substr(7);
var a = str;
// console.log(title);
//从网络获取数据
$.ajax({
"url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
"success":function(data){
    var arr = data.movies;
    // console.log(arr);
    for(var i =0;i<arr.length;i++){
        var movie = arr[i];
        showData(movie);
        save(movie);
    }
    hideLoad();
    var $yugao = $("#yugao");
    $yugao.hide();

    //加载评论
    var str = localStorage.getItem("comments");
    var data = JSON.parse(str);
    for(var i=0;i<data.length;i++){
        var newDd = `
        <dd id="dd">
                <div class="Portrait_small">
                  <img src="../images/Portrait_small.jpg" />
                </div>
                <div class="pepole" id="people">
                  打酱油的<span class="star star${data[i].mark/2}" style="width: 103px;"></span
                  ><em><b>${data[i].mark}</b> ${data[i].time}</em>
                </div>
                <div class="nr">${data[i].content}</div>
              </dd>`
          $("dl dd:last-child").before(newDd);
    }
}
})

function showData(movie){

if(str==movie.title){
  var htmlStr=`<div id="main-top">
  广州共<span> 8 </span>家影城上映该片，共 <span>28</span>个场次
</div>
<!-- 插入卡片 -->
<h1>${movie.title} <span> ${movie.score}分 </span></h1>
<div class="card mb-3" style="max-width: 720px;" >
<div class="row no-gutters">
  <div class="col-md-4">
    <img src="${movie.imgSrc}" alt="...">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <p class="card-text">导 &nbsp&nbsp&nbsp&nbsp&nbsp演：${movie.director}</p>
      <p class="card-text">领衔主演：${movie.actors}</p>
      <p class="card-text">国家/地区：${movie.region}</p>
      <p class="card-text">类 &nbsp&nbsp&nbsp&nbsp&nbsp型 ：动画电影</p>
      <p class="card-text">片 &nbsp&nbsp&nbsp&nbsp&nbsp长 ：${movie.duration}</p>
      <p class="card-text">上映时间：${movie.release}</p>
      <p class="card-text">语  &nbsp&nbsp&nbsp&nbsp&nbsp 言 ：${movie.language}</p>
    </div>
  </div>
</div>
</div>

<div id="m-t-nav">
<p class="">排片购票</p>
<p class="word-color">剧情与评论</p>
<p class="">预告片</p>
</div>

<div id="m-t-main">
<h2>${movie.title} 剧情简介</h2>
<p>${movie.desc}</p>
<h2>剧照海报</h2>
<img src="${movie.posterSrc}" alt="">
</div>
<div id="yugao" style="height:300px">
暂无预告。
</div>




<!-- pinglun -->
<div class="Comment">
<div class="them" id="them">${movie.title} 全部评论</div>
<dl id="commentList">
  <dt>
    <span class="jiao"></span>
    <div class="Portrait_big"><img src="../images/Portrait.jpg" /></div>
    <div class="Iwant">
      <div class="point">
        我要评分：
        <span id="star" class="">
          <ul>
            <li id="star1" ></li>
            <li id="star2" ></li>
            <li id="star3" ></li>
            <li id="star4" ></li>
            <li id="star5" ></li>
          </ul>
        </span>
        <b id="star-mark">0.0</b><span id="star-content"></span>
      </div>
      <textarea id="new-comment" style="width: 100%;"></textarea>
    </div>
    <div class="btn_box">
      <a href="#" class="face"></a>
      <span>140字</span><a href="#" class="fb" onclick="commit();">我要发布</a>
    </div>
  </dt>

  <!-- 动态生成 -->
  <dd id="dd">
    <div class="Portrait_small">
      <img src="../images/Portrait_small.jpg" />
    </div>
    <div class="pepole" id="people">
      打酱油的<span class="star star4" style="width: 103px;"></span
      ><em><b>8.0</b> 2014/2/9 22:18:59</em>
    </div>
    <div class="nr">${movie.comments[0]}</div>
  </dd>
  <!-- 动态生成结束,追加到dl中 -->
</dl>
</div>
</div>
`;

var $div = $(`  <div id="cinema-main-left" style="width:100%">${htmlStr}</div>`);
$("#cinema-main #zhanwei").append($div);

// var str = localStorage.getItem("movies");
// var movies;
// if(str==null){
//   movies=[];
// }else{
//   movies = JSON.parse(str);
// }
// movies.push(movie);
// var cun = JSON.stringify(movies);
// console.log(cun)
// localStorage.setItem("movies",cun)
}

}




//存本地
function save(movie){
  // alert(111)
  console.log(a);
  console.log(movie.title);

  if(a == movie.title){
    // alert(111);
    var str = localStorage.getItem("movies");
  var movies;
  if(str==null){
  movies=[];
  }else{
  movies = JSON.parse(str);
}
movies.push(movie);
var str = JSON.stringify(movies);
console.log(str)
localStorage.setItem("movies",str)
  }
}

 
 
 
 
 // 发布
 function commit() {
    var date1 = new Date(); 
    var text = document.querySelector("#new-comment").value;
    var newdd = document.createElement("dd");
    var starput=document.querySelector('#star').getAttribute('class')
    var numberput=document.querySelector('#star-mark').innerText;

    var data = {
            // "goodid":1,//商品id
            // "userphone":1399999999,//评论用户手机号
            "content":text,
            "time":new Date().toLocaleString(),
            "mark":numberput
        }
    var str = localStorage.getItem("comments");
    var comments;
    if(str==null){
        comments=[];
    }else{
        comments=JSON.parse(str);
    }
    comments.push(data);
    var str = JSON.stringify(comments)
    localStorage.setItem("comments",str);

    newdd.innerHTML = `
    <div class="Portrait_small">
          <img src="../images/Portrait_small.jpg" />
        </div>
        <div class="pepole" id="people">
          打酱油的<span class="star ${starput}" style="width:103px;"></span
          ><em><b>${numberput}</b> ${date1}</em>
        </div>
        <div class="nr">${text}</div>
    `
    document.querySelector("#commentList").insertBefore(newdd, document.querySelector("#commentList dd"));
  }

  $("body").on("click","#star li",function(e){
    var elem = e.target;
    var idName = elem.getAttribute("id");
    console.log(idName)
    var number = idName.substr(4);
    document.querySelector("#star").setAttribute('class', `star${number}`);
    document.querySelector('#star-mark').innerText=`${number*2}.0`;
  })

  $(document).ready(function(){
     
  })



//标签页
$("body").on("click","#m-t-nav p",function(e){

    $elem = $(this);
    var $classname = $elem.attr("class");
    var $ps = $("#m-t-nav p");
    $ps.each(function(index,elem){
      $(elem).removeClass("word-color")
    })
    if($classname!="word-color"){
        $elem.addClass("word-color")
    }else{
      $elem.removeClass("word-color")
    }
    var $main = $('#m-t-main');
    var $yugao = $("#yugao");
    if($elem.text()=="剧情与评论"){
      $main.show();
      $yugao.hide();
    }else if($elem.text()=="预告片"){
      $main.hide();
      $yugao.show();
    }
})



//影藏
function hideLoad(){
  $(".loader").hide();
}
 