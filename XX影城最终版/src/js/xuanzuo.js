 //1. 点击空闲座位，可以切换为已选


 window.onload = function () {
    var seats = localStorage.getItem('seats');
    // console.log(seats);
    var seatssArr = JSON.parse(seats);
    // console.log(seatssArr);
    for (var k = 0; k < seatssArr.length; k++) {
      var reg=/\d+/g;
      var str=  seatssArr[k].number.match(reg);
      var hang = str[0];
      var lie = str[1];
    //   console.log(hang, lie);
      var dls = document.querySelectorAll(".sitting_list dl");
      // console.log(dls);
      for (var i = 0; i < dls.length; i++) {
        // console.log(dls[i]);
        var yuanhang1 = dls[i].getAttribute("class");
        // console.log(yuanhang1);
        var yuanhang = yuanhang1.substr(7);
        var divs = document.querySelectorAll(`.row.row${yuanhang} .kx,.row.row${yuanhang} .yx,.row.row${yuanhang} .ys`);
        // console.log(yuanhang);
        if (hang == yuanhang) {

          for (var j = 0; j < divs.length; j++) {
            if (j + 1 == lie) {
              divs[j].setAttribute("class", "ys");
            }
          }

        }
      }
    }

  }

    //找到所有空闲座位
    var seats = document.querySelectorAll(".sitting_list .kx");
    //遍历所有的空闲位置
    for (var i = 0; i < seats.length; i++) {
      //获取某个座位div标签
      var s = seats[i];
      //给div设置点击事件  判断class，切换kx 和  yx
      s.onclick = function () {
        //获取已选的座位
        var chooseSeats = document.querySelectorAll(".sitting_list .yx");
        //获取class属性值
        var classname = this.getAttribute("class");
        //判断class的值  切换 kx 和  yx
        if (classname == "kx") {
          //最多选择四个座位
          if (chooseSeats.length < 4) {
            this.setAttribute("class", "yx");
          } else {
            alert("最多选择4个位置");
            return;
          }
        } else if (classname == "yx") {
          this.setAttribute("class", "kx");

        }

        //2 显示几排几座
        //获取几排 :获取dl祖先标签的class，截取获得排号 
        var dl = this.parentElement.parentElement;
        var dlClass = dl.getAttribute("class");
        var line = dlClass.substr(7);
        //获取几座:通过祖先元素dl，找到所有 的座位，遍历.
        //对比是否等于当前点击的标签，以此来获取被点击的下标
        var divs = document.querySelectorAll(`.row.row${line} .kx,.row.row${line} .yx,.row.row${line} .ys`);
        // console.log(divs)
        var number;//列数
        //遍历divs，找到被点击的div，获取下标
        for (var i = 0; i < divs.length; i++) {
          //判断是否等于当前点击的标签
          if (this == divs[i]) {
            number = i + 1;//几列
          }
        }

        // 3 如果是空闲转已选：放在页面上:新建ol标签，放在ul上
        if (this.getAttribute("class") == "yx") {
          var ol = document.createElement("ol");
          var ul = document.querySelector(".selected");
          //设置文本内容
          ol.innerText = `${line}排${number}列`;
          //添加
          ul.appendChild(ol);
        } else {
          var ols = document.querySelectorAll(".selected ol");
          //通过遍历所有的ol来找到当前该几排几列，再remove掉
          for (var i = 0; i < ols.length; i++) {
            var olText = ols[i].innerText;
            if (olText == `${line}排${number}列`) {
              //删除
              ols[i].parentElement.removeChild(ols[i]);
              break;
            }
          }
        }
      }
    }

    $(".select_sit").on("click",".btn",function(){
        cun();
        var yxs = document.querySelectorAll(".sitting_list .yx");
        for (var i = 0; i < yxs.length; i++) {
          yxs[i].setAttribute("class", "ys");
        }
        number();
    })


    function cun() {
      var texts = document.querySelectorAll(".selected ol");
      for (var j = 0; j < texts.length; j++) {
        var text = texts[j].innerText;
        var seat = {
            "number":text
        }
        var str = localStorage.getItem('seats');
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
        localStorage.setItem('seats', str);
      }
    }



    //传电影数据票价
    function price(){
      var str = localStorage.getItem("movies");
    var movies = JSON.parse(str);
    var strHtml=` <img src="${movies[movies.length-1].imgSrc}" alt="">
    <div class="shuom-text">
        <ul>
            <li>影片：${movies[movies.length-1].title}</li>
            <li>影院：星星国际影城</li>
            <li>影厅：IMAX厅</li>
        </ul>
        <ul>
            <li>场次：2014-02-10 13:30</li>
            <li>片长：${movies[movies.length-1].duration}</li>
            <li>语言：${movies[movies.length-1].language}</li>
        </ul>
        <ul>
            <li>正价:${movies[movies.length-1].price}</li>
            <li>网购价:<span>￥68.00</span></li>
            <li><span>会员价按会员折扣标准执行</span></li>
        </ul>
    </div>`
    var $div =$(`${strHtml}`);
    $(".ys-shuom").append($div)

    }
    
    price();

    //数量
    function number(){
     
      var lis = document.querySelectorAll(".selected ol");
    var number = lis.length;
    var str = localStorage.getItem("numbers")
    var numbers;
    if(str==null){
      numbers=[];
    }else{
      numbers=str.split('');
    }
    numbers.push(number);
    localStorage.setItem("numbers",numbers.join(","))
    }
    