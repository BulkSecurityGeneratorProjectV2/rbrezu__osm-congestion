'use strict';

angular.module('osmmapscongestionApp')
    .factory('Node', function ($resource, DateUtils) {
        return $resource('api/nodes/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });
