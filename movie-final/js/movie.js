 //从网络中获取数据
 $.ajax({
    "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
    "success":function(data){
        var arr =data.movies;
        //数组
        for(var i=0;i<arr.length;i++){
            var good = arr[i];//good 是每次遍历时拿到的一个商品对象
            //放在页面上
            showData(good);
        }
        delLoading();
    }
});



function showData(good){
    //把一个对象里的数据展示在页面上：新建标签，将对象里的数据放入到新建标签中，再把新标签放在页面上
    // var htmlStr = `
    //     <td>${good.id}</td>
    //     <td><img src="${good.img_src}" alt=""></td>
    //     <td>${good.good_name}</td>
    //     <td>${good.price}</td>
    //     <td><button>删除</button></td>
    // `;
    var htmlStr = `<div class="row no-gutters">
      <div class="col-md-4">
        <img src="${good.imgSrc}" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${good.title}</h5>
          <p class="card-text">导   &nbsp   &nbsp       演 ：${good.director}</p>
          <p class="card-text">领衔主演：${good.director}</p>
          <p class="card-text">国家/地区：${good.release}</p>
          <p class="card-text">片  &nbsp   &nbsp            长 ：${good.duration}</p>
            <button id="btn-pay">购买选座</button>
        </div>
      </div>
    </div>`;
    var $div = $(` <div class="card mb-3" style="max-width: 720px;">
    ${htmlStr}</div>`);
    //放在页面上
    $('#cinema-main-left').append($div);
}
function delLoading(){
    $('.loader').hide();
}
$('body').on('click', '#btn-search', function () {
  $('.card.mb-3').remove();
  var str = $('#search').val();
      $.ajax({
          "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
          "success":function(data){
              var arr =data.movies;
              //数组
              for(var i=0;i<arr.length;i++){
                  var good = arr[i];//good 是每次遍历时拿到的一个商品对象
                  if(good.title.indexOf(str)!=-1){
                    //放在页面上
                    showData(good);
                  }
                  
              }
          }
      })
})