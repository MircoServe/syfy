
//�ж�������汾
function getBrowserType() { 
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/msie ([\d.]+)/)) return 1;
    if (ua.match(/firefox\/([\d.]+)/)) return 2;
    if (ua.match(/chrome\/([\d.]+)/)) return 3;
    if (ua.match(/opera.([\d.]+)/)) return 4;
    if (ua.match(/version\/([\d.]+)/)) return 5;    //safari
    return 0; 
 }

//�ı䵱ǰ����ɫ
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

//ɾ��ǰȷ��
function check(objName){
    var   o=document.getElementsByName(objName)
    for(i=0;i<o.length;i++)if(o[i].checked)return;
    alert("����ѡ����ɾ����");
    location.reload();
}

//ˢ�°�ť
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

//��λ��ϸ��������
function openwin(src){
var vDialog=null;
vDialog=showModalDialog(src,window,"status:no;scrollbars:yes;resizable:off;dialogHeight:750px;dialogWidth:1000px;unadorne:yes;help:no");
}
  
//��λ��ϸ����С����
function openwin_s(src){
var vDialog=null;
vDialog=showModalDialog(src,window,"status:no;scrollbars:yes;resizable:off;dialogHeight:380px;dialogWidth:550px;unadorne:yes;help:no");
}

//����������������
var X = 250; // x position
var Y = 250; // y position
var W = 650; // width
var H = 360; // height
var s="resizable=yes,left="+X+",top="+Y+",screenX="+X+",screenY="+Y+",width="+W+",height="+H; // Do not edit below this line.
function popZdy(U){
var SGW = window.open(U,'TheWindow',s)
}
  
//ע��ҳ��
function popReg(Y){
window.open (Y,'newwindow7','height=300,width=450,top='+(screen.height-300)/2+',left='+(screen.width-450)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//���Excel�������ڣ�����Ϊ����A4ֽ
function popOut(Q){
window.open (Q,'newwindow1','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//�������Ӵ��ڣ���ֹ��������
function popAdd(V){
window.open (V,'newwindow6','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//�������Ӵ��ڣ��ſ���������
function popAdd2(X){
window.open (X,'newwindow2','height=550,width=850,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//�����޸Ĵ���
function popMod(W){
window.open (W,'newwindow3','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no')
}

//�����޸Ĵ��ڣ�����
function popMod_w(V){
window.open (V,'newwindow6','height=500,width=1000,top='+(screen.height-500)/2+',left='+(screen.width-1000)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//��ӡԤ�����ڣ�����Ϊ����A4ֽ
function popPrn(U){
window.open (U,'newwindow4','height=550,width=750,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//���ͼ���������ڣ�����Ϊ����A4ֽ
function popChart(P){
window.open (P,'newwindow5','height=550,width=800,top='+(screen.height-550)/2+',left='+(screen.width-800)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//�ճ����� �ĵ�������
function popRcgl(V){
window.open (V,'newwindow6','height=600,width=850,top='+(screen.height-550)/2+',left='+(screen.width-750)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//������������
function popHelp(Y){
window.open (Y,'newwindow5','height=400,width=400,top='+(screen.height-400)/2+',left='+(screen.width-400)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//�������Ϣ����
function MiniX(U){
var MSGW = window.open(U,'TheWindow','resizable=yes,scrollbars=yes,top='+(screen.height-350)/2+',left='+(screen.width-350)/2+',width=350,height=350')
}

//�ʵݱ�ǩ��ӡ����
function popYdbq(G){
window.open (G,'ydbqwindow','height=500,width=400,top='+(screen.height-500)/2+',left='+(screen.width-400)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}


//��ѡ��Ա��������
function selhy() {
window.open("../../choose/vip/selhy.aspx",null,'height=300,width=450,top='+(screen.height-300)/2+',left='+(screen.width-450)/2+',directories = no,status=no,toolbar=no,menubar=no,location=no,titlebar = no,scrollbars = yes');
}

//��ѡ��Ա��������2
function selhy2() {
window.open("../../choose/vip/selhy.aspx",null,'height=300,width=450,top='+(screen.height-300)/2+',left='+(screen.width-450)/2+',directories = no,status=no,toolbar=no,menubar=no,location=no,titlebar = no,scrollbars = yes');
}

//���������޸Ĵ���
function popMiniMod(J){
window.open (J,'newwindowJ','height=400,width=650,top='+(screen.height-400)/2+',left='+(screen.width-650)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no')
}

//ģ�嵯�����ڣ���
function popMb(M){
window.open (M,'newwindow9','height=700,width=950,top='+(screen.height-700)/2+',left='+(screen.width-950)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//�������Ӵ���
function popSqzj(V){
window.open (V,'newwindow6','height=360,width=600,top='+(screen.height-360)/2+',left='+(screen.width-600)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no')
}

//������վ���´���
function popWeb(E){
window.open (E,'newwindow2','height=700,width=950,top='+(screen.height-700)/2+',left='+(screen.width-950)/2+',toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no') 
}

//CRM��Ʒ��Ϣ
function opencpxx(str)
{
    var num=Math.random();
    window.showModalDialog("../ggym/ChangPinMx.aspx?tmp="+num+"&id="+str+"","window", "dialogWidth:750px;DialogHeight=680px;status:no;scroll=yes;help:no");  
}

//ȫѡ/ȫ��ѡ
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

//ȫѡ��ȡ����ѡ��
function CheckAll(form)
{
    for (var k=0;k<form.elements.length;k++)
    {
        var e = form.elements[k];
        //�жϲ���ѡ����
        if (e.name != 'chkall'){
           //�ж�ѡ���� �߼����� 
           if (e.name != 'gjjs'){
           //�ж�ѡ���� �������� 
             if (e.name != 'gltj'){
                e.checked = form.chkall.checked;
             }
           }
        }
    }
}

//��֤��ѡ�򣺱�ѡһ��
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
	        alert('��֧�ֶ�ѡ����ѡ��һ����¼��ִ�д˲�����')
	        return false;
	    }
    }
	else
	{
		alert('�뵥��[ѡ��]�еĸ�ѡ��ѡ��һ����¼����ִ�д˲�����');
		return false;
	}
	
}

//ɾ������֤��ѡ�򣺱�ѡһ������
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
		alert('�뵥��[ѡ��]�еĸ�ѡ��ѡ��һ���������¼����ִ��ɾ��������');
		return false;
	}
	
    if (window.confirm("ɾ�����޷��ٻָ���ȷ��Ҫ����ִ����"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

//��������֤��ѡ�򣺱�ѡһ������
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
		alert('�뵥��[ѡ��]�еĸ�ѡ��ѡ��һ���������¼����ִ�д˲�����');
		return false;
	}
	
    if (window.confirm("ȷ��Ҫ����ִ����"))
    {
        return true;
    }
    else
    {
        return false;
    }
}

/*ȫѡ*/
function chkAllw()
{
	for(var i=0;i<document.form1.elements.length;i++)
	{
		document.form1.elements[i].checked=true;
	}
}
/*ȫ��*/
function nochkAll()
{
	for(var i=0;i<document.form1.elements.length;i++)
	{
		document.form1.elements[i].checked=false;
	}
}
/*��ѡ*/
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

/*ҳ����Ҷ�λ��ʼ*/
/*ҳ����Ҷ�λ����*/

/*��ӡ1��hkshow1 + GridView1*/
function PrintPage1()
{
    document.getElementById("hkshow1").style.visibility="hidden";
    document.getElementById("GridView1") .border="1";
    print();
    document.getElementById("hkshow1").style.visibility="visible";
    document.getElementById("GridView1") .border="0";
}

/*��ӡ2��hkshow1 + hkshow2 + GridView1*/
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

/*��ӡ3��hkshow1 + hkshow2 + hktable*/
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

/*��ӡ4��hkshow1*/
function PrintPage4()
{
    document.getElementById("hkshow1") .style.visibility="hidden";
    print();
    document.getElementById("hkshow1") .style.visibility="visible";
}

/*��ӡ5��hkshow1 + hkshow2 + hkshow3 + hktable*/
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

/*��ӡ6��hkshow1 + GridView1 + GridView2 + GridView3*/
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

/*��ӡ7��hkshow1 + GridView1 + GridView2*/
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