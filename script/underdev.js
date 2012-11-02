$(function(){

	var undv=$('div.project'),
		undv_txt=$('div.project div.bigtxt'),
		undv_total=$('div.project div.bigtxt > section').length,
		undv_prev=$('div.project div.prev'),
		undv_next=$('div.project div.next'),
		undv_butn=$('div.project div.butn'),
		curentSlide=0;
		//curentminpic=0;
		(undv_go2slide=function(n){
			if(n>undv_total-1)n=0;
			if(n<0)n=undv_total-1;
			var left_pic=-400*n;
			//undv_pic.css({'right':left_pic+'px'});
			undv_txt.css({'right':left_pic+'px'});
			curentSlide=n;
			//alert(n);
		})(0);// set active of first li

		nextslide=function(){
			//alert(1);
			undv_go2slide(curentSlide+1);
		};
		prevslide=function(){
			//alert(1);
			undv_go2slide(curentSlide-1);
		};
		var auto=false;
		(autoplay=function(){
			if(auto) return;
			auto=setInterval(nextslide,2500);
		})();
		stopauto=function(){
			clearInterval(auto);
			auto=false;
		};

		undv.mouseout(function(){
			undv_butn.css({opacity:0});
			autoplay();
		});
		undv.mouseover(function(){
			undv_butn.css({opacity:1});
			stopauto();
		});
		
		undv_next.click(function(){
			nextslide();
		});
		undv_prev.click(function(){
			prevslide();
		});
		
		

});