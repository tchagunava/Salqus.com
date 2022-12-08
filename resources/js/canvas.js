google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['Year', 'Percentage'],
        ["2011", 5],
        ["2012", 5],
        ["2013", 6],
        ['2014', 6],
        ['2015', 3],
        ['2016', 5],
        ['2017', 6],
        ['2018', 7],
        ['2019', 7.5],
        ['2020', 7],
        ['2020', 7.9],
    ]);

    var options = {
        width: 800,
        // legend: { position: 'none' },
        chart: {
            // title: 
            // subtitle: 
        },
        axes: {
            x: {
                // 0: { side: 'top', label: 'White to move' } // Top x-axis.
            }
        },
        bar: { groupWidth: "50%" }
    };

    var chart = new google.charts.Bar(document.getElementById('top_x_div'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
};