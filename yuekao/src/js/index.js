// 主模块
require.config({
    baseUrl: '../js/',
    paths: {
        jquery: '../js/libs/jquery-2.1.1.min',
        template: '../js/app/template'
    }
});
require(['jquery', 'template'], function() {
    // $.ajax({
    //     url: ''
    // })
});