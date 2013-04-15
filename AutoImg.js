//AutoImg(圖片, 要設置圖片寬, 要設置圖片高);  
//<style>.content{width:200px;height:300px;overflow:hidden;}
//<div class="content"><img onload="javascript:AutoImg(this,"200","300"); src='images/test.jpg'></div>


function AutoImg(ImgD,FWidth,FHeight){
		var image = new Image();
		image.src = ImgD.src;
		var vImg = image.width / image.height;   //圖片比例
		var vSet = FWidth / FHeight;    //設置比例
		if (image.width > 0 && image.height >0) {

			//如果設置圖片是正方形
			if(vSet == 1){

				//如果圖片是橫的
				if (vImg >1) {

					//如果圖片的寬大於設置寬
					if (image.height>FHeight) {
						ImgD.height = FHeight;
						ImgD.width = (image.width * FHeight) / image.height;
					}else{
						ImgD.height = FHeight;
						ImgD.width = (FHeight / image.height) * image.width;
					}

				}else{//如果圖片是直的
					
					if (image.width>FWidth) {
						ImgD.width = FWidth;
						ImgD.height = (image.height / image.width) * FWidth;
					}else{
						ImgD.width = FWidth;
						ImgD.height = (FHeight / image.width) * image.height;
					}
				}
			
			}
			
			//如果設置圖片是橫方形
			if (vSet > 1) {
				if(vImg>=vSet){
					ImgD.height = FHeight;
					ImgD.width  = (FHeight / image.height) * image.width;
				}else{
					ImgD.width  = FWidth;
					ImgD.height = (FWidth / image.width) * image.height;
				}

			}else{//如果設置圖片是直方形
				if(vImg>=vSet){
					ImgD.height = FHeight;
					ImgD.width  = (FHeight / image.height) * image.width;
				}else{
					ImgD.width  = FWidth;
					ImgD.height = (FHeight / FWidth) * image.height;
				}
			};

		};
	}
