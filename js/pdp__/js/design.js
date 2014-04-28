var mst = jQuery.noConflict();
mst.fn.ForceNumericOnly = function () {
    return this.each(function () {
        mst(this).keydown(function (e) {
            var a = e.charCode || e.keyCode || 0;
            return (a == 8 || a == 9 || a == 46 || (a >= 37 && a <= 40) || (a >= 48 && a <= 57) || (a >= 96 && a <= 105))
        })
    })
};
mst(document).ready(function ($) {
    $('body').prepend('<div class="pdploading no-display">Loading</div>');
    $('body').prepend('<div class="loading_initializing no-display"><div class="p_wrap"><p>Initializing...</p><div class="process_wrap"><span id="process_pdp_ini"></span></div><span id="ini_count">0%</span></div></div>');
    var m = $('#url_site').val().replace('index.php/',''),
        numImages = $("#design_control img").length,
        local_zindex = 1000,
        loaded = 0,
        window_width = $(window).width(),
        left_ini = parseInt((window_width - 400) / 2);
    $('.loading_initializing .p_wrap').css('left', left_ini);
    $("#design_control img").load(function () {
        ++loaded;
        $('span#ini_count').html(parseInt((loaded / numImages) * 100) + '%');
        $('.loading_initializing .process_wrap #process_pdp_ini').css("width", parseInt((loaded / numImages) * 100) + '%');
        if (loaded == numImages) {} else {}
    });
    $('body').append('<div style="display:none;" class="no-display" id="save_original_img_text"></div>');
    $('#product-image-wrap-front,#product-image-wrap-back').attr('z_index', 1000);
    $('#add_text_input').click(function () {
        $('.image_item.active').removeClass("active")
    });
    $('.wrap_inlay').addClass("unloadinlay");
    $('.wrap_inlay').hover(function () {
        $(this).addClass("act2");
        if ($(this).hasClass('unloadinlay')) {
            $(this).removeClass('unloadinlay');
            $(this).append('<div class="wrap_inlay_2" style="z-index: 12; width: 100%; height: 100%;"></div>');
            $('.wrap_inlay_2').click(function () {
                $(".product-image .active").removeClass("active");
                $('.color_att li').hide();
                $('#edit_item_wrap').hide();
                resetTextForm()
            })
        }
    }, function () {
        if ($(this).children('.item.active').length == 0) {
            $(this).removeClass("act2")
        }
    });
    $('.tshirt-size li').prepend('<span class="prev_t">Prev</span>').append('<span class="next_t">Next</span>');
    $('.size_qty, #select_font_size, #h-shadow, #v-shadow, #t-blur').ForceNumericOnly();
    var o = $('#t-shirt-type').val(),
        first_item;
    if (($('#cid').val() == '')||($('#cid').val() == 1)) {
        first_item = $('#list_color li[tt="' + o + '"]:eq(0)')
    } else {
        first_item = $('#list_color li.active')
    }
    $('.color_wrap li, .tshirt-size li').hide();
    var p = first_item.attr("did");
    first_item.addClass("active");
    if ($('#list_color li[tt=' + o + ']').length > 0) {
        $('.color_wrap').show();
        $('#list_color li[tt=' + o + ']').show()
    };
    if ($('.tshirt-size li.size_option_' + p).length > 0) {
        $('.tshirt-size').show();
        $('.tshirt-size li.size_option_' + p).show()
    } else {
        $('.tshirt-size').hide()
    };
    $('.design-color-image li, .design-color-image').hide();
    if ($('.design-color-image li[design=' + p + ']').length > 0) {
        $('.design-color-image').show();
        $('.design-color-image li[design=' + p + ']').show()
    } else {
        $('.design-color-image').hide()
    };
    $('#product-image-wrap-front').prepend('<img id="main_image_front" src="' + m + 'media/pdp/images/no_image.jpg" />');
    $('#product-image-wrap-back').prepend('<img id="main_image_back" src="' + m + 'media/pdp/images/no_image.jpg" />');
    if ($('#list_color li').length > 0) {
        if ($('#list_color li[tt="' + o + '"]').length > 0) {
            if($('#list_color li.active').length > 0){
                var q = first_item.attr("inlay").split("-"),
                    inlay_f = q[0].split(","),
                    inlay_b = q[01].split(",");
                $('#main_image_front').attr("src", m + 'media/pdp/images/' + first_item.attr("relf"));
                $('#main_image_back').attr("src", m + 'media/pdp/images/' + first_item.attr("relb"));
                $('#wrap_inlay_front').css({
                    "width": inlay_f[0] + 'px',
                    "height": inlay_f[1] + 'px',
                    "top": inlay_f[2] + 'px',
                    "left": inlay_f[3] + 'px'
                }).show();
                $('#wrap_inlay_back').css({
                    "width": inlay_b[0] + 'px',
                    "height": inlay_b[1] + 'px',
                    "top": inlay_b[2] + 'px',
                    "left": inlay_b[3] + 'px'
                }).show();
                if(first_item.attr("relb")==''){
                    $('#rotate-180').hide();
                }
            }
        }
    };
    update_total_price();
    $('#t-shirt-type').change(function () {
        var a = $(this).val();
        $('.group-des').hide();
        $('.group-des.gdes_'+a).show();
        $('#list_color li, .design-color-image, .tshirt-size').hide();
        $('#list_color li.active, .design-color-image li.active').removeClass("active");
        $('.color-option .color_price').html('&nbsp;');
        if ($('#list_color li[tt=' + a + ']').length > 0) {
            $('#list_color').show();
            $('#list_color li[tt=' + a + ']').show()
        };
        update_total_price()
    });
    $('#list_color li').click(function () {
        $('#list_color li.active').removeClass("active");
        $(this).addClass("active");
        var a = $(this).attr("relf"),
            relb = $(this).attr("relb"),
            q = $(this).attr("inlay").split("-"),
            inlay_f = q[0].split(","),
            inlay_b = q[01].split(","),
            p = $(this).attr("did");
        $('#main_image_front').attr("src", m + 'media/pdp/images/' + a);
        if(relb!=''){
            $('#rotate-180').show();
            $('#main_image_back').attr("src", m + 'media/pdp/images/' + relb);
        }else{
            $('#rotate-180').hide();
            $('#product-image-wrap-back').removeClass("act").hide();
            $('#product-image-wrap-front').addClass("act").show();
        }
        $('#wrap_inlay_front').css({
            "width": inlay_f[0] + 'px',
            "height": inlay_f[1] + 'px',
            "top": inlay_f[2] + 'px',
            "left": inlay_f[3] + 'px'
        }).show();
        $('#wrap_inlay_back').css({
            "width": inlay_b[0] + 'px',
            "height": inlay_b[1] + 'px',
            "top": inlay_b[2] + 'px',
            "left": inlay_b[3] + 'px'
        }).show();
        $('.design-color-image li, .design-color-image').hide();
        $('.design-color-image li.active').removeClass("active");
        if ($('.design-color-image li[design=' + p + ']').length > 0) {
            $('.design-color-image').show();
            $('.design-color-image li[design=' + p + ']').show()
        };
        $('.tshirt-size, .tshirt-size li').hide();
        if ($('.tshirt-size li.size_option_' + p).length > 0) {
            $('.tshirt-size').show();
            $('.tshirt-size li.size_option_' + p).show()
        };
        $('.tshirt-size li:not(.size_option_' + p + ') input[type=text]').val("0");
        $('.color-option .color_price, .color-option .color_name').html('&nbsp;');
        update_total_price()
    });
    $('.design-color-image li').click(function () {
        var a = $(this).attr("price"),
            color_name = $(this).attr("name");
        $('.color-option .color_name').html(color_name);
        $('.color-option .color_price').html('+ $' + a + ' per item');
        $('.design-color-image li.active').removeClass("active");
        $(this).addClass("active");
        var b = $(this).attr("relf"),
            relb = $(this).attr("relb");
        $('#main_image_front').attr("src", m + 'media/pdp/images/' + b);
        $('#main_image_back').attr("src", m + 'media/pdp/images/' + relb);
        update_total_price()
    });
    $('#rotate-180 a').click(function () {
        $('#edit_item_wrap').hide();
        $('.wrap_inlay .item.active').removeClass("active");
        if ($(this).hasClass("fback")) {
            $('#product-image-wrap-front').removeClass("act").hide();
            $('#product-image-wrap-back').addClass("act").show()
        } else {
            $('#product-image-wrap-front').addClass("act").show();
            $('#product-image-wrap-back').removeClass("act").hide()
        }
        $(this).toggleClass("fback");
        resetTextForm()
    });
    $('.tshirt-size input').change(function () {
        if (($(this).val() == '') || ($(this).val() < 0)) {
            $(this).val(0)
        };
        $(this).val(parseInt($(this).val()));
        update_total_price()
    });

    function update_total_price() {
        var b = $('#list_color li.active').attr("did"),
            price_1 = 0,
            price_2 = 0,
            price_3 = 0,
            total_price = 0,
            total_qty = 0,
            price_size = 0;
        if ($('#list_color li.active').length > 0) {
            price_1 = parseFloat($('#list_color li.active').attr("price"))
        }
        if ($('.design-color-image li.active').length > 0) {
            price_2 = parseFloat($('.design-color-image li.active').attr("price"))
        };
        price_3 = price_1 + price_2;
        $('.tshirt-size li.size_option_' + b).each(function () {
            var a = $(this).children('input.price_size').val(),
                qty = parseInt($(this).children('input.size_qty').val());
            total_qty = total_qty + qty;
            price_size = price_size + a * qty
        });
        if (total_qty == 0) {
            total_qty = 1
        };
        total_price = total_qty * price_3 + price_size;
        $('.price_val').html(total_price.toFixed(2));
        $('#custom_price').val(total_price.toFixed(2))
    };
    if (($('#cid').val() != '')||($('#edit_id').val() != '')||($('#wid').val() != '')) {
        if ($('.design-color-image li.active').length > 0) {
            $('.design-color-image li.active').click()
        } else {
            $('#list_color li.active').click()
        }
        update_inlay_option();
        var r = 1000;
        $('.wrap_inlay .item').each(function () {
            if ($(this).hasClass("image_item")) {
                $(this).draggable({
                    start: function () {
                        var a = $('.product-image.act').attr('z_index'),
                            cid = $(this).find("img").attr("rel");
                        a++;
                        $('.color_att li[rel!=' + cid + ']').hide();
                        $('.color_att li[rel=' + cid + ']').show();
                        $('.product-image.act').attr('z_index', a);
                        $('.product-image .active').removeClass("active");
                        $(this).addClass("active").css({
                            "z-index": a
                        }).find("img").attr("rel", cid);
                        resetTextForm()
                    },
                    drag: function () {
                        var a = parseInt($(this).css("left")) + parseInt($(this).width()) / 2,
                            ne_h = parseInt($(this).css("top")) + parseInt($(this).height()) / 2;
                        $(this).attr("pos", a + ',' + ne_h);
                        $('#edit_item_wrap').show()
                    }
                });
                $(this).rotatable();
                $(this).resizable({
                    aspectRatio: true,
                    handles: 'se',
                    start: function () {},
                    resize: function (a) {
                        $('#edit_item_wrap').show();
                        var b = $(this).find("img").attr("rel");
                        $('.color_att li[rel!=' + b + ']').hide();
                        $('.color_att li[rel=' + b + ']').show();
                        var x = parseFloat($(this).find("img").css("left")),
                            y = parseFloat($(this).find("img").css("top")),
                            nw = $(this).width(),
                            nh = $(this).height(),
                            angle = $(this).attr("angle2"),
                            ne_l = parseFloat($(this).css("left")) + parseFloat($(this).width()) / 2,
                            ne_h = parseFloat($(this).css("top")) + parseFloat($(this).height()) / 2;
                        if ((angle % 45 == 0) || (angle % 90 == 0)) {
                            angle = angle + 0.000000001
                        }
                        var d = angle * Math.PI / 180;
                        var c = Math.cos(d);
                        var s = Math.sin(d);
                        if (c < 0) {
                            c = -c
                        }
                        if (s < 0) {
                            s = -s
                        }
                        var e = (nw * c - nh * s) / (c * c - s * s),
                            h1 = (nh - e * s) / c,
                            wl = nw - e,
                            hl = nh - h1;
                        $(this).attr("pos", ne_l + ',' + ne_h);
                        $(this).find("img").width(e).height(h1).css({
                            "left": (nw - e) / 2,
                            "top": (nh - h1) / 2
                        });
                        $(this).attr("w", e).attr("h", h1)
                    }
                });
                $(this).click(function () {
                    $('#edit_item_wrap').show();
                    var a = $('.product-image.act').attr('z_index');
                    a++;
                    $('.product-image.act').attr('z_index', a);
                    $('.product-image.act .active').removeClass("active");
                    $(this).addClass("active").css({
                        "z-index": a
                    });
                    resetTextForm()
                })
            } else {
                $(this).draggable({
                    containment: "",
                    start: function () {
                        $('#edit_item_wrap').show();
                        var a = $('.product-image.act').attr('z_index');
                        a++;
                        $('.product-image.act').attr('z_index', a);
                        $('.product-image .active').removeClass("active");
                        $(this).addClass("active").css({
                            "z-index": a
                        });
                        changeToEditForm($(this).children('p'))
                    },
                    drag: function () {
                        var a = parseInt($(this).css("left")) + parseInt($(this).width()) / 2,
                            ne_h = parseInt($(this).css("top")) + parseInt($(this).height()) / 2;
                        $(this).attr("pos", a + ',' + ne_h)
                    }
                });
                $(this).rotatabletext();
                $(this).click(function () {
                    $('#edit_item_wrap').show();
                    var a = $('.product-image.act').attr('z_index');
                    a++;
                    $('.product-image.act').attr('z_index', a);
                    $('.product-image .active').removeClass("active");
                    $(this).addClass("active").css({
                        "z-index": a
                    });
                    changeToEditForm($(this).children('p'))
                })
            }
            var f = $(this).css("z-index");
            if (f > r) {
                r = f
            }
            $(this).prepend('<div class="ui-close">X</div>');
            $(".ui-close").click(function () {
                $(this).parent().remove()
            })
        });
        $('.product-image').attr("z_index", r)
    }
    $('#design_control .control_tab .tab_main').click(function () {
        var a = $(this).attr("tab");
        $('#design_control .control_tab .tab_main.active').removeClass("active");
        $(this).addClass("active");
        $('.tab_content').hide();
        $('.' + a).show()
    });
    
    $('.tab_design_image a').click(function () {
        $('.tab_design_image .active').removeClass("active");
        $(this).addClass("active");
        var tab_act = $(this).attr("tab-content");
        $('.content_tab > div').hide();
        $('.content_tab .'+tab_act).show();
    });
    
    update_inlay_option();
    resetTextForm();
    $('#move_item .m_tl').click(function () {
        $('.item.active').animate({
            'left': 0
        }, 600, function () {
            $('.item.active').animate({
                'top': 0
            }, 600);
            var a = parseInt($('.item.active').width()) / 2,
                ne_h = parseInt($('.item.active').height()) / 2;
            $('.item.active').attr("pos", a + ',' + ne_h)
        })
    });
    $('#move_item .m_tr').click(function () {
        var a = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            h_item = $('.item.active').height(),
            ne_l = a - w_item / 2,
            ne_h = h_item / 2;
        $('.item.active').animate({
            'left': parseFloat(a - w_item - 2) + 'px'
        }, 600, function () {
            $('.item.active').animate({
                'top': 0
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_bl').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_item = $('.item.active').width(),
            ne_l = w_item / 2,
            ne_h = a - h_item / 2;
        $('.item.active').animate({
            'left': 0
        }, 600, function () {
            $('.item.active').animate({
                'top': parseFloat(a - h_item - 2) + 'px'
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_br').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_inlay = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            ne_l = w_inlay - w_item / 2,
            ne_h = a - h_item / 2;
        $('.item.active').animate({
            'left': parseFloat(w_inlay - w_item - 2) + 'px'
        }, 600, function () {
            $('.item.active').animate({
                'top': parseFloat(a - h_item - 2) + 'px'
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_tc').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_inlay = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            ne_l = (w_inlay) / 2,
            ne_h = h_item / 2;
        $('.item.active').animate({
            'left': parseFloat(w_inlay - w_item - 2) / 2 + 'px'
        }, 600, function () {
            $('.item.active').animate({
                'top': 0
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_cr').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_inlay = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            ne_l = w_inlay - w_item / 2,
            ne_h = (a) / 2;
        $('.item.active').animate({
            'left': parseFloat(w_inlay - w_item - 2) + 'px'
        }, 600, function () {
            $('.item.active').animate({
                'top': parseFloat(a - h_item - 2) / 2 + 'px'
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_cl').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_inlay = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            ne_l = w_item / 2,
            ne_h = (a) / 2;
        $('.item.active').animate({
            'left': 0
        }, 600, function () {
            $('.item.active').animate({
                'top': parseFloat(a - h_item - 2) / 2 + 'px'
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_bc').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_inlay = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            ne_l = w_inlay / 2,
            ne_h = a - h_item / 2;
        $('.item.active').animate({
            'left': parseFloat(w_inlay - w_item - 2) / 2 + 'px'
        }, 600, function () {
            $('.item.active').animate({
                'top': parseFloat(a - h_item - 2) + 'px'
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#move_item .m_cc').click(function () {
        var a = $('.product-image.act .wrap_inlay').height(),
            h_item = $('.item.active').height(),
            w_inlay = $('.product-image.act .wrap_inlay').width(),
            w_item = $('.item.active').width(),
            ne_l = (w_inlay) / 2,
            ne_h = (a) / 2;
        $('.item.active').animate({
            'left': parseFloat(w_inlay - w_item - 2) / 2 + 'px'
        }, 600, function () {
            $('.item.active').animate({
                'top': parseFloat(a - h_item - 2) / 2 + 'px'
            }, 600)
        });
        $('.item.active').attr("pos", ne_l + ',' + ne_h)
    });
    $('#duplicate_item span').click(function () {
        $('.product-image.act .item.last').removeClass('last');
        var f = parseFloat($('.product-image.act .item.active').css("left"));
        var g = parseFloat($('.product-image.act .item.active').css("top"));
        f += 10;
        g += 10;
        $('.product-image.act .item.active').clone(false).appendTo($('.product-image.act .wrap_inlay')).addClass('last').css({
            "left": f + 'px',
            "top": g + 'px'
        });
        $('.product-image.act .item.active').removeClass("active");
        $('.item.last').addClass("active").children('.ui-rotatable-handle, .ui-resizable-handle').remove();
        if ($('.item.last').hasClass("image_item")) {
            $('.item.last').draggable({
                start: function () {
                    var a = $('.product-image.act').attr('z_index'),
                        cid = $(this).find("img").attr("rel");
                    a++;
                    $('.color_att li[rel!=' + cid + ']').hide();
                    $('.color_att li[rel=' + cid + ']').show();
                    $('.product-image.act').attr('z_index', a);
                    $('.product-image .active').removeClass("active");
                    $(this).addClass("active").css({
                        "z-index": a,
                        'position': 'absolute'
                    }).find("img").attr("rel", cid);
                    resetTextForm()
                },
                drag: function () {
                    $('#edit_item_wrap').show();
                    var a = parseInt($(this).css("left")) + parseInt($(this).width()) / 2,
                        ne_h = parseInt($(this).css("top")) + parseInt($(this).height()) / 2;
                    $(this).attr("pos", a + ',' + ne_h)
                }
            });
            $('.item.last').rotatable();
            $(".ui-close").click(function () {
                $(this).parent().remove();
                $('#edit_item_wrap').hide()
            });
            $('.item.last').resizable({
                aspectRatio: true,
                handles: 'se',
                start: function () {},
                resize: function (a) {
                    $('#edit_item_wrap').show();
                    var b = $(this).find("img").attr("rel");
                    $('.color_att li[rel!=' + b + ']').hide();
                    $('.color_att li[rel=' + b + ']').show();
                    var x = parseFloat($(this).find("img").css("left")),
                        y = parseFloat($(this).find("img").css("top")),
                        nw = $(this).width(),
                        nh = $(this).height(),
                        angle = $(this).attr("angle2"),
                        ne_l = parseFloat($(this).css("left")) + parseFloat($(this).width()) / 2,
                        ne_h = parseFloat($(this).css("top")) + parseFloat($(this).height()) / 2;
                    if ((angle % 45 == 0) || (angle % 90 == 0)) {
                        angle = angle + 0.000000001
                    }
                    var d = angle * Math.PI / 180;
                    var c = Math.cos(d);
                    var s = Math.sin(d);
                    if (c < 0) {
                        c = -c
                    }
                    if (s < 0) {
                        s = -s
                    }
                    var e = (nw * c - nh * s) / (c * c - s * s),
                        h1 = (nh - e * s) / c,
                        wl = nw - e,
                        hl = nh - h1;
                    $(this).attr("pos", ne_l + ',' + ne_h);
                    $(this).find("img").width(e).height(h1).css({
                        "left": (nw - e) / 2,
                        "top": (nh - h1) / 2,
                        'position': 'absolute'
                    });
                    $(this).attr("w", e).attr("h", h1)
                }
            });
            $('.item.last').click(function () {
                $('#edit_item_wrap').show();
                var a = $(this).find("img").attr("rel");
                $('.color_att li[rel!=' + a + ']').hide();
                $('.color_att li[rel=' + a + ']').show();
                var b = $('.product-image.act').attr('z_index');
                b++;
                $('.product-image.act').attr('z_index', b);
                $('.product-image .active').removeClass("active");
                $(this).addClass("active").css({
                    "z-index": b,
                    'position': 'absolute'
                });
                resetTextForm()
            })
        } else {
            $('.item.last').rotatabletext();
            $(".ui-close").click(function () {
                $(this).parent().remove();
                resetTextForm();
                $('#edit_item_wrap').hide()
            });
            $('.item.last').draggable({
                containment: "",
                start: function () {
                    var a = $('.product-image.act').attr('z_index');
                    a++;
                    $('.product-image.act').attr('z_index', a);
                    $('.product-image .active').removeClass("active");
                    $(this).addClass("active").css({
                        "z-index": a
                    });
                    changeToEditForm($('.item.last p'))
                },
                drag: function () {
                    $('#edit_item_wrap').show();
                    changeToEditForm($('.item.last p'));
                    var a = parseInt($(this).css("left")) + parseInt($(this).width()) / 2,
                        ne_h = parseInt($(this).css("top")) + parseInt($(this).height()) / 2;
                    $(this).attr("pos", a + ',' + ne_h)
                }
            });
            $('.item.last').click(function () {
                $('#edit_item_wrap').show();
                var a = $('.product-image.act').attr('z_index');
                a++;
                $('.product-image.act').attr('z_index', a);
                $('.product-image .active').removeClass("active");
                $(this).addClass("active").css({
                    "z-index": a
                });
                changeToEditForm($(this).children('p'))
            })
        }
    });
    $('#delete_item span').click(function () {
        $('.product-image.act .item.active').remove();
        $('.wrap_inlay').removeClass("act2");
        $('#edit_item_wrap').hide()
    });
    $('#flip_items .flip_x').click(function () {
        var a = $('.item.active').attr("angle2"),
            cr_scx = $('.item.active').attr("scx"),
            cr_scy = $('.item.active').attr("scy"),
            angle2 = (-1) * a;
        if ($('.item.active').hasClass('image_item')) {
            $('.item.active').attr("scx", cr_scx * (-1));
            $('.item.active').children('img').css("transform", 'rotate(' + angle2 + 'deg) scaleX(' + cr_scx * (-1) + ') scaleY(' + cr_scy + ')')
        } else {
            $('.item.active').attr("scx", cr_scx * (-1));
            $('.item.active').children('p').css("transform", 'rotate(' + angle2 + 'deg) scaleX(' + cr_scx * (-1) + ') scaleY(' + cr_scy + ')')
        }
    });
    $('#flip_items .flip_y').click(function () {
        var a = $('.item.active').attr("angle2"),
            cr_scx = $('.item.active').attr("scx"),
            cr_scy = $('.item.active').attr("scy"),
            angle2 = (-1) * a;
        if ($('.item.active').hasClass('image_item')) {
            $('.item.active').attr("scy", cr_scy * (-1));
            $('.item.active').children('img').css("transform", 'rotate(' + angle2 + 'deg) scaleX(' + cr_scx + ') scaleY(' + cr_scy * (-1) + ')')
        } else {
            $('.item.active').attr("scy", cr_scy * (-1));
            $('.item.active').children('p').css("transform", 'rotate(' + angle2 + 'deg) scaleX(' + cr_scx + ') scaleY(' + cr_scy * (-1) + ')')
        }
    });
    $('<div id="remove_act"></div>').insertBefore($("#product-image-wrap-front"));
    $("#remove_act").click(function () {
        $('#edit_item_wrap').hide();
        $(".product-image .active").removeClass("active");
        $('.color_att li').hide();
        $('.wrap_inlay').removeClass("act2");
        $('#edit_item_wrap').hide();
        resetTextForm()
    });
    $('#toolbox-phone-select').change(function () {
        var a = $(this).val(),
            ip_id = $(this).find("option:selected").attr("ip_id");
        $('#ip_id').val(ip_id);
        update_inlay_option();
        $('#main_image').attr("src", m + 'media/pdp/images/' + a)
    });
    $('#add_text_action').click(function () {
        var b = $('.product-image.act').attr('z_index');
        b++;
        $('.product-image.act').attr('z_index', b);
        var c = $('#add_text_input').val(),
            fw = 'normal',
            fst = 'normal',
            td = 'none',
            ta = 'left',
            tr = $('#arc_text_input').val(),
            fm = $.trim($("#select_font_span").html()),
            fs = $.trim($("#select_font_size").val()),
            fc = $('#font_color_div > div').css("backgroundColor");
        if ($('#change_text_type a.bold').hasClass("active")) {
            fw = 'bold'
        };
        if ($('#change_text_type a.italic').hasClass("active")) {
            fst = 'italic'
        };
        if ($('#change_text_type a.underline').hasClass("active")) {
            td = 'underline'
        };
        if ($('#change_text_type a.align_left').hasClass("active")) {
            ta = 'left'
        };
        if ($('#change_text_type a.align_center').hasClass("active")) {
            ta = 'center'
        };
        if ($('#change_text_type a.align_right').hasClass("active")) {
            ta = 'right'
        };
        if ($('#change_text_type a.align_justify').hasClass("active")) {
            ta = 'justify'
        };
        if (c != '') {
            $('.product-image .active').removeClass("active");
            $('.text-image.last').removeClass("last");
            $('.product-image.act .wrap_inlay').append('<div class="item text-image last active uncheck" angle2="0" scx="1" scy="1" style="left: 0; top: 0; position: absolute; text-align:' + ta + '; z-index:' + b + ';"><p style="white-space: pre; font-weight: ' + fw + '; font-size: ' + fs + 'px; line-height: 1.5; padding: 10px; float: left; color: ' + fc + '; text-decoration:' + td + '; margin: 0; font-family: ' + fm + '; background: transparent;">' + c + '</p></div>');
            var d = $('.text-image.last');
            d.attr("pos", d.width() / 2 + ',' + d.height() / 2).attr("w", d.width()).attr("h", d.height());
            if ($('#use_shadow').is(':checked')) {
                d.css({
                    "text-shadow": $('#h-shadow').val() + 'px ' + $('#v-shadow').val() + 'px ' + $('#t-blur').val() + 'px ' + $('#font_outline_color > div').css("backgroundColor")
                })
            }
            $(".text-image.last").rotatabletext();
            $('#edit_item_wrap, .arc_text').show();
            $(".text-image.last").draggable({
                containment: "",
                start: function () {
                    var a = $('.product-image.act').attr('z_index');
                    a++;
                    $('.product-image.act').attr('z_index', a);
                    $('.product-image .active').removeClass("active");
                    $(this).addClass("active").css({
                        "z-index": a
                    });
                    changeToEditForm($(this).children('p'))
                },
                drag: function () {
                    $('#edit_item_wrap').show();
                    changeToEditForm($(this).children('p'));
                    var a = parseInt($(this).css("left")) + parseInt($(this).width()) / 2,
                        ne_h = parseInt($(this).css("top")) + parseInt($(this).height()) / 2;
                    $(this).attr("pos", a + ',' + ne_h)
                }
            });
            //$(".text-image.last p").arctext({radius: 0});
            $('#add_text_action').hide();
            $("#edit_text_action").show();
            $('#edit_item_wrap').show();
            $('.product-image.act .text-image.last').prepend('<div class="ui-close">X</div></div>');
            $(".ui-close").click(function () {
                $(this).parent().remove();
                resetTextForm();
                $('#edit_item_wrap').hide()
            });
            $('.text-image.last').click(function () {
                $('#edit_item_wrap').show();
                var a = $('.product-image.act').attr('z_index');
                a++;
                $('.product-image.act').attr('z_index', a);
                $('.product-image .active').removeClass("active");
                $(this).addClass("active").css({
                    "z-index": a
                });
                changeToEditForm($(this).children('p'))
            })
        }
    });
    $('#use_shadow').click(function () {
        if ($(this).is(':checked')) {
            $('.font_shape .h-shadow,.font_shape .v-shadow,.font_shape  .blur,.font_shape  .color').show()
        } else {
            $('.font_shape .h-shadow,.font_shape .v-shadow,.font_shape  .blur,.font_shape  .color').hide()
        } if ($('.product-image.act .text-image.active').length > 0) {
            update_text_act($('.text-image.active p'))
        }
    });
    $('.tshirt-size .next_t').click(function () {
        var a = $(this).parent().children('.size_qty').val();
        $(this).parent().children('.size_qty').val(parseInt(a) + 1);
        update_total_price()
    });
    $('.tshirt-size .prev_t').click(function () {
        var a = $(this).parent().children('.size_qty').val();
        if (a > 0) {
            $(this).parent().children('.size_qty').val(parseInt(a) - 1);
            update_total_price()
        }
    });
    $('.change_font .next_t').click(function () {
        var a = $(this).prev().val();
        $(this).prev().val(parseInt(a) + 1);
        if ($('.product-image.act .text-image.active').length > 0) {
            update_text_act($('.text-image.active p'))
        }
    });
    $('.change_font .prev_t').click(function () {
        var a = $(this).next().val();
        if (($(this).next().attr("id") == 't-blur') && (a == 0)) {} else {
            if (($(this).next().attr("id") == 'select_font_size') && (a < 3)) {} else {
                $(this).next().val(parseInt(a) - 1);
                if ($('.product-image.act .text-image.active').length > 0) {
                    update_text_act($('.text-image.active p'))
                }
            }
        }
    });
    $('#add_text_input').keyup(function () {
        if ($('.product-image.act .text-image.active').length > 0) {
            $('.text-image.active p').html($(this).val());
            update_text_act($('.text-image.active p'))
        }
    });
    $('#change_text_type a.text').click(function () {
        $(this).toggleClass("active");
        if ($('.product-image.act .text-image.active').length > 0) {
            update_text_act($('.text-image.active p'))
        }
    });
    $('#change_text_type a.align').click(function () {
        $('#change_text_type a.align.active').removeClass("active");
        $(this).toggleClass("active");
        if ($('.product-image.act .text-image.active').length > 0) {
            update_text_act($('.text-image.active p'))
        }
    });
    $('#select_font_size, #h-shadow, #v-shadow, #t-blur').change(function () {
        if ($('.product-image.act .text-image.active').length > 0) {
            update_text_act($('.text-image.active p'))
        }
    });
    $('#font_color_div33').ColorPicker({
        color: '#444444',
        onShow: function (a) {
            $(a).fadeIn(500);
            return false
        },
        onHide: function (a) {
            $(a).fadeOut(500);
            return false
        },
        onChange: function (a, b, c) {
            $('#font_color_div div').css('backgroundColor', '#' + b);
            if ($('.product-image.act .text-image.active').length > 0) {
                update_text_act($('.text-image.active p'))
            }
        }
    });
////////////////////////////Change color function ///////////////////////////////
function rgb2hex(rgb){
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
}
    $('#font_color_div, #font_outline_color').click(function(){
       $('.color_content').show(); 
       $('.color_display, .color_content li a.act').removeClass("act");
       $(this).find('.color_display').addClass("act");
       var current_color = $(this).find('.color_display').css("background-color");
       $('.color_content li a').each(function(){
            if($(this).css('background-color')==current_color){
                $(this).addClass("act");
                $('#selected_color').val(rgb2hex(current_color));
                $('a.selected_color').css("background-color",current_color);
            }
       });
    });
    $('.inlay_div.color, .color_content_wrap .bt_done').click(function(){
       $('.color_content').hide();
       $('.color_display').removeClass("act");
    });
    $('.color_content li a:not(.selected_color, .bt_done)').click(function(){
       $('.color_content li a.act').removeClass("act");
       $(this).addClass("act");
       var color = $(this).css("background-color");
       $('.color_display.act').css('background-color',color);
       $('#selected_color').val(rgb2hex(color));
       ////////////Text color edit or shadow color edit????////////////
       if($('#font_color_div .color_display').hasClass("act")){
            /////////////////Color edit///////////////////
            $('.text-image.active p').css("color",color);
       }
       if($('#font_outline_color .color_display').hasClass("act")){
            /////////////////Text shadow edit///////////////////
            var h_s = $('#h-shadow').val(),
                v_s = $('#v-shadow').val(),
                t_s = $('#t-blur').val();
            $('.text-image.active p').css("text-shadow",h_s+'px '+ v_s +'px '+ t_s + 'px '+ color);
       }
       $('a.selected_color').css("background-color",color);
    });
    $('#selected_color').change(function(){
       $('a.selected_color').css('background-color','#'+$(this).val()); 
    });
    
    
    
    
    
    
    
    
////////////////////////////Change font color ///////////////////////////////
    $('#select_font_span').click(function () {
        $('#select_font').show()
    });
    $('.box_text').hover(function () {}, function () {
        $('#select_font').hide()
    });
    $('#select_font').hover(function () {
        $(this).show()
    }, function () {
        $(this).hide()
    });
    $('#select_font li').each(function () {
        $(this).css('font-family', $(this).attr("rel"))
    });
    $('#select_font li').click(function () {
        $('#select_font').hide();
        $('#select_font_span').css("font-family", $(this).attr("rel")).html($(this).attr("rel"));
        if ($('.product-image.act .text-image.active').length > 0) {
            update_text_act($('.text-image.active p'))
        }
    });
    /*
    $('#font_outline_color').ColorPicker({
        color: '#ff1100',
        onShow: function (a) {
            $(a).fadeIn(500);
            return false
        },
        onHide: function (a) {
            $(a).fadeOut(500);
            return false
        },
        onChange: function (a, b, c) {
            $('#font_outline_color div').css('backgroundColor', '#' + b);
            if ($('.product-image.act .text-image.active').length > 0) {
                update_text_act($('.text-image.active p'))
            }
        }
    }); */

    function update_text_act(a) {
        $('#edit_item_wrap').show();
        var b;
        if ($('#change_text_type li a.bold').hasClass("active")) {
            a.css("font-weight", "bold")
        } else {
            a.css("font-weight", "normal")
        } if ($('#change_text_type li a.italic').hasClass("active")) {
            a.css("font-style", "italic")
        } else {
            a.css("font-style", "normal")
        } if ($('#change_text_type li a.underline').hasClass("active")) {
            a.css("text-decoration", "underline")
        } else {
            a.css("text-decoration", "none")
        }
        b = $('#change_text_type .align.active').text();
        switch (b) {
        case 'C':
            a.css("text-align", "center");
            break;
        case 'R':
            a.css("text-align", "right");
            break;
        case 'J':
            a.css("text-align", "justify");
            break;
        default:
            a.css("text-align", "left");
            break
        }
        if ($('#use_shadow').is(':checked')) {
            a.css({
                "text-shadow": $('#h-shadow').val() + 'px ' + $('#v-shadow').val() + 'px ' + $('#t-blur').val() + 'px ' + $('#font_outline_color > div').css("backgroundColor")
            })
        } else {
            a.css("text-shadow", 'none')
        }
        a.css({
            "color": $('#font_color_div > div').css("background-color"),
            "line-height": "1.5",
            "font-size": $('#select_font_size').val() + 'px',
            "font-family": $('#select_font_span').html()
        });
        a.css("transform", "rotate(0deg)");
        var d = a.width() + 20,
            nh = a.height() + 20,
            scx = a.parent().attr("scx"),
            scy = a.parent().attr("scy"),
            new_angle2 = a.parent().attr('angle2'),
            l = a.parent().position().left,
            t = a.parent().position().top;
        var e, new_h;
        if (new_angle2 == 90) {
            new_angle2 = 89.9999999999
        }
        var f = new_angle2 * Math.PI / 180;
        var c = Math.cos(f);
        var s = Math.sin(f);
        if (c < 0) {
            c = -c
        }
        if (s < 0) {
            s = -s
        }
        e = nh * s + d * c;
        new_h = nh * c + d * s;
        var g = (d * c - nh * s) / (c * c - s * s),
            h1 = (nh - g * s) / c,
            wl = e - g,
            hl = new_h - h1;
        var h = parseInt(l) + parseInt(e) / 2,
            ne_h = parseInt(t) + parseInt(new_h) / 2;
        new_angle = (-1) * new_angle2;
        a.parent().width(e).height(new_h).attr("w", d).attr("h", nh).attr("pos", h + ',' + ne_h);
        a.css("transform", 'rotate(' + new_angle + 'deg) scaleX(' + scx + ') scaleY(' + scy + ')');
        a.css({
            "left": (e - d) / 2,
            "top": (new_h - nh) / 2
        })
    }
    var u = 1;
    $('#select_image img').each(function () {});
    $('.color_att').on('click', "li", function () {
        var a = $(this).attr("isrc"),
            src = $('#' + a).attr("src");
        $('.image_item.active img').attr("src", src)
    });
    $('#icon_list, #lists_img_upload, #photos_album').on('click', 'img', function () {
        var e = $('.product-image.act').attr('z_index');
        e++;
        $('.color_att li').hide();
        $('.product-image.act').attr('z_index', e);
        var f = $(this).attr("src"),
            id = $(this).attr("id"),
            color_text = $(this).attr("color");
        if (color_text != '') {
            var g = color_text.split(',');
            if (!$(this).hasClass("loaded")) {
                $(this).addClass("loaded");
                $('.product-img-box .color_att').append('<li class="ori_img" rel="' + id + '" isrc="' + id + '"><a iid="' + id + '">&nbsp;</a></li>');
                for (ii = 0; ii < g.length; ii++) {
                    var h = g[ii].split('-');
                    $('.product-img-box .color_att').append('<li isrc="img_color_' + id + '_' + ii + '" rel="' + id + '" style="background: #' + h[0] + '"><a iid="' + id + '">' + h[0] + '</a></li>');
                    $('#save_original_img_text').append('<img id="img_color_' + id + '_' + ii + '" src="' + m + 'media/pdp/images/' + h[1] + '" />')
                }
            } else {
                $('.color_att li[rel=' + id + ']').show()
            }
        }
        $('.image_item.last').removeClass("last");
        $('#edit_item_wrap').show();
        $('.product-image .active').removeClass("active");
        $('.product-image.act .wrap_inlay').append('<div angle2="0" h="70" scx="1" scy="1" class="item image_item last active" style="left: 0; top: 0; position: absolute; z-index:' + e + ';"><img rel="' + id + '" src="' + f + '" /></div>');
        if ($(this).hasClass("thumb")) {
            $('.image_item.last img').addClass("img_up")
        }
        $('.image_item.last').find("img").height(70).attr("rel", id).css({
            'left': 0,
            'top': 0,
            'position': 'absolute'
        });
        $('.image_item.last').height(70);
        width_img = $('.image_item.last').children('img').width();
        $('.image_item.last').width(width_img);
        $('.image_item.last').attr("w", width_img).attr("pos", width_img / 2 + "," + 35);
        $('.image_item.last').draggable({
            start: function () {
                var a = $('.product-image.act').attr('z_index'),
                    cid = $(this).find("img").attr("rel");
                a++;
                $('.color_att li[rel!=' + id + ']').hide();
                $('.color_att li[rel=' + id + ']').show();
                $('.product-image.act').attr('z_index', a);
                $('.product-image .active').removeClass("active");
                $(this).addClass("active").css({
                    "z-index": a,
                    'position': 'absolute'
                }).find("img").attr("rel", cid);
                resetTextForm()
            },
            drag: function () {
                $('#edit_item_wrap').show();
                var a = parseInt($(this).css("left")) + parseInt($(this).width()) / 2,
                    ne_h = parseInt($(this).css("top")) + parseInt($(this).height()) / 2;
                $(this).attr("pos", a + ',' + ne_h)
            }
        });
        $(".image_item.last").rotatable();
        $(".image_item.last").resizable({
            aspectRatio: true,
            handles: 'se',
            start: function () {},
            resize: function (a) {
                $('#edit_item_wrap').show();
                $('.color_att li[rel!=' + id + ']').hide();
                $('.color_att li[rel=' + id + ']').show();
                var x = parseFloat($(this).find("img").css("left")),
                    y = parseFloat($(this).find("img").css("top")),
                    nw = $(this).width(),
                    nh = $(this).height(),
                    angle = $(this).attr("angle2"),
                    ne_l = parseFloat($(this).css("left")) + parseFloat($(this).width()) / 2,
                    ne_h = parseFloat($(this).css("top")) + parseFloat($(this).height()) / 2;
                if ((angle % 45 == 0) || (angle % 90 == 0)) {
                    angle = angle + 0.000000001
                }
                var b = angle * Math.PI / 180;
                var c = Math.cos(b);
                var s = Math.sin(b);
                if (c < 0) {
                    c = -c
                }
                if (s < 0) {
                    s = -s
                }
                var d = (nw * c - nh * s) / (c * c - s * s),
                    h1 = (nh - d * s) / c,
                    wl = nw - d,
                    hl = nh - h1;
                $(this).attr("pos", ne_l + ',' + ne_h);
                $(this).find("img").width(d).height(h1).css({
                    "left": (nw - d) / 2,
                    "top": (nh - h1) / 2,
                    'position': 'absolute'
                });
                $(this).attr("w", d).attr("h", h1)
            }
        });
        $(".image_item.last").prepend('<div class="ui-close">X</div>');
        $(".ui-close").click(function () {
            $(this).parent().remove();
            $('#edit_item_wrap').hide()
        });
        $('.image_item.last').click(function () {
            $('#edit_item_wrap').show();
            $('.color_att li[rel!=' + id + ']').hide();
            $('.color_att li[rel=' + id + ']').show();
            var a = $('.product-image.act').attr('z_index');
            a++;
            $('.product-image.act').attr('z_index', a);
            $('.product-image .active').removeClass("active");
            $(this).addClass("active").css({
                "z-index": a,
                'position': 'absolute'
            });
            resetTextForm()
        })
    });
    $(".add-to-cartfefeefef .btn-cart").click(function () {
        var f = $('#skin_url').val(),
            g = $('#base_dir').val(),
            ml = $('#media_url').val(),
            k = $('#qty').val(),
            e = $("#custom_price").val(),
            bof, item_info, productId = $('#product_id').val();
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
                    if ($(this).parent().attr("id") == 'wrap_inlay_front') {
                        bof = 'front'
                    } else {
                        bof = 'back'
                    }
                    var d = $(this).children('img').attr("src");
                    $.ajax({
                        url: f + "saveallimages.php",
                        type: "post",
                        data: {
                            data: d,
                            base_dir: g
                        },
                        beforeSend: function () {
                            $('.pdploading').show()
                        },
                        success: function (b) {
                            console.log(b);
                            $('.pdploading').hide();
                            j += 'ϣ' + bof + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + img_css + '╦' + b + '╦' + scx + '╦' + scy;
                            if (++i__ == i) {
                                $.ajax({
                                    url: m + 'index.php/pdp/index/addToCart',
                                    type: 'POST',
                                    data: {
                                        product_id: productId,
                                        qty: k,
                                        option: j,
                                        edit_id: editid,
                                        custom_price: e
                                    },
                                    beforeSend: function () {
                                        $('.pdploading').show()
                                    },
                                    success: function (a) {
                                        $('.pdploading').hide();
                                        if (a == "") {
                                            window.location = m + 'index.php/checkout/cart'
                                        } else {
                                            console.log(a)
                                        }
                                    }
                                })
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
                    } if ($(this).parent().attr("id") == 'wrap_inlay_front') {
                        bof = 'front'
                    } else {
                        bof = 'back'
                    }
                    j += 'ϣ' + bof + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + item_info + '╦' + scx + '╦' + scy;
                    if (++i__ == i) {
                        $.ajax({
                            url: m + 'index.php/pdp/index/addToCart',
                            type: 'POST',
                            data: {
                                product_id: productId,
                                qty: k,
                                option: j,
                                edit_id: editid,
                                custom_price: e
                            },
                            beforeSend: function () {
                                $('.pdploading').show()
                            },
                            success: function (a) {
                                $('.pdploading').hide();
                                if (a == "") {
                                    window.location = m + 'index.php/checkout/cart'
                                } else {
                                    console.log(a)
                                }
                            }
                        })
                    }
                }
            })
        } else {
            $.ajax({
                url: m + 'index.php/pdp/index/addToCart',
                type: 'POST',
                data: {
                    product_id: productId,
                    qty: k,
                    option: j,
                    edit_id: editid,
                    custom_price: e
                },
                beforeSend: function () {
                    $('.pdploading').show()
                },
                success: function (a) {
                    $('.pdploading').hide();
                    if (a == "") {
                        window.location = m + 'index.php/checkout/cart'
                    } else {
                        console.log(a)
                    }
                }
            })
        };
        $(".product-image .active").removeClass("active");
        var l = '';
        return false
    });
	
	/*Save Design*/
    $('#save_design_btn_not_login').click(function(){
        window.location = $('#login_url').val();
    });
    function save_design(wdywts){
        var f = $('#skin_url').val(),
            g = $('#base_dir').val(),
            ml = $('#media_url').val(),
            k = $('#qty').val(),
            e = $("#custom_price").val(),
            bof, item_info, 
            total_saved = $('#total_saved').val(),
            productId = $('#product_id').val();
        resetTextForm();
        //if(total_saved>4){
        //    alert('Max saved design is 5. You need to delete a saved design.');
        //    return false;
        //}
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
        var j = $('#list_color li.active').attr("tt") + ';' + m + 'media/pdp/images/' + img_f + ';' + m + 'media/pdp/images/' + img_b + ';' + q + ';' + p + ';' + color_id + ';' + price + size_arr + ';' + productId+ ';' + editid,
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
                    if ($(this).parent().attr("id") == 'wrap_inlay_front') {
                        bof = 'front'
                    } else {
                        bof = 'back'
                    }
                    var d = $(this).children('img').attr("src");
                    $.ajax({
                        url: f + "saveallimages.php",
                        type: "post",
                        data: {
                            data: d,
                            base_dir: g
                        },
                        beforeSend: function () {
                            $('.pdploading').show()
                        },
                        success: function (b) {
                            console.log(b);
                            $('.pdploading').hide();
                            j += 'ϣ' + bof + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + img_css + '╦' + b + '╦' + scx + '╦' + scy;
                            if (++i__ == i) {
                                if(wdywts=='frontend'){
                                    saveCustomerDesign(j);
                                }else{
                                    saveDesignBackend(j);
                                }
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
                    } if ($(this).parent().attr("id") == 'wrap_inlay_front') {
                        bof = 'front'
                    } else {
                        bof = 'back'
                    }
                    j += 'ϣ' + bof + '╦' + angle + '╦' + w + '╦' + h + '╦' + pos + '╦' + css + '╦' + item_info + '╦' + scx + '╦' + scy;
                    if (++i__ == i) {
                        if(wdywts=='frontend'){
                            saveCustomerDesign(j);
                        }else{
                            saveDesignBackend(j);
                        }
                    }
                }
            })
        } else {
            if(wdywts=='frontend'){
                saveCustomerDesign(j);
            }else{
                saveDesignBackend(j);
            }
        };
        $(".product-image .active").removeClass("active");
        return false;
    }
	$("#save_design_btn").click(function () {
        save_design('frontend');
    });
    $('#save_design_btn_backend').click(function(){
        save_design('backend');
    });
    function saveDesignBackend(design){
        var productId = $("#product_id").val();
		var baseUrl = $("#mst_base_url").val();
		$.ajax({
			type : "POST",
			data: {product_id : productId, pdp_design : design},
			url : baseUrl + 'pdp/index/saveAdminTemplate',
			beforeSend : function () {
				$("#loading-mask").attr("style","left: -2px; top: 0px; width: 1034px; height: 833px;");
				$("#loading-mask").show();
			},
			success : function(data) {
				if (data == "") {  
					$("#loading-mask").hide();
				} else {
					console.log(data);
					$("#loading-mask").hide();
				}
			}
		});
    }
	function saveCustomerDesign (design) {
		//Check customer logged in or not
		var customerId = $("#customer_id").val();
		if (customerId == "") {
			//alert("Not done yet");
			return false;
			if( confirm("Please login to save your design!") ) {
				console.log("Redirect");
				
				$.ajax({
					url: m + 'index.php/pdp/pdptemplate/savesession',
					type: 'POST',
					data: {design : design},
					beforeSend: function () {
						$('.pdploading').show()
					},
					success: function (a) {
						$('.pdploading').hide();
						if (a == "") {
							window.location = m + 'index.php/customer/account/login/';
						} else {
							alert(a);
						}
					}
				});
			}
			return false;
		}
		var editid = $('#wid').val();
		$.ajax({
			url: m + 'index.php/pdp/pdptemplate/save',
			type: 'POST',
			data: {design : design, id : editid},
			beforeSend: function () {
				$('.pdploading').show()
			},
			success: function (a) {
				$('.pdploading').hide();
				if (a == "") {
					window.location = m + 'index.php/pdp/pdptemplate/view/';
				} else {
					//alert(a);
					//window.location = m + 'index.php/customer/account/login/';
					console.log(a);
				}
			}
		});
	}
	/** End save design */
    $('body').keypress(function (e) {
        var a = e.keyCode || e.which;
        var b = $('.item.active').length;
        if (b > 0) {
            switch (a) {
            case 46:
                if (!$('.item.active').hasClass("text-image")) {
                    $('.item.active').remove()
                }
                break;
            case 37:
                if (!$('.item.active').hasClass("text-image")) {
                    var c = $('.item.active').position();
                    $('.item.active').css("left", c.left - 1 + 'px');
                    return false
                }
                break;
            case 38:
                if (!$('.item.active').hasClass("text-image")) {
                    var c = $('.item.active').position();
                    $('.item.active').css("top", c.top - 1 + 'px');
                    return false
                }
                break;
            case 39:
                if (!$('.item.active').hasClass("text-image")) {
                    var c = $('.item.active').position();
                    $('.item.active').css("left", c.left + 1 + 'px');
                    return false
                }
                break;
            case 40:
                if (!$('.item.active').hasClass("text-image")) {
                    var c = $('.item.active').position();
                    $('.item.active').css("top", c.top + 1 + 'px');
                    return false
                }
                break
            }
        }
    });
    $('#files_upload').hover(function () {
        if (!$(this).hasClass("active")) {
            document.getElementById('files_upload').addEventListener('change', handleFileSelect, false);
            $(this).addClass("active")
        }
    });

    function update_inlay_option() {
        var a = $('#ip_id').val(),
            inlay_w = $('#width' + a).val(),
            inlay_h = $('#height' + a).val(),
            inlay_t = $('#top' + a).val(),
            inlay_l = $('#left' + a).val();
        $('#wrap_inlay_front').css({
            "left": inlay_l + "px",
            "top": inlay_t + "px",
            "width": inlay_w,
            "height": inlay_h
        })
    };

    function drawRotatedImage(a, x, y, b) {
        var c = new Image(),
            TO_RADIANS = Math.PI / 180,
            canvas = document.createElement("canvas"),
            context = canvas.getContext('2d');
        c.src = a;
        canvas.width = 120;
        canvas.height = 120;
        context.save();
        context.translate(x, y);
        context.rotate(b * TO_RADIANS);
        context.drawImage(c, 0, 0, 120, 120);
        $('.image_item.last').append(canvas).find("canvas").attr("w", 120).attr("h", 120);
        context.restore()
    };

    function createClickOutSide() {
        var n = 1;
        $(".item").mouseenter(function () {
            n = 0
        }).mouseleave(function () {
            n = 1
        });
        $('#search').val(n);
        $(document).click(function () {
            if (n == 1) {
                $(".item.active").removeClass("active")
            }
        })
    }

    function changeZindex(a) {
        var b = $('#product-image-wrap-front').attr('z_index');
        b++;
        $('#product-image-wrap-front').attr('z_index', b);
        $('#' + a).css("z-index", b)
    }

    function changeToEditForm(a) {
        $('#edit_item_wrap, .arc_text').show();
        $('.add_text_tab').click();
        $('#add_text_action').hide();
        $('#add_text_input').val(a.text());
        $('#select_font_span').html(a.css("font-family")).css("font-family", a.css("font-family"));
        $('#select_font_size').val(parseInt(a.css("font-size")));
        $('#font_color_div > div').css("backgroundColor", a.css("color"));
        if ((a.css("font-weight") > 400) || (a.css("font-weight") == 'bold')) {
            $('#change_text_type a.bold').addClass("active")
        } else {
            $('#change_text_type a.bold').removeClass("active")
        }; if (a.css("font-style") == 'italic') {
            $('#change_text_type a.italic').addClass("active")
        } else {
            $('#change_text_type a.italic').removeClass("active")
        }; if (a.css("text-decoration") == 'underline') {
            $('#change_text_type a.underline').addClass("active")
        } else {
            $('#change_text_type a.underline').removeClass("active")
        };
        switch (a.css("text-align")) {
        case 'left':
            $('#change_text_type a.align_left').addClass("active");
            break;
        case 'center':
            $('#change_text_type a.align_center').addClass("active");
            break;
        case 'right':
            $('#change_text_type a.align_right').addClass("active");
            break;
        case 'justify':
            $('#change_text_type a.align_justify').addClass("active");
            break;
        default:
            $('#change_text_type a.align_justify').removeClass("active");
            $('#change_text_type a.align_right').removeClass("active");
            $('#change_text_type a.align_center').removeClass("active");
            break
        };
        var b = a.css("text-shadow").match(/(-?\d+px)|(rgb\(.+\))/g);
        
        if (b) {
            if (!$('#use_shadow').is(":checked")) {
                $('#use_shadow').click()
            }
            $('.font_shape .h-shadow,.font_shape .v-shadow,.font_shape  .blur,.font_shape  .color').show();
            //var c = b.split(" ");
            $('#h-shadow').val(parseInt(b[1]));
            $('#v-shadow').val(parseInt(b[2]));
            $('#t-blur').val(parseInt(b[3]));
            $('#font_outline_color > div').css("backgroundColor", b[0]);
            a.css('text-shadow', b[1] + ' ' + b[2] + ' ' + b[3] + ' ' + b[0]);
        } else {
            $('#use_shadow').attr("checked", false);
            $('.font_shape .h-shadow,.font_shape .v-shadow,.font_shape  .blur,.font_shape  .color').hide()
        }
    }

    function resetTextForm() {
        $('#use_shadow').attr("checked", false);
        $('.font_shape .h-shadow,.font_shape .v-shadow, .font_shape .blur, .font_shape .color').hide();
        $('#add_text_action').show();
        $("#edit_text_action, .arc_text").hide();
        $('#add_text_input').val("");
        $('#select_font_span').html("Arial").css("font-family", "Arial");
        $('#select_font_size').val("20");
        $('#h-shadow, #v-shadow, #t-blur').val(0);
        $('#font_color_div > div').css("backgroundColor", "#444");
        $('#font_outline_color > div').css("backgroundColor", "#fff");
        $('#change_text_type a.active').removeClass("active")
    }

    function handleFileSelect(d) {
        var g = d.target.files;
        for (var i = 0, f; f = g[i]; i++) {
            if (!f.type.match('image.*')) {
                continue
            }
            var h = new FileReader();
            h.onload = (function (c) {
                return function (e) {
                    var a = $('#lists_img_upload span').length;
                    var b = document.createElement('span');
                    b.innerHTML = ['<img id="img_up_' + a+++'" color="" class="thumb" src="', e.target.result, '" title="', escape(c.name), '"/>'].join('');
                    document.getElementById('lists_img_upload').insertBefore(b, null)
                }
            })(f);
            h.readAsDataURL(f)
        }
        $('#files_upload').val("")
    }
    $('#lists_img_upload2').hover(function () {
        var a = 0;
        $('#lists_img_upload span img').each(function () {
            a++;
            $(this).attr("id", 'img_upload_' + a).attr("color", "")
        })
    });
    ///////////////////////////////////////active facebook////////////////////////
    if($('#fb_get_id').val()!=''){
        $('.add_artwork_tab').click();
        $('.tab_design_image .facebook_api').click();
    }
    $('#facebook_album').change(function(){
       var fid = $(this).val();
       $('#fb_image_list li:not(.'+fid+')').hide();
       $('#fb_image_list li.fb_album_'+fid).show();
    });
});