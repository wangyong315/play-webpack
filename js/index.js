require(["config"],function(config){
	require(["jquery","index","swiper"],function(jq,index,sw){
		jq("#clientSer").hover(
			  function () {
			    jq(".list").show();
			  },
			  function () {
			    jq(".list").hide();
			  }
		);
		jq("#webf1").hover(
			function(){
				jq("#yilou").show();
			},
			function(){
				jq("#yilou").hide();
			}
		);
		var mySwiper = new Swiper('.swiper-container', {
				direction: 'horizontal',
				loop: true,
//				autoplay:ture,
				// 如果需要前进后退按钮
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
				// 如果需要分页器
   				pagination: '.swiper-pagination',
    
		})
			
		jq('.all-goods .item').hover(function(){
	
			jq(this).addClass('active').find('s').hide();
	
			jq(this).find('.product-wrap').show();
	
		},function(){
	
			jq(this).removeClass('active').find('s').show();
	
			jq(this).find('.product-wrap').hide();
	
		});
		//
		jq(window).scroll(function(){
			var dd=jq(".FixedTop")[0];
			var _top = jq(window).scrollTop();
			if(_top>500){
				dd.style.visibility="visible";
			}else{
				dd.style.visibility="hidden";
			}
		})
		
		//
		/***************banner******************/
		 var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay:2000,
			    
			    // 如果需要前进后退按钮
			    nextButton: '.swiper-button-next',
			    prevButton: '.swiper-button-prev',
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
			    
			  })        
					
		/***************************************/
	});

		
})