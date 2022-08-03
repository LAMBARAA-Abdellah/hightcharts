document.addEventListener('DOMContentLoaded', function () {
   Highcharts.chart('container', {
        chart: {
            // type: 'column'
            // type:'pie'
            // type:'line'
            // type:'area'
            //  type:'scatter'
            //  type:'spline'
              type:'areaspline'
            //   type:'bar'
            //    type:'arearange'
            //    type:'columnrange'
        },
        cedits: {
            enabled: true
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
            data: [1, 0, 4,30,43,23,1,2,34]
            
        }, {
            name: 'John',
            data: [5, 7, 3,2,1,20,4,3,2]
        },
        {
            name: 'Abdellah',
            data: [5, 7, 3,2,1,20,4,3,2]
        }],
        
    });

});
