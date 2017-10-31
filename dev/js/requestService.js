var RequestService = function() {
    var self = this;

    self.get = function(url) {
        return request('GET', url);
    };

    self.post = function(url, data) {
        return request('POST', url, data);
    };

    function request(method, url, data) {
        var options = {
        method: method,
        url: url,
        contentType: 'application/json',
        data: JSON.stringify(data) || {}
        };

        return $.ajax(options);
    };
};
