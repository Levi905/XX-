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
    function tianJia(){

//添加
var newHtml = `
<span class="price1">￥${price1}</span>×${number1}<br>
 总金额：<span class="sum1">￥${price1*number1}</span>`;
var $h6 = $(`${newHtml}`);
$("#zhifubao").append($h6);

var newHtml1 = `
<span class="price2">￥${price1}</span>×${number1}<br>
 总金额：<span class="sum2">￥${price1*number1}</span>`;
var $h66 = $(`${newHtml1}`);
$("#yinlian").append($h66);
}

tianJia();

//点击checked
$("body").on("click","#fu-fangshi input",function(){
var $zfb = $("#zfb").prop("checked");
var $yl = $("#yl").prop("checked");
if($zfb==true){ 
    $("#zhifubao").show()
    $("#yinlian").hide();
}
if($yl==true){
    $("#zhifubao").hide()
    $("#yinlian").show();
}
})

// window.onload=function(){
//     $("#yinlian").hide();
//     $("#zhifubao").hide()
// }
$(document).ready(function(){
    $("#yinlian").hide();
    $("#zhifubao").hide()
})

var seats = localStorage.getItem("seats");
var arr2 = JSON.parse(seats);

var strHtml = `<div class="modal-body">
订单号：<span>2014021088888888</span><br>
<p>影片：<span>${arr[arr.length-1].title}</span></p>
<p>影厅：<span>IMAX厅</span></p>
<p>影城：<span>星星国际影城</span></p>
<p>时间：<span>${ new Date() }</span></p>
<p id="seats">数量：${number1}张</p>
<p>单价：<span>${arr[arr.length-1].price}元/张 ，总金额：${price1*number1} 元</span></p>
<p>手机号码：13318702255</p>
</div>
`


var $div = $(`${strHtml}`);
$(".modal-footer").before($div)
//支付
function zhifu(){
    for(var i =arr2.length-1;i>arr2.length-Number(number1)-1;i--){
        var str1 = `${arr2[i].number}`;
        var $span = $(` <span class="seat">${str1}</span>`);
        $("#seats").append($span)
       
    }
       
}
zhifu();


