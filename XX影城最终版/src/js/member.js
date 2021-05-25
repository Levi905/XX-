
  function jump(){
    //跳转
  var title = decodeURIComponent(location.search) ;
  // console.log(title);
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

  
 // 获取价格
 var movies = localStorage.getItem("movies");
 var arr = JSON.parse(movies);
 var price1 = arr[arr.length-1].price;
 console.log(price1);
 // 获取数量
 var numbers = localStorage.getItem("numbers");
 var arr1 = numbers.split(",");
 var number1 = arr1[arr1.length-1];
 console.log(number1);

 // var seats = localStorage.getItem("seats");
// var arr2 = JSON.parse(seats);


function dingdan(){
  var newHtml = `<tr>
 <td>${arr[arr.length-1].title}</td>
 <td>2014021015463541</td>
 <td>${new Date()}</td>
 <td>星星国际影城</td>
 <td>￥${price1*number1}</td>
 <td>支付成功</td>
 <td>删除</td>
 </tr>
 <tr>
<td colspan="7">
<div>
<img src="${arr[arr.length-1].imgSrc}" alt="">
                                <ul>
                                    <li>影厅：IMAX厅</li>
                                    <li>票价：￥${price1}</li>
                                    <li>支付方式：</li>
                                    <li>购票手机号：13318702255</li>
                                </ul>
                                <ul>
                                    <li>场次：2021-05-26 13:30</li>
                                    <li>数量：${number1}</li>
                                    <li>支付卡号：</li>
                                </ul>
                                <ul>
                                    <li>位置：6排10座3:30</li>
                                    <li>金额：￥${price1*number1}</li>
                                    <li>取票号：</li>
                                </ul>
                            </div>
                        </td>
                    </tr>
 `
var $tr =$(`${newHtml}`);
$("tbody").append($tr);

}
dingdan();
 
$("body").on("click","td",function(e){
    var $elem=$(e.target);
    if( $elem.text()=="删除"){
      $("tbody tr:not(:first-child)").remove()
    }
  
})