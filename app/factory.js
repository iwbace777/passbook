myApp.factory('simpleFactory', function() {
    var factory = {};
    var data = [ {
        id : '1',
        name : 'Number 1'
    }, {
        id : '2',
        name : 'Number 2'
    }, {
        id : '3',
        name : 'Number 3'
    } ];

    factory.getData = function() {
        return data;
    };
    return factory;
});



