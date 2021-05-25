$.ajax({
    "url":"https://www.fastmock.site/mock/bb4157f45a0b5ffdcb3f6d984517a6c0/woniuMovie/getAllMovies",
    "success":function(data){
        var arr = data.movies;
            for(var i =0;i<arr.length;i++){
                var movie = arr[i];
                showData(movie)
            }
    }
})


//展示到页面上主页
function showData(movie){
    var htmlStr=`<img src="${movie.imgSrc}" alt=""><p>${movie.title}</p>
    `;
    var $li = $(`<li>${htmlStr}</li>`);
    $("#main ul").append($li);

    var htmlStr1 =`<div class="c-m-l">
    <img src="${movie.imgSrc}" alt="">
</div>
<div class="c-m-r">
<p >${movie.title}</p>
<p> <span>123456</span> 人想看</p> 
<p> 主演：${movie.actors}</p>
<p> 今天220家影院放映420场</p>
</div>
<button id="prev-buy">购买</button>
    `
    var $div = $(`<div class="content-movie">${htmlStr1}</div>`);
    $("#content").append($div)
}