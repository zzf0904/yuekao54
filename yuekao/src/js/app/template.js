// 封装handlebars
require.config({
    baseUrl: '../../js/',
    paths: {
        jquery: 'libs/jquery-2.1.1.min',
        Handlebars: 'libs/handlebars-v4.0.11'
    }
});
define(['jquery', 'Handlebars'], function($, Handlebars) {
    return function(id, data, content) {
        var tpl = $(id).html();
        var template = Handlebars.compile(tpl);
        var html = template(data);
        if (content) {
            return $(content).append(html);
        } else {
            return html;
        }
    };
});