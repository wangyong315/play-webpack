/* -----------------------cookie登录----------------------- */
/*封装cookie*/

//创建cookie	
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}
//获取cookie
function getCookie(name)
{
	var arr=document.cookie.split('; ');
	var i=0;
	for(i=0;i<arr.length;i++)
	{
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}
//删除cookie
function removeCookie(name)
{
	setCookie(name, '1', -1);
}
/*登录*/
/*******************/
  	var accoundchecked = false;
  	var nickchecked = false;
  	var emailchecked = false;
  	var passchecked1 = false;
  	var passchecked2 = false;
  	//登录名称验证
  	var account = document.getElementById("u5_input");
  	account.onblur = function(){
  		var errorTip = document.getElementById("u32");
  		if(/^\w{5,15}$/.test(this.value)){
  			errorTip.style.display = "none";
  			accoundchecked = true;
  		} else{
  			errorTip.style.display = "block";
  		}	
  	}
  	/**昵称验证**/
  	var nickname = document.getElementById("u8_input");
  	nickname.onblur = function(){
  		var errorTip = document.getElementById("u34");
  		if(/^[\u2E80-\u9FFF]+$/.test(this.value)){
  			nickchecked = true;
  			errorTip.style.display = "none";
  		} else{
  			errorTip.style.display = "block";
  		}	
  	}
  	
  	/**电子邮箱**/
  	var emailname = document.getElementById("u11_input");
  	emailname.onblur = function(){
  		var errorTip = document.getElementById("u36");
  		if(/^\w+@\w+(\.\w+)+$/.test(this.value)){
  			emailchecked = true;
  			errorTip.style.display="none"; 
  		} else{
  			errorTip.style.display = "block";
  		}
  		
  	}
  	/***输入密码*/
  	var passCode = document.getElementById("u14_input");	
  	passCode.onblur = function(){
  		var errorTip = document.getElementById("u38");
  		if(/^\w{5,15}$/.test(this.value)){
  			errorTip.style.display = "none";
  			passchecked1 = true;
  		} else{
  			errorTip.style.display = "block";
  		}	
  	}
  	/**重新输入密码*/
  	var passcode = document.getElementById("u17_input");
  	passcode.onblur = function(){
  		if(this.value == passCode.value){
  		passchecked2 = true;
  		} else{
  		this.value = "两次密码不一致，请重新输入！";
  		console.log("dddd")
  		}
  	 }
  	/*提交*/
  	var Btn = document.getElementById("u30");
  	var Btntj = document.getElementById("u40");
  	Btn.onclick = function(){
  		if(accoundchecked&&
			  	nickchecked&&
			  	passchecked1&&
			  	emailchecked&&
			  	passchecked2){
			  		Btntj.style.display = "none"
			  	}
  	}
  </script>

		


	/***********************/		
		
	var btn=$("#loginButton");
		btn.onclick=function(){
			var username1=$("userName").value;
			var password1=$("userpass").value;
			var username=getCookie("suername");
			var password=getCookie("password");
			var mobile=getCookie("mobile");
			var email=getCookie("email");
			if((username1==username||username1==mobile||username1==email)&&password1==password&&username1!==""&&password!==""){
				alert("登陆成功");
				window.location.href="shouye.html";
			}else{
				alert("用户名密码错误")
			}
		}
