
//判断浏览器版本
function getBrowserType() { 
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/msie ([\d.]+)/)) return 1;
    if (ua.match(/firefox\/([\d.]+)/)) return 2;
    if (ua.match(/chrome\/([\d.]+)/)) return 3;
    if (ua.match(/opera.([\d.]+)/)) return 4;
    if (ua.match(/version\/([\d.]+)/)) return 5;    //safari
    return 0; 
 }

//改变当前行颜色
var orObj;
var orBg;
function changeBg(obj){
if(orObj){
orObj.style.backgroundColor=orBg;
}
orObj = obj;
orBg = obj.style.backgroundColor;
obj.style.backgroundColor='#FCFAC8';
}

//删除前确认
function check(objName){
    var   o=document.getElementsByName(objName)
    for(i=0;i<o.length;i++)if(o[i].checked)return;
    alert("请先选择再删除！");
    location.reload();
}

//刷新按钮
function reload()   
{   
  var name=navigator.appName   
  var vers=navigator.appVersion   
  if(name=='Netscape'){   
    window.location.reload(true)   
  }
  else{   
    history.go(0)   
  }   
}

//铺位明细弹出窗口
function openwin(src){
var vDialog=null;
vDialog=showModalDialog(src,window,"status:no;scrollbars:yes;resizable:off;dialogHeight:750px;dialogWidth:1000px;unadorne:yes;help:no");
}
  
//铺位明细弹出小窗口
function openwin_s(src){
var vDialog=null;
vDialog=showModalDialog(src,window,"status:no;scrollbars:yes;resizable:off;dialogHeight:380px;dialogWidth:550px;unadorne:yes;help:no");
}

//检索方案弹出窗口
var X = 250; // x position
var Y = 250; // y position
var W = 650; // width
var H = 360; // height
var s="resizable=yes,left="+X+",top="+Y+",screenX="+X+",screenY="+Y+",width="+W+",height="+H; // Do not edit below this line.
function popZdy(U){
var SGW = window.open(U,'TheWindow',s)
}
  
//注册页面
function popReg(Y){
window.open (Y,'newwindow7','height=300,width=450,top='+(screen.height-300)/2+',left='+(screen.width-450)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//输出Excel弹出窗口，尽寸为横向A4纸
function popOut(Q){
window.open (Q,'newwindow1','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//弹出增加窗口，禁止滚动条的
function popAdd(V){
window.open (V,'newwindow6','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//弹出增加窗口，放开滚动条的
function popAdd2(X){
window.open (X,'newwindow2','height=550,width=850,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//弹出修改窗口
function popMod(W){
window.open (W,'newwindow3','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no')
}

//弹出修改窗口（宽）
function popMod_w(V){
window.open (V,'newwindow6','height=500,width=1000,top='+(screen.height-500)/2+',left='+(screen.width-1000)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//打印预览窗口，尽寸为横向A4纸
function popPrn(U){
window.open (U,'newwindow4','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//输出图表弹出窗口，尽寸为横向A4纸
function popChart(P){
window.open (P,'newwindow5','height=550,width=800,top='+(screen.height-550)/2+',left='+(screen.width-800)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//日常管理 的弹出窗口
function popRcgl(V){
window.open (V,'newwindow6','height=600,width=850,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//帮助弹出窗口
function popHelp(Y){
window.open (Y,'newwindow5','height=400,width=400,top='+(screen.height-400)/2+',left='+(screen.width-400)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//迷你短消息窗口
function MiniX(U){
var MSGW = window.open(U,'TheWindow','resizable=yes,scrollbars=yes,top='+(screen.height-350)/2+',left='+(screen.width-350)/2+',width=350,height=350')
}

//邮递标签打印窗口
function popYdbq(G){
window.open (G,'ydbqwindow','height=500,width=400,top='+(screen.height-500)/2+',left='+(screen.width-400)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}


//多选会员弹出窗口
function selhy() {
window.open("../../choose/vip/selhy.aspx",null,'height=300,width=450,top='+(screen.height-300)/2+',left='+(screen.width-450)/2+',directories = no,status=no,toolbar=no,menubar=no,location=no,titlebar = no,scrollbars = yes');
}

//多选会员弹出窗口2
function selhy2() {
window.open("../../choose/vip/selhy.aspx",null,'height=300,width=450,top='+(screen.height-300)/2+',left='+(screen.width-450)/2+',directories = no,status=no,toolbar=no,menubar=no,location=no,titlebar = no,scrollbars = yes');
}

//弹出迷你修改窗口
function popMiniMod(J){
window.open (J,'newwindowJ','height=400,width=650,top='+(screen.height-400)/2+',left='+(screen.width-650)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no')
}

//模板弹出窗口（大）
function popMb(M){
window.open (M,'newwindow9','height=700,width=950,top='+(screen.height-700)/2+',left='+(screen.width-950)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//弹出增加窗口
function popSqzj(V){
window.open (V,'newwindow6','height=360,width=600,top='+(screen.height-360)/2+',left='+(screen.width-600)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no')
}

//弹出网站文章窗口
function popWeb(E){
window.open (E,'newwindow2','height=700,width=950,top='+(screen.height-700)/2+',left='+(screen.width-950)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//CRM产品信息
function opencpxx(str)
{
    var num=Math.random();
    window.showModalDialog("../ggym/ChangPinMx.aspx?tmp="+num+"&id="+str+"","window", "dialogWidth:750px;DialogHeight=680px;status:no;scroll=yes;help:no");  
}

//全选/全不选
function chkAll()
{
var chkall= document.all["chkall"];
var chkother= document.getElementsByTagName("input");
for (var i=0;i<chkother.length;i++)
    {
    if( chkother[i].type=='checkbox')
        {
            if(chkother[i].id.indexOf('GridView1')>-1)
            {
                if(chkall.checked==true)
                {
                    chkother[i].checked=true;
                }
                else
                {
                    chkother[i].checked=false;
                }
            }
        }
    }
}

//全选或取消复选框
function CheckAll(form)
{
    for (var k=0;k<form.elements.length;k++)
    {
        var e = form.elements[k];
        //判断不是选框本身
        if (e.name != 'chkall'){
           //判断选框不是 高级检索 
           if (e.name != 'gjjs'){
           //判断选框不是 关联条件 
             if (e.name != 'gltj'){
                e.checked = form.chkall.checked;
             }
           }
        }
    }
}

//验证复选框：必选一项
function modcheck()
{
	var j=0
	for(var i=0;i<document.form1.elements.length;i++)
	{
		if(document.form1.elements[i].checked==true)
	    {
	        j=j+1
	    }
	}
	
	if(j>0)
	{
        if(j>1)
	    {
	        alert('不支持多选，请选中一条记录再执行此操作！')
	        return false;
	    }
    }
	else
	{
		alert('请单击[选择]列的复选框，选中一条记录后再执行此操作！');
		return false;
	}
	
}

//删除：验证复选框：必选一项或多项
function delcheck()
{
	var j=0
	for(var i=0;i<document.form1.elements.length;i++)
	{
		if(document.form1.elements[i].checked==true)
		{
		    j=j+1
		}
	}
	
	if(j>0)
	{

	}
	else
	{
		alert('请单击[选择]列的复选框，选中一条或多条记录后再执行删除操作！');
		return false;
	}
	
    if (window.confirm("删除后将无法再恢复，确认要继续执行吗？"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//审批：验证复选框：必选一项或多项
function audicheck()
{
	var j=0
	for(var i=0;i<document.form1.elements.length;i++)
	{
		if(document.form1.elements[i].checked==true)
		{
		    j=j+1
		}
	}
	
	if(j>0)
	{

	}
	else
	{
		alert('请单击[选择]列的复选框，选中一条或多条记录后再执行此操作！');
		return false;
	}
	
    if (window.confirm("确认要继续执行吗？"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*全选*/
function chkAllw()
{
	for(var i=0;i<document.form1.elements.length;i++)
	{
		document.form1.elements[i].checked=true;
	}
}
/*全消*/
function nochkAll()
{
	for(var i=0;i<document.form1.elements.length;i++)
	{
		document.form1.elements[i].checked=false;
	}
}
/*反选*/
function revchkAll()
{
	for(var i=0;i<document.form1.elements.length;i++)
	{
		if(document.form1.elements[i].checked==true)
		    document.form1.elements[i].checked=false;
		else
			document.form1.elements[i].checked=true;
	}
}

/*页面查找定位开始*/var NS4 = (document.layers);    // Which browser?var IE4 = (document.all);var win = window;    // window to search.var n   = 0;function findInPage(str) {  var txt, i, found;  if (str == "")    return false;  // Find next occurance of the given string on the page, wrap around to the  // start of the page if necessary.  if (NS4) {    // Look for match starting at the current point. If not found, rewind    // back to the first match.    if (!win.find(str))      while(win.find(str, false, true))        n++;    else      n++;    // If not found in either direction, give message.    if (n == 0)      alert("Not found.");  }  if (IE4) {    txt = win.document.body.createTextRange();    // Find the nth match from the top of the page.    for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {      txt.moveStart("character", 1);      txt.moveEnd("textedit");    }    // If found, mark it and scroll it into view.    if (found) {      txt.moveStart("character", -1);      txt.findText(str);      txt.select();      txt.scrollIntoView();      n++;    }    // Otherwise, start over at the top of the page and find first match.    else {      if (n > 0) {        n = 0;        findInPage(str);      }      // Not found anywhere, give message.      else        alert("Not found.");    }  }  return false;}
/*页面查找定位结束*/

/*打印1：hkshow1 + GridView1*/
function PrintPage1()
{
    document.getElementById("hkshow1").style.visibility="hidden";
    document.getElementById("GridView1") .border="1";
    print();
    document.getElementById("hkshow1").style.visibility="visible";
    document.getElementById("GridView1") .border="0";
}

/*打印2：hkshow1 + hkshow2 + GridView1*/
function PrintPage2()
{
    document.getElementById("hkshow1") .style.visibility="hidden";
    document.getElementById("hkshow2") .style.visibility="hidden";
    document.getElementById("GridView1") .border="1";
    print();
    document.getElementById("hkshow1") .style.visibility="visible";
    document.getElementById("hkshow2") .style.visibility="visible";
    document.getElementById("GridView1") .border="0";
}

/*打印3：hkshow1 + hkshow2 + hktable*/
function PrintPage3()
{
    document.getElementById("hkshow1") .style.visibility="hidden";
    document.getElementById("hkshow2") .style.visibility="hidden";
    document.getElementById("hktable") .border="1";
    print();
    document.getElementById("hkshow1") .style.visibility="visible";
    document.getElementById("hkshow2") .style.visibility="visible";
    document.getElementById("hktable") .border="0";
}

/*打印4：hkshow1*/
function PrintPage4()
{
    document.getElementById("hkshow1") .style.visibility="hidden";
    print();
    document.getElementById("hkshow1") .style.visibility="visible";
}

/*打印5：hkshow1 + hkshow2 + hkshow3 + hktable*/
function PrintPage5()
{
    document.getElementById("hkshow1") .style.visibility="hidden";
    document.getElementById("hkshow2") .style.visibility="hidden";
    document.getElementById("hkshow3") .style.visibility="hidden";
    document.getElementById("hktable") .border="1";
    print();
    document.getElementById("hkshow1") .style.visibility="visible";
    document.getElementById("hkshow2") .style.visibility="visible";
    document.getElementById("hkshow3") .style.visibility="visible";
    document.getElementById("hktable") .border="0";
}

/*打印6：hkshow1 + GridView1 + GridView2 + GridView3*/
function PrintPage6()
{
    document.getElementById("hkshow1").style.visibility="hidden";
    document.getElementById("GridView1") .border="1";
    document.getElementById("GridView2") .border="1";
    document.getElementById("GridView3") .border="1";
    print();
    document.getElementById("hkshow1").style.visibility="visible";
    document.getElementById("GridView1") .border="0";
    document.getElementById("GridView2") .border="0";
    document.getElementById("GridView3") .border="0";
}

/*打印7：hkshow1 + GridView1 + GridView2*/
function PrintPage7()
{
    document.getElementById("hkshow1").style.visibility="hidden";
    document.getElementById("GridView1") .border="1";
    document.getElementById("GridView2") .border="1";
    print();
    document.getElementById("hkshow1").style.visibility="visible";
    document.getElementById("GridView1") .border="0";
    document.getElementById("GridView2") .border="0";
}

function killErrors() {
    return true;
}
window.onerror = killErrors;
//-->