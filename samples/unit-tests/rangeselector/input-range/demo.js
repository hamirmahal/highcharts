$(function () {
    QUnit.test('RangeSelector inputs setting not affecting each other.', function (assert) {
        var data = [],
            dayFactor = 1000 * 3600 * 24,
            startDate = Date.UTC(2000, 0, 1);

        for (var i = 0; i < 60; ++i) {
            data.push([startDate + i * dayFactor, i]);
        }

        var chart = Highcharts.stockChart('container', {
            series: [{
                data: data
            }]
        });

        chart.rangeSelector.minInput.value = '2000-01-16';
        chart.rangeSelector.minInput.onkeypress({ keyCode: 13 });

        chart.rangeSelector.maxInput.value = '2000-02-16';
        chart.rangeSelector.maxInput.onkeypress({ keyCode: 13 });

        assert.strictEqual(chart.xAxis[0].min, Date.UTC(2000, 0, 16), 'xAxis minumum remains correct');
    });
});
