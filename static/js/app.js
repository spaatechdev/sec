// Template Core Script
$(document).ready(function() {	
    "use strict";	
	  
    // Options
    var submenu_animation_speed = 100,
        submenu_opacity_animation = true, // set to "false" to remove opacity animation
        page_boxed = false,
        page_sidebar_fixed = true,
        page_sidebar_collapsed = false,
        page_header_fixed = false;
    
    // Elements
    var body = $('body'),
        page_header = $('.page-header'),
        page_sidebar = $('.page-sidebar'),
        page_content = $('.page-content');
    
    // Boxed Page 
    var boxed_page = function() {
        if(page_boxed === true) {
            $('.page-container').addClass('container');
        };
    };
    
    
    // Fixed Header
    var fixed_header = function() {
        if(page_header_fixed === true) {
            $('body').addClass('page-header-fixed');
        };
    };
    
    
    // Sidebar
    var page_sidebar_init = function() {
        
        // Slimscroll
        $('.page-sidebar-inner').slimScroll({
            height: '100%'
        }).mouseover();  
        
        // Fixed Sidebar
        var fixed_sidebar = function() {
            if((body.hasClass('page-sidebar-fixed'))&&(page_sidebar_fixed === false)) {
                page_sidebar_fixed = true;
            };
            
            if(page_sidebar_fixed === true) {
                body.addClass('page-sidebar-fixed');
                $('#fixed-sidebar-toggle-button').removeClass('icon-radio_button_unchecked');
                $('#fixed-sidebar-toggle-button').addClass('icon-radio_button_checked');
            };
            
            var fixed_sidebar_toggle = function() {
                body.toggleClass('page-sidebar-fixed');
                if(body.hasClass('page-sidebar-fixed')) {
                    page_sidebar_fixed = true;
                } else {
                    page_sidebar_fixed = false;
                }
            };
    
            $('#fixed-sidebar-toggle-button').on('click', function() {
                fixed_sidebar_toggle();
                $(this).toggleClass('icon-radio_button_unchecked');
                $(this).toggleClass('icon-radio_button_checked');
                return false;
            });
        };
        
        
        // Collapsed Sidebar
        var collapsed_sidebar = function() {
            if(page_sidebar_collapsed === true) {
                body.addClass('page-sidebar-collapsed');
            };
            
            var collapsed_sidebar_toggle = function() {
                body.toggleClass('page-sidebar-collapsed');
                if(body.hasClass('page-sidebar-collapsed')) {
                    page_sidebar_collapsed = true;
                } else {
                    page_sidebar_collapsed = false;
                };
                $('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
                    mouseenter: function(){
                        $('.page-sidebar').addClass('fixed-sidebar-scroll') 
                    },
                    mouseleave: function(){
                        $('.page-sidebar').removeClass('fixed-sidebar-scroll')
                    }
                }, 'li');
            };
    
                $('.page-sidebar-collapsed .page-sidebar .accordion-menu').on({
                    mouseenter: function(){
                        $('.page-sidebar').addClass('fixed-sidebar-scroll') 
                    },
                    mouseleave: function(){
                        $('.page-sidebar').removeClass('fixed-sidebar-scroll')
                    }
                }, 'li');
            $('#collapsed-sidebar-toggle-button').on('click', function() {
                collapsed_sidebar_toggle();
                return false;
            });
            
        };
		
		    var small_screen_sidebar = function(){
            //if(($(window).width() < 768)&&($('#fixed-sidebar-toggle-button').hasClass('icon-radio_button_unchecked'))){
            //    $('#fixed-sidebar-toggle-button').click();
            //}
            //$(window).on('resize', function() {
            //    if(($(window).width() < 768)&&($('#fixed-sidebar-toggle-button').hasClass('icon-radio_button_unchecked'))){
            //        $('#fixed-sidebar-toggle-button').click();
            //    }
            //});
            $('#sidebar-toggle-button').on('click', function() {
                body.toggleClass('page-sidebar-visible');
                return true;
            });
            $('#sidebar-toggle-button-close').on('click', function() {
                body.toggleClass('page-sidebar-visible');
                return true;
            });
        };
        
        fixed_sidebar();
        collapsed_sidebar();
        small_screen_sidebar();
    };
    
        
    // Accordion menu
    var accordion_menu = function() {
        
        var select_sub_menus = $('.page-sidebar li:not(.open) .sub-menu'),
            active_page_sub_menu_link = $('.page-sidebar li.active-page > a');
        
        // Hide all sub-menus
        select_sub_menus.hide();
        
        
        if(submenu_opacity_animation === false) {
            $('.sub-menu li').each(function(i){
                $(this).addClass('animation');
            });
        };
        
        // Accordion
        $('.accordion-menu').on('click', 'a', function() {
            var sub_menu = $(this).next('.sub-menu'),
                parent_list_el = $(this).parent('li'),
                active_list_element = $('.accordion-menu > li.open'),
                show_sub_menu = function() {
                    sub_menu.slideDown(submenu_animation_speed);
                    parent_list_el.addClass('open');
                    if(submenu_opacity_animation === true) {
                        $('.open .sub-menu li').each(function(i){
                            var t = $(this);
                            setTimeout(function(){ t.addClass('animation'); }, (i+1) * 15);
                        });
                    };
                },
                hide_sub_menu = function() {
                    if(submenu_opacity_animation === true) {
                        $('.open .sub-menu li').each(function(i){
                            var t = $(this);
                            setTimeout(function(){ t.removeClass('animation'); }, (i+1) * 5);
                        });
                    };
                    sub_menu.slideUp(submenu_animation_speed);
                    parent_list_el.removeClass('open');
                },
                hide_active_menu = function() {
                    $('.accordion-menu li.open > .sub-menu').slideUp(submenu_animation_speed);
                    $('.accordion-menu li.open').removeClass('open');
                };
            
            if((sub_menu.length)&&(!body.hasClass('page-sidebar-collapsed'))) {
                
                if(!parent_list_el.hasClass('open')) {
                    if(active_list_element.length) {
                        if ( !$(this).closest('ul').closest('li').hasClass("open")  ){
                            hide_active_menu();
                        }
                        else{
                            $(this).closest("ul").find('li.open').find('.sub-menu').slideUp(submenu_animation_speed);
                            $(this).closest("ul").find('li.open').removeClass('open');
                        }
                    };
                    show_sub_menu();
                } else {
                    hide_sub_menu();
                };
                
                return false;
                
            };
            if((sub_menu.length)&&(body.hasClass('page-sidebar-collapsed'))){
                return false;
            };
        });
        
        if($('.active-page > .sub-menu').length) {
            active_page_sub_menu_link.click();
        };
    };


    
    page_sidebar_init();
    boxed_page();
    accordion_menu();
    
});


// Collapsed Sidebar (min-width:992px) and (max-width: 1199px)
 $(function(){
 
   'use strict'
 
   var mql = window.matchMedia('(min-width:992px) and (max-width: 1199px)');
 
   function doMinimize(e) {
     if (e.matches) {
       $('body').addClass('page-sidebar-collapsed');
     } 
	 else {
       $('body').removeClass('page-sidebar-collapsed');
     }
   }
 
   mql.addListener(doMinimize);
  doMinimize(mql);

})
	

