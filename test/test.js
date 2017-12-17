
var aa=(function(){
    var test={
        "code":200,
        "msg":"成功",
        "data":{
            "beachgspCharts":[],
            "tanzhangpayCharts":[
            ],
            "beachBuildCharts":[
            ],
            "beachCountCharts":[]
        }
    };
    setInterval(function(){
        // 模拟动态数据
        var newData=function(item,min,max){
            item=item||5,min=min||0,max=max||100;
            var dataNEW=[];
            for(var i=0;i<item;i++){
                dataNEW.push(Math.floor(Math.random()*(max-min+1)+min))
            }
            return dataNEW
        };
        test.beachgspCharts=newData(9);
        test.tanzhangpayCharts=(function(){
            var arr=[];
            for(var i=0;i<6;i++){
                arr.push(newData(9))
            }
            return arr;
        })();
        test.beachBuildCharts=(function(){
            var arr=[];
            for(var i=0;i<3;i++){
                arr.push(newData(9,100,1000))
            }
            return arr;
        })();
        test.beachCountCharts=newData(9);
    },100);
    return test;
})();

    <%if(res==1){%>
<div class="list-group mytpl">
        <%for(var i=0;i
    <list.length
        ;i++){%>
    <a href="javascript:;" class="list-group-item" data-url="<%=list[i].url%>">
        <%=list[i].content%>
            <%if(list[i].badge){%>
        <span class="badge">
            <%=list[i].badge%>
                </span>
                <%}%>
    </a>
        <%}%>
</div>
    <%}%>
/* var url = "test/silderBar.json";
       TL_ajax(url,{},'GET')
           .done(function (data) {
               /!*模板渲染*!/
               BaiDuTpl("silderBarControl", "silderBar-panel", data);
               /!*初始化滚动条插件*!/
               $("#silderBar-panel").mCustomScrollbar({
                   scrollButtons: {
                       enable: true
                   },
                   theme: "dark-thin"
               });
               $(".mytpl>a").eq("0").addClass("active");
               /!*初始化加载的地图*!/
               var initUrl = data.list[0].url;
               $("#changeTab").attr('src', initUrl);
           })*/
function BaiDuTpl(tplId, domId, data) {
    var bt = baidu.template;
    var html = bt('silderBarControl', data);
    document.getElementById('silderBar-panel').innerHTML = html;
}
