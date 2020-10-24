//@name:双十一喵喵币脚本
//@author:孤木成林
//@tip:持续更新修复BUG,请关注微信公众号【孤木成林】
//@time:2020.10.24

auto();
console.setSize(800,500);
console.show(); //调用控制台显示状态
launchApp("手机淘宝") //启动手机淘宝
var height = device.height; //定义手机屏幕高度
var width = device.width; //定义手机屏幕宽度
//设置脚本坐标点击所适合的屏幕宽高；请根据自己屏幕来决定
setScreenMetrics(width, height);
sleep(2000); //等待加载
console.log("撸一下猫");
lumao();
while(1)
{

	if(text("我的猫，点击撸猫").exists())
	{
		text("我的猫，点击撸猫").click();//弹出做任务的界面
		console.log("弹出任务");
		click(933,2034);
		sleep(2000);
	}

	else if(!(text("我的猫，点击撸猫").exists())&&!(text("去浏览").exists())&&!(text("去观看").exists())&&!(text("签到").exists())&&!(text("领取奖励").exists())&&!(text("去搜索").exists()))
	{
		toast("结束脚本");
		console.log("结束脚本");
		back();
		engines.stopAll();
	}
	else
	{
		maintask();
	}

}


function maintask()
{

	if(text("去完成").exists() || text("去浏览").exists() || text("签到").exists()|| text("去观看").exists()|| text("去搜索").exists()|| text("领取奖励").exists())
	{
		if(text("去浏览").exists())
		{
			toast("任务-去浏览-");
			console.log("开始浏览");
			text("去浏览").findOne().click();
			sleep(2500);
			console.log("请稍候");
			swipe(width / 2, height - 500, width / 2, 0, 500);
			sleep(9000);
			swipe(width / 2, height - 500, width / 2, 0, 500);
			sleep(10000);
			swipe(width / 2, height - 500, width / 2, 0, 500);
			sleep(3000);
			back();
			console.log("退出下一个");
			sleep(1000);
		}
		else if(text("搜一搜").exists())
		{
			toast("任务搜一搜-");
			text("搜一搜").findOne().click();

				sleep(2500);
				swipe(width / 2, height - 600, width / 2, 0, 500);
				sleep(3500);
				swipe(width / 2, height - 600, width / 2, 0, 500);
				sleep(10000);
				swipe(width / 2, height - 600, width / 2, 0, 500);
				sleep(3000);
				back();
				sleep(1000);
			}
		
		else if(text("签到").exists())
		{
			toast("任务-去签到-");
			console.log("签到");
			text("签到").findOne().click();
			sleep(1500);
			text("领取奖励").findOne().click();
			sleep(3000);
			sleep(1600);
		}
	else if(text("去搜索").exists())
		{
			toast("任务-搜索-");
			console.log("去搜索");
			text("去搜索").findOne().click();
			sleep(6500);
			sleep(15000);
			back();
			sleep(1600);
		}
		else if(text("去观看").exists())
		{
			toast("任务-去观看-");
			console.log("去观看");
			text("去观看").findOne().click();
			sleep(15500);
			sleep(3000);
			back();
			sleep(1600);
		}
		else if(text("领取奖励").exists())
		{
			console.log("领取奖励");
			toast("任务-领取奖励-");
			text("领取奖励").findOne().click();
			sleep(1600);
		}
	
}
	sleep(3000);
	toast("本轮运行结束~");
}

function lumao()
{
	if(text("我的猫，点击撸猫").exists())
	{
		t=50
		while(t)
		{
			text("我的猫，点击撸猫").findOne().click();//弹出做任务的界面
			sleep(200);
			t=t-1
		}
	}
}
