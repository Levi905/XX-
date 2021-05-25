 // 标签页
 $("#main-top").on("click","p",function(){
    $elem = $(this);
    var $classname=$elem.attr("class");
    // 左
    var $word = $("#main-word");
    var $discuss = $("#discuss");
    // 右
     var $pai = $("#main-pai");
     var $chose = $(".chose-seat");  

    if($classname=="left"){
        $word.hide();
        $discuss.hide();
        $pai.show();
        $chose.show()
    }else if($classname=="right"){
      $word.show();
        $discuss.show();
        $pai.hide();
        $chose.hide()
    }
  })

$(document).ready(function(){
  var $pai = $("#main-pai");
    var $chose = $(".chose-seat");
    $pai.hide();
    $chose.hide();
})



$("body").on("click","#btn-fabu",function(){
    var $textarea = $("#d-content").val();
    var strHtml = `
   
        <div id="small-img">
          <img src="../images/Portrait_small.jpg" alt="">
        </div>
        <div id="active-right">
          <p class="name">打酱油的 </p>
          <p class="time">${new Date()}</p>
          <p class="active-main">${$textarea}</p>
        </div>
    `
    var $div = $(` <div class="active-add">${strHtml}</div>`);
    $("#dongtai").append($div);
})

