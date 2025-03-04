/**
 * Created by root on 28.05.2016.
 */
'use strict';

angular.module('osmmapscongestionApp')
    .factory('Settings', function () {
        return {
            colors: {
                background: '#97a1a1',
                redLight: 'hsl(0, 100%, 50%)',
                greenLight: '#85ee00',
                intersection: '#586970',
                road: '#586970',
                roadMarking: '#bbb',
                hoveredIntersection: '#3d4c53',
                tempRoad: '#aaa',
                gridPoint: '#586970',
                grid1: 'rgba(255, 255, 255, 0.5)',
                grid2: 'rgba(220, 220, 220, 0.5)',
                hoveredGrid: '#f4e8e1'
            },
            fps: 60,
            lightsFlipInterval: 160,
            gridSize: 10,
            defaultTimeFactor: 5
        };
    });
