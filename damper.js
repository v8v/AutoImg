/* ========================================================
 * AutoImg V1.2
 * http://www.cencen.net
 * ========================================================
 * Copyright 2013 CenCen, Inc.
 * ======================================================== */
//AutoImg(圖片, 要設置圖片寬, 要設置圖片高);  
//<style>.content{width:200px;height:300px;overflow:hidden;}
//<div class="content"><img onload="javascript:AutoImg(this,"200","300"); src='images/test.jpg'></div>
//  $(".home_img").dImg({"width":400,"height":300});
(function($){
  $.fn.dImg = function(options) {
    var defaults={
      "width":null,
      "height":null
    };
    var opts = $.extend({},defaults,options);
    return $(this).each(function() {
      var $this = $(this);
      var oHeight = $this.height(); //图片高度
      var oWidth = $this.width(); //图片宽度

      var image = new Image();
   		var vImg = oWidth / oHeight;   //圖片比例

		  var vSet = opts.width / opts.height;    //設置比例

      if (oWidth > 0 && oHeight > 0) {
        
      var set_width  = 0;
      var set_height = 0;

			//如果設置圖片是正方形
			if(vSet == 1){

				//如果圖片是橫的
				if (vImg >1) {
					//如果圖片的寬大於設置寬
					if (oHeight>opts.height) {
						$(this).height(opts.height);
            set_width = (oWidth * opts.height) / oHeight; 
						$(this).width(set_width);
					}else{
						$(this).height(opts.height);
            set_width = (opts.height / oHeight) * oWidth;
						$(this).width(set_width);
					}

				}else{//如果圖片是直的
					
					if (oWidth>opts.width) {
            set_height = (oHeight / oWidth) * opts.width;
						$(this).width(opts.width);
						$(this).height(set_height);
					}else{
            set_height = (opts.height / oWidth) * oHeight;
						$(this).width(opts.width);
						$(this).height(set_height);
					}
				}
			
			}


			//如果設置圖片是橫方形
			if (vSet > 1) {
				if(vImg>=vSet){
          set_width = (opts.height / oHeight) * oWidth;
          $(this).height(opts.height);
          $(this).width(set_width);
				}else{
          set_height = (opts.width / oWidth) * oHeight;
          $(this).width(opts.width);
          $(this).height(set_height);
				}

			}else{//如果設置圖片是直方形
				if(vImg>=vSet){
          set_width = (opts.Height / oHeight) * oWidth;
          $(this).height(opts.height);
          $(this).width(set_width);
				}else{
          set_height = (opts.height / opts.width) * oHeight;
          $(this).width(opts.width);
          $(this).height(set_height);
				}
			};



        
      };

    });
  };
})(jQuery);
					
