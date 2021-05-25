//选座
$("body").on("click","#sitting_list div",function(e){
    $elem = $(e.target);
    // console.log($elem)
    var $classname= $elem.attr("class");
    // console.log($classname)
    if($classname=="kx"){
        $elem.removeClass("kx");
        $elem.addClass("yx");
    }else if($classname=="yx"){
        $elem.removeClass("yx");
        $elem.addClass("kx");
    }
})

//购买
$("body").on("click","#pay",function(e){
    cun()
    var yxs = document.querySelectorAll("#sitting_list .yx");
        for (var i = 0; i < yxs.length; i++) {
          yxs[i].setAttribute("class", "ys");
        };

})

function cun() {
    var texts = document.querySelectorAll("#sitting_list .yx");
    for (var j = 0; j < texts.length; j++) {
      var text = texts[j].innerText;
      var seat = {
          "number":text
      }
      var str = localStorage.getItem('p-seats');
      var seats;
      if (str == null) {
        seats = [];
      } else {
        //转数组为对象
        seats = JSON.parse(str);
      }
      //将新用户保存到数组中
      seats.push(seat);
      var str = JSON.stringify(seats);
      localStorage.setItem('p-seats', str);
    }
  }


  $(document).ready(function(){
    var $seats = localStorage.getItem('p-seats');
    var $seatsArr = JSON.parse($seats);
    for(var i=0;i<$seatsArr.length;i++){
        console.log($seatsArr[i])
        var $kxs = $("#sitting_list .kx");
        $kxs.each(function(index,elem){
            if($kxs[index].innerText==$seatsArr[i].number){
                $kxs[index].setAttribute("class","ys");
               
            }
           
        })
    }
  })