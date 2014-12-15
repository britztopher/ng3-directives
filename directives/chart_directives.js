angular.module('charts', [])

    .directive('barChart', [
        function () {

            return {
                restrict: 'EA',
                template: '<linechart data="data" options="options" mode=""></linechart>',
                scope:{},
                link: function(scope, elements, attrs){

                    var data = []

                    //build the dummy data
                    for(var i = 0; i<40; i++){
                        var vals  = {x: i, firstVal: Math.round(Math.random()*100), secondVal: Math.round(Math.random()*100), thirdVal: Math.round(Math.random()*100)}
                        data.push(vals);
                    }

                    runData();

                    //run this to associate the chart with its data and options
                    function runData(){

                        scope.data = data;

                        scope.options = {
                            stacks: [{axis: "y", series: ["firstVal", "secondVal", 'thirdVal']}],
                            fonts: {family: 'serif', size: '14px'},
                            axes: {
                                x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', ticks: 30},
                                y: {type: 'linear', min: 0}
                            },
                            transition: {ease: 'elastic', duration: 500, delay: 20},
                            series: [
                                {id: 'firstVal', y: 'firstVal', axis: 'y', color: 'blue', thickness: '2px', type: 'column', label: 'First Value'},
                                {id: 'secondVal', y: 'secondVal', axis: 'y', color: 'green', type: 'column', drawDots: true, dotSize: 4, label: 'Second Value'},
                                {id: 'thirdVal', y: 'thirdVal', axis: 'y', color: 'purple', type: 'column', dotSize: 2, label: 'Third Value'}
                            ],
                            lineMode: 'linear',
                            tension: 0.2,
                            tooltip: {
                                mode: 'scrubber', formatter: function (x, y, series) {
                                    return series.label + ', ' + Math.round(y);
                                }
                            },
                            drawLegend: true,
                            drawDots: true,
                            columnsHGap: 10
                        }
                    }



                }

            };

        }])