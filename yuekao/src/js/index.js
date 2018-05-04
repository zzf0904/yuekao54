// 主模块
require.config({
    baseUrl: '../js/',
    paths: {
        jquery: '../js/libs/jquery-2.1.1.min',
        template: '../js/app/template'
    }
});
require(['jquery', 'template'], function($, template) {
    $.ajax({
        url: '../mock/data/page1.json',
        success: function(data) {
            template('#tpl', data, '.page1');
            fn(); // 详情页
        }
    });
    // 点击切换
    $('.small-nav>li').each(function(i, v) {
        $(this).on('click', function() {
            $('.small-nav>li').eq(i).addClass('on').siblings().removeClass('on');
            $('.main-nav>ol>li').eq(i).addClass('bg').siblings().removeClass('bg');
        });
    });
    // 详情页
    function fn() {
        $('.box').each(function(i, v) {
            $(this).on('click', function() {
                var index = $(this).data('src');
                location.href = index + '.html';
            });
        });
    }
});