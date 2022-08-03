document.addEventListener('DOMContentLoaded', function () {
   Highcharts.chart('container', {
        chart: {
            // type: 'column'
            // type:'pie'
            // type:'line'
            // type:'area'
             type:'scatter'
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
            data: [1, 0, 4]
            
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});
