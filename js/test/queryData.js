var QueryData = (function($) {
    var that;

    var query = function(paramURL) {
        var deferred = new $.Deferred();
        $.ajax({
            url : "data/dataFile.xml",
            dataType : 'xml',
            type : 'POST',
            error : function(xml) {
                alert("加载XML 文件出错！");
                deferred.resolve(false);
            },
            success : function(xml) {
                return deferred.resolve(xml);
            }
        });
        return deferred.promise();
    };

    return {
        init : function() {
            that = this;
        },
        query : query

    }
})(jQuery);

(function($) {
    QueryData.init();
})(jQuery);