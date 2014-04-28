mst(document).ready(function ($) {
   ///Create button////
   var m = $('#url_site').val().replace('index.php/',''),
       gt = $('#customer_group_id').val();
   if(gt==1){
       $('.wrap_pdp_design').append('<div class="clear"></div><button class="button" id="mst_make_param"><span><span>Create</span></span></button><textarea id="param_value"></textarea>');
       $('#param_value').css({'max-width':'100%','width':'100%','height':'220px'});
   }
   $('#mst_make_param').click(function(){
        var f = $('#skin_url').val(),
            g = $('#base_dir').val(),
            ml = $('#media_url').val(),
            k = $('#qty').val(),
            e = $("#custom_price").val(),
            bof, item_info, 
            productId = $('#product_id').val();
        resetTextForm();
        var i = $('.product-image .item').length,
            p = $('#list_color li.active').attr("did"),
            q = $('#list_color li.active').attr("inlay"),
            img_f, img_b, color_id = 0,
            price = $('.add_to_box .price_val').text(),
            size_arr = '',
            editid = $('#edit_id').val(),
            p = $('#list_color li.active').attr("did");
        $('.tshirt-size li.size_option_' + p).each(function () {
            var a = $(this).children('.size_qty').val(),
                label = $(this).children('label').text();
            size_arr += ';' + label + '-' + a
        });
        if ($('.design-color-image li.active').length > 0) {
            img_f = $('.design-color-image li.active').attr("relf"), img_b = $('.design-color-image li.active').attr("relb"), color_id = $('.design-color-image li.active').attr("id")
        } else {
            img_f = $('#list_color li.active').attr("relf"), img_b = $('#list_color li.active').attr("relb")
        };
        var j = $('#list_color li.active').attr("tt") + ';' + m + 'media/pdp/images/' + img_f + ';' + m + 'media/pdp/images/' + img_b + ';' + q + ';' + p + ';' + color_id + ';' + price + size_arr + ';' + editid,
            i__ = 0;
        if (i > 0) {
            $('.product-image .item').each(function () {
                if ($(this).children('img').hasClass('img_up')) {
                    $(this).css("height", $(this).height() + 'px');
                    var d = $(this).attr("src"),
                        w = $(this).attr("w"),
                        h = $(this).attr("h"),
                        scx = $(this).attr("scx"),
                        scy = $(this).attr("scy"),
                        pos = $(this).attr("pos"),
                        angle = $(this).attr("angle2"),
                        css = $(this).attr("style");
                    img_css = $(this).children('img').attr("style");
                    var d = $(this).children('img').attr("src");
                    if ($(this).parent().attr("id") == 'wrap_inlay_front') {bof = 'front';} else { bof = 'back';} 
                    $.ajax({
                        url: f + "saveallimages.php",
                        type: "post",
                        data: {
                            data: d,
                            bof: bof,
                            base_dir: g
                        },
                        beforeSend: function () {
                            $('.pdploading').show()
                        },
                        success: function (b) {
                            $('.pdploading').hide();
                            b = b.split('==');
                            j += 'ϣ' + b[1] + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + img_css + '╦' + b[0] + '╦' + scx + '╦' + scy;
                            if (++i__ == i) {
                                $('#param_value').html(j);
                            }
                        }
                    })
                } else {
                    $(this).css("height", $(this).height() + 'px');
                    var d = $(this).attr("src"),
                        w = $(this).attr("w"),
                        h = $(this).attr("h"),
                        scx = $(this).attr("scx"),
                        scy = $(this).attr("scy"),
                        pos = $(this).attr("pos"),
                        angle = $(this).attr("angle2"),
                        css = $(this).attr("style");
                    if ($(this).hasClass("image_item")) {
                        item_info = $(this).children('img').attr("style");
                        item_info = item_info + '╦' + $(this).children('img').attr("src")
                    } else {
                        if ($(this).hasClass("text-image")) {
                            item_info = 'text╦' + $(this).children('p').attr("style");
                            item_info = item_info + '╦' + $(this).children('p').text()
                        }
                    } 
                    if ($(this).parent().attr("id") == 'wrap_inlay_front') {bof = 'front';} else {bof = 'back'; }
                    j += 'ϣ' + bof + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + item_info + '╦' + scx + '╦' + scy;
                    if (++i__ == i) {
                        $('#param_value').html(j);
                    }
                }
            })
        } else {
            $('#param_value').html(j);
        };
        $(".product-image .active").removeClass("active");
        return false
   }); 

    /////////////////////////Remove some PDP function//////////////////////////////////////////////////////////////////////////
        $('.add_to_box *').remove();
        $('.add_to_box').append('<button class="save_design button"><span><span>Save Design</span></span></button>');
        //$('.add_to_box').append('<form action="" method="post" id="save_design_form"><input type="hidden" id="design_value" name="design_value" value="" /><input type="hidden" id="product_id_design" name="product_id_design" value="" /></form>');
        $('#save_design_btn_not_login, #save_design_btn').remove();

        $('.save_design').click(function(){
            var f = $('#skin_url').val(),
                g = $('#base_dir').val(),
                ml = $('#media_url').val(),
                k = $('#qty').val(),
                e = $("#custom_price").val(),
                bof, item_info, 
                productId = $('#product_id').val();
            resetTextForm();
            var i = $('.product-image .item').length,
                p = $('#list_color li.active').attr("did"),
                q = $('#list_color li.active').attr("inlay"),
                img_f, img_b, color_id = 0,
                price = $('.add_to_box .price_val').text(),
                size_arr = '',
                editid = $('#edit_id').val(),
                p = $('#list_color li.active').attr("did");
            $('.tshirt-size li.size_option_' + p).each(function () {
                var a = $(this).children('.size_qty').val(),
                    label = $(this).children('label').text();
                size_arr += ';' + label + '-' + a
            });
            if ($('.design-color-image li.active').length > 0) {
                img_f = $('.design-color-image li.active').attr("relf"), img_b = $('.design-color-image li.active').attr("relb"), color_id = $('.design-color-image li.active').attr("id")
            } else {
                img_f = $('#list_color li.active').attr("relf"), img_b = $('#list_color li.active').attr("relb")
            };
            var j = $('#list_color li.active').attr("tt") + ';' + m + 'media/pdp/images/' + img_f + ';' + m + 'media/pdp/images/' + img_b + ';' + q + ';' + p + ';' + color_id + ';' + price + size_arr + ';' + productId + ';' + editid,
                i__ = 0;
            $('.product-image .item').each(function () {
                if ($(this).children('img').hasClass('img_up')) {
                    $(this).css("height", $(this).height() + 'px');
                    var d = $(this).attr("src"),
                        w = $(this).attr("w"),
                        h = $(this).attr("h"),
                        scx = $(this).attr("scx"),
                        scy = $(this).attr("scy"),
                        pos = $(this).attr("pos"),
                        angle = $(this).attr("angle2"),
                        css = $(this).attr("style");
                    img_css = $(this).children('img').attr("style");
                    var d = $(this).children('img').attr("src");
                    $.ajax({
                        url: f + "saveallimages.php",
                        type: "post",
                        data: {
                            data: d,
                            bof: bof,
                            base_dir: g
                        },
                        beforeSend: function () {
                            $('.pdploading').show()
                        },
                        success: function (b) {
                            $('.pdploading').hide();
                            if ($(this).parent().attr("id") == 'wrap_inlay_front') {bof = 'front';} else {bof = 'back';} 
                            b = b.split('==');
                            j += 'ϣ' + b[1] + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + img_css + '╦' + b[0] + '╦' + scx + '╦' + scy;
                            if (++i__ == i) {
                                //$('#design_value').val(j);  
                                /////////////////////////////////////////////////
                                $(".product-image .active").removeClass("active");
                                add_to_cart(j);
                                //var cur_url = $('#current_url').val();
                                //$('#product_id_design').val($('#cid').val());
                                //$('#save_design_form').attr("action",cur_url);
                                //$('#save_design_form').submit();
                                /////////////////////////////////////////////////                              
                            }
                        }
                    })
                } else {
                    $(this).css("height", $(this).height() + 'px');
                    var d = $(this).attr("src"),
                        w = $(this).attr("w"),
                        h = $(this).attr("h"),
                        scx = $(this).attr("scx"),
                        scy = $(this).attr("scy"),
                        pos = $(this).attr("pos"),
                        angle = $(this).attr("angle2"),
                        css = $(this).attr("style");
                    if ($(this).hasClass("image_item")) {
                        item_info = $(this).children('img').attr("style");
                        item_info = item_info + '╦' + $(this).children('img').attr("src")
                    } else {
                        if ($(this).hasClass("text-image")) {
                            item_info = 'text╦' + $(this).children('p').attr("style");
                            item_info = item_info + '╦' + $(this).children('p').text()
                        }
                    } 
                    if ($(this).parent().attr("id") == 'wrap_inlay_front') {
                        bof = 'front'
                    } else {
                        bof = 'back'
                    }
                    j += 'ϣ' + bof + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + item_info + '╦' + scx + '╦' + scy;
                    if (++i__ == i) {
                        //$('#design_value').val(j);
                        /////////////////////////////////////////////////
                        $(".product-image .active").removeClass("active");
                        add_to_cart(j);
                        //var cur_url = $('#current_url').val();
                        //$('#product_id_design').val($('#cid').val());
                        //$('#save_design_form').attr("action",cur_url);
                        /////////////////////////////////////////////////
                    }
                }
            });
            
            return false
        });
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
function add_to_cart(option){
    var baseUrl = $('#url_site').val();
	var productId = $("#product_id").val();
	$.ajax({
		url: baseUrl + 'pdp/index/addToCart',
		type: 'POST',
		data: {
			product_id: productId,
			qty: 1,
			option: option,
		},
		beforeSend: function () {
			$('.pdploading').show()
		},
		success: function (a) {
			$('.pdploading').hide();
			if (a == "") {
				window.location = baseUrl + 'checkout/cart'
			} else {
				console.log(a)
			}
		}
	});
}
function resetTextForm() {
    $('#use_shadow').attr("checked", false);
    $('.font_shape .h-shadow,.font_shape .v-shadow, .font_shape .blur, .font_shape .color').hide();
    $('#add_text_action').show();
    $("#edit_text_action").hide();
    $('#add_text_input').val("");
    $('#select_font_span').html("Arial").css("font-family", "Arial");
    $('#select_font_size').val("20");
    $('#h-shadow, #v-shadow, #t-blur').val(0);
    $('#font_color_div > div').css("backgroundColor", "#444");
    $('#font_outline_color > div').css("backgroundColor", "#fff");
    $('#change_text_type a.active').removeClass("active")
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$('#product-options-wrapper dl dt').each(function(){
    if($(this).children('label').text()=='pdpinfo'){
        $(this).parent().addClass("pdp_info").hide();
        if($('#design_info_current').val()!=''){
            $(this).next().find('input').val($('#design_info_current').val());
        }else{
            $(this).next().find('input').val($('#design_info_custom').val());
        }
        
    }
});
$('.group-des').hide();
$('.group-desgdes_'+$('#t-shirt-type').val()).show();

/////////////////cart///////////////////////////////////////////////////////////////////////////////////////////
/*
var cart_i = 0;
$('.product-options dl.item-options > dt').each(function(){
    cart_i++;
        if($(this).text()=='pdpinfo'){
            $(this).hide();
            $(this).next().addClass("image_final"+cart_i);
            var src_final = $('.image_final'+cart_i).html().split("+");
            if(src_final.length >0){
                var img_first = src_final[0].split(";"),
                inlay_f = img_first[3].split("-"),
                inlay_f_info = inlay_f[0].split(','),
                inlay_b_info = inlay_f[1].split(',');
                $('.image_final'+cart_i).html('<a class="inline1" href="#img_f_result_'+cart_i+'">Click to view</a>');
                $('.image_final'+cart_i).append('<div style="display: none;"><div id="img_f_result_'+cart_i+'" class="img_result"></div></div><div style="display: none;"><div id="img_b_result_'+cart_i+'" class="img_result"></div></div>');
                $('#img_f_result_'+cart_i).append('<img src="'+img_first[1]+'" alt="img_result_front" /><div class="wrap_inlay"></div>');
                $('#img_b_result_'+cart_i).append('<img src="'+img_first[2]+'" alt="img_result_front" /><div class="wrap_inlay"></div>'); 
                $('#img_f_result_'+cart_i+ ' .wrap_inlay').css({"position":"absolute","width":inlay_f_info[0],"height":inlay_f_info[1],"top":inlay_f_info[2]+'px',"left":inlay_f_info[3]+'px'});
                $('#img_b_result_'+cart_i+ ' .wrap_inlay').css({"position":"absolute","width":inlay_b_info[0],"height":inlay_b_info[1],"top":inlay_b_info[2]+'px',"left":inlay_b_info[3]+'px'});
                for(ii=1;ii<src_final.length;ii++){
                    var items = src_final[ii].split("!");
                    if(items[0]=='back'){
                        if(items[6]!='text'){
                            $('#img_b_result_'+cart_i+ ' .wrap_inlay').append('<div class="c_items" style="'+items[5]+'"><img style="'+items[6]+'" src="'+items[7]+'" alt="img" /></div>');
                        }else{
                            $('#img_b_result_'+cart_i+ ' .wrap_inlay').append('<div class="c_items" style="'+items[5]+'"><p style="'+items[7]+'">'+items[8]+'</p></div>');
                        }
                        
                    }else{
                        if(items[6]!='text'){
                            $('#img_f_result_'+cart_i+ ' .wrap_inlay').append('<div class="c_items" style="'+items[5]+'"><img style="'+items[6]+'" src="'+items[7]+'" alt="img" /></div>');
                        }else{
                            $('#img_f_result_'+cart_i+ ' .wrap_inlay').append('<div class="c_items" style="'+items[5]+'"><p style="'+items[7]+'">'+items[8]+'</p></div>');
                        }
                    }
                }
                $(".group"+cart_i).colorbox({rel:'group'+cart_i});
                
            }
                //id = $(this).attr("id"),
                
        
    }
});
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var link = $('.custom_link a').attr("href");
$(".group1").colorbox({rel:'group1'});
//$(".iframe").colorbox({iframe:true, width:"60%", height:"60%"});
$(".inline1").colorbox({inline:true,transition:'elastic', width:"",title:'<a href="'+link+'&ct=1">Custom it</a>'});

});