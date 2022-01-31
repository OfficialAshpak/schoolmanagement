function addSwitcher()
{
	var dzSwitcher = '<div class="styleswitcher-right"> <div class="switcher-btn-bx"> <a class="switch-btn"> <span class="fa fa-cog"></span> </a> </div><div class="styleswitcher-inner"> <h6 class="switcher-title">Color Skin</h6> <ul class="color-skins"> <li><a class="theme-skin skin-1" href="?theme=css/skin/skin-1" title=""></a></li><li><a class="theme-skin skin-2" href="?theme=css/skin/skin-2" title=""></a></li><li><a class="theme-skin skin-3" href="?theme=css/skin/skin-3" title=""></a></li><li><a class="theme-skin skin-4" href="?theme=css/skin/skin-4" title=""></a></li></ul> </div></div>';
	
	if($("#dzSwitcher").length == 0) {
		jQuery('body').append(dzSwitcher);
	}
}

jQuery(window).on('load',function(){
	
	//=== Switcher panal slide function	=====================//
	jQuery('.styleswitcher').animate({
		'left': '-220px'
	});
	jQuery('.styleswitcher-right').animate({
		'right': '-220px',
		'left': 'auto'
	});
	jQuery('.switch-btn').addClass('closed');
	//=== Switcher panal slide function END	=====================//
	
});
	
$(function(){		
	"use strict";
	
	addSwitcher();
	//=== Switcher panal slide function	=====================//
	jQuery('.switch-btn').on('click',function () {	
		if (jQuery(this).hasClass('open')) {
			jQuery(this).addClass('closed');
			jQuery(this).removeClass('open');
			jQuery('.styleswitcher').animate({
				'left': '-220px'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '-220px',
				'left': 'auto'
			});
		} else {
			if (jQuery(this).hasClass('closed')) {
			jQuery(this).addClass('open');
			jQuery(this).removeClass('closed');
			jQuery('.styleswitcher').animate({
				'left': '0'
			});
			jQuery('.styleswitcher-right').animate({
				'right': '0',
				'left': 'auto'
			});
			}
		}	
	});
	//=== Switcher panal slide function END	=====================//

	//=== Color css change function	=====================//
    // Color changer
    jQuery(".skin-1").on('click',function(){
        jQuery(".skin").attr("href", "assets/css/color/color-1.css");
		jQuery(".menu-logo img").attr("src", "assets/images/logo.png");
		jQuery(".header-transparent .menu-logo img").attr("src", "assets/images/logo-white.png");
		jQuery(".pt-logo img").attr("src", "assets/images/logo-white.png");
        return false;
    });
    jQuery(".skin-2").on('click',function(){
        jQuery(".skin").attr("href", "assets/css/color/color-2.css");
		jQuery(".menu-logo img").attr("src", "assets/images/logo-2.png");
		jQuery(".header-transparent .menu-logo img").attr("src", "assets/images/logo-white-2.png");
		jQuery(".pt-logo img").attr("src", "assets/images/logo-white-2.png");
        return false;
    });
    jQuery(".skin-3").on('click',function(){
        jQuery(".skin").attr("href", "assets/css/color/color-3.css");
		jQuery(".menu-logo img").attr("src", "assets/images/logo-3.png");
		jQuery(".header-transparent .menu-logo img").attr("src", "assets/images/logo-white-3.png");
		jQuery(".pt-logo img").attr("src", "assets/images/logo-white-3.png");
        return false;
    });
	jQuery(".skin-4").on('click',function(){
        jQuery(".skin").attr("href", "assets/css/color/color-4.css");
		jQuery(".menu-logo img").attr("src", "assets/images/logo-4.png");
		jQuery(".header-transparent .menu-logo img").attr("src", "assets/images/logo-white-4.png");
		jQuery(".pt-logo img").attr("src", "assets/images/logo-white-4.png");
        return false;
    });
	//=== Color css change function	=====================//	
	
});

/* Theme Panel Save */
	
	/*var themeOption = [{'layout':[{'wide','boxed',}],'theme','header','bgcolor','bgpatten'}];*/
	var themeOption = ['themeStandardColor','themeFullColor','layout','header','bgColor',,'bgImage','bgPatten'];
	themeOption['layout'] = ['wide','boxed','frame','frame_value','layout_value'];
	themeOption['themeStandardColor'] = ['skin-1','skin-2','skin-3','skin-4','skin-5','skin-6','skin-7','skin-8','themeStandardColor_value','themeStandardColor_logo'];
	themeOption['themeFullColor'] = ['skin-1','skin-2','skin-3','skin-4','skin-5','skin-6','skin-7','skin-8','themeFullColor_value','themeFullColor_logo'];
	themeOption['header'] = ['fixed','static','header_value'];
	themeOption['bgColor'] = ['#6cc000','#ff0096','#002eff','#00ccd3','#ff2f00','#490bb8','#007df1','#ff0101','bgColor_value'];
	themeOption['bgImage'] =['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bgImage_value'];
	themeOption['bgPatten'] =['pt1.jpg','pt2.jpg','pt3.jpg','pt4.jpg','pt5.jpg','pt6.jpg','pt7.jpg','pt8.jpg','pt9.jpg','pt10.jpg','pt11.jpg','pt12.jpg','bgPatten_value'];

jQuery(document).ready(function(){
	jQuery('.theme-panel-save li a, .theme-panel-save li img').on('click', function() {
			var optionValue =  jQuery(this).attr('dir');
			var optionData =  jQuery(this).parent().parent().attr('val');
			//themeOption[optionData][optionData+'_value'] = data;
			//alert(data+' '+optionData);
			if(optionData == 'bgColor'){
				deleteCookie('bgImage_value');
				deleteCookie('bgPatten_value');
			}else if(optionData == 'bgImage'){
				deleteCookie('bgColor_value');
				deleteCookie('bgPatten_value');
			}else if(optionData == 'bgPatten'){
				deleteCookie('bgColor_value');
				deleteCookie('bgImage_value');
			}else if(optionData == 'themeStandardColor'){
				deleteCookie('themeFullColor_value');
			}else if(optionData == 'themeFullColor'){
				deleteCookie('themeStandardColor_value');
			}else if(optionData == 'themeStandardColor' || optionData == 'themeFullColor'){
				var themeLogo =  jQuery(this).attr('logo');
				setCookie(optionData+'_logo',themeLogo,1);
			}
			setCookie(optionData+'_value',optionValue,1);
	});
	
	
	setThemePanel();
	//deleteAllCookie();
	//alert(document.cookie);
	//deleteCookie('undefined');
	//setCookie('layout','wide',1);
	//setCookie(themeOption[optionData][optionData+'_value'],data,1);
	/*
	Example - store array in a cookie:

	var arr = ['foo', 'bar', 'baz'];
	var json_str = JSON.stringify(arr);
	createCookie('mycookie', json_str);

	Later on, to retrieve the cookie's contents as an array:

	var json_str = getCookie('mycookie');
	var arr = JSON.parse(json_str);
	*/
	
	
});

function themeFramePadding(){
	var themeOptionFrameValue = getCookie('frame_value');
	if(themeOptionFrameValue == ''){
		themeOptionFrameValue = 20;
	}
	
	$("#slider-range-3").unbind().slider({
			min: 20,
			max: 80,
			//value: 20,
			value: themeOptionFrameValue,
			animate:"slow",
			orientation: "horizontal",
			slide: function( event, ui ) {
				frameSlider = ui.value;
				$('#' + this.id).prev().val(frameSlider+"px");
				$( "#bg" ).css('padding',frameSlider+"px");
				setCookie('frame_value',frameSlider,1);
		   }
	});
}

function setThemePanel(){
	jQuery.each(themeOption, function(index, themeOptionItem) {
		themeOptionItemValue = getCookie(themeOptionItem+'_value');
		if(themeOptionItemValue != ''){
				if(themeOptionItem == 'themeStandardColor'){
					jQuery(".skin").attr("href", themeOptionItemValue+".css");
					setThemeLogo(themeOptionItem);
				}else if(themeOptionItem == 'themeFullColor'){
					jQuery(".skin").attr("href", themeOptionItemValue+".css");
					setThemeLogo(themeOptionItem);
				}else if(themeOptionItem == 'layout'){
					jQuery('.'+themeOptionItem+'-view li').removeClass('active');
					jQuery('.'+themeOptionItem+'-view').find('.'+themeOptionItemValue).addClass('active');
					if(themeOptionItemValue == 'frame'){
						jQuery('#ThemeRangeSlider').show('slow');
						jQuery("body").addClass(themeOptionItemValue);
						themeOptionFrameValue = getCookie('frame_value');
						if(themeOptionFrameValue == ''){
							themeOptionFrameValue = 20;
						}
						jQuery('#FramePadding').val(themeOptionFrameValue+"px");
						jQuery("#bg").css('padding',themeOptionFrameValue+"px");
					}else{
						jQuery("body").addClass(themeOptionItemValue);	
					}
				}else if(themeOptionItem == 'header'){
					jQuery('.'+themeOptionItem+'-view li').removeClass('active');
					if( themeOptionItemValue == 'sticky-header'){
						jQuery('.'+themeOptionItem+'-view').find('.header-fixed').addClass('active');	
					}else if( themeOptionItemValue == 'sticky-no'){
						jQuery('.'+themeOptionItem+'-view').find('.header-static').addClass('active');
					}
					jQuery(".main-bar-wraper").addClass(themeOptionItemValue);
				}else if(themeOptionItem == 'bgColor'){
					jQuery('#bg').css('background-color', themeOptionItemValue);
					jQuery('#bg').css('background-image', '');
				}else if(themeOptionItem == 'bgImage'){
					jQuery('#bg').css({backgroundImage: "url("+themeOptionItemValue+")"});
				}else if(themeOptionItem == 'bgPatten'){
					jQuery('#bg').css({backgroundImage: "url("+themeOptionItemValue+")"});
					jQuery("#bg").css( "background-size", "auto");
				}
		}
	});
}

function setThemeLogo(themeOptionItemAttr){
	var logo = getCookie(themeOptionItemAttr+'_logo');
	if(logo != ''){
		jQuery(".logo-header img").attr("src", logo);
	}
}

function setCookie(cname, cvalue, exhours) {
		var d = new Date();
		d.setTime(d.getTime() + (30*60*1000)); /* 30 Minutes*/
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function deleteCookie(cname) {
		var d = new Date();
		d.setTime(d.getTime() + (1)); /* 1/1000 second*/
		var expires = "expires="+ d.toString();
		document.cookie = cname + "=1;" + expires + ";path=/";
}

function deleteAllCookie() {
	jQuery.each(themeOption, function(index, themeOptionItem) {
			deleteCookie(themeOptionItem+'_value');
	});
	location.reload();
}
