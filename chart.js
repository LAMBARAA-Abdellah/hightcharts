document.addEventListener('DOMContentLoaded', function () {
   Highcharts.chart('container', {
        chart: {
            // type: 'column'
            // type:'pie'
            // type:'line'
            // type:'area'
            //  type:'scatter'
            //  type:'spline'
            //   type:'bar'
            //    type:'arearange'
            //    type:'columnrange'
            type:'areaspline',
            zoomType: 'xy'
        },
        tooltip: {
            // shared: false,
            // crosshairs: true,
            animation: false,
            backgroundColor: 'yellow',
            borderColor: '#000000',
            borderRadius: 10,
        },
        colors: ['#7cb5ec', '#f7a35c', '#90ed7d', '#f7a35c', '#8085e9', ],
        cedits: {
            enabled: false,
            text: 'mychart.com',
            href: 'http://www.google.com/',
            position: {
                align: 'left',
                x: -10,
                y: -10
            }

        },

        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4,30,43,23,1,2,4]
            
        }, {
            name: 'John',
            data: [5, 7, 3,2,1,20,4,3,2]
        },
        {
            name: 'Abdellah',
            data: [23,1,2,34,1,2,3,4,5]
        },
    
        
        {
            name: 'Ahmed',
            data: [1, 2, 3,4,5,6,7,8,9]
        },
        {
            name: 'Ali',
            data: [45,3,12,9,5,2,1,2,34]
        }],
        
    });

});
