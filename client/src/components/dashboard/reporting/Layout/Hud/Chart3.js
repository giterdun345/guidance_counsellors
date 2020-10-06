import React from 'react'
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'

const Chart3 = (props) => {
    // console.log(props.engaged)
    const engagedSchool = (schoolName, population, month) => {
        let total = 0
        for(var i =0; i < props.engaged.length; i++){
            if((props.engaged[i].school === schoolName)){
                console.log("taken", props.engaged[i].connection_date, "moment", moment(props.engaged[i].connection_date).month())
                // console.log("taken", props.students[index].mon, "moment", moment(props.students[index].mon).month())

                if(moment(props.engaged[i].connection_date).month() === month - 1){
                    total += parseInt(props.engaged[i].students, 10)
                }
            } 
        }
        return  Math.round((total / population))
    }
 
// console.log(engagedSchool('Sir John A. Cumber', props.schoolPop.jacumber, moment().month()))
    // console.log(props.schoolPop)
    
const datas=
    {
        totalCost:[100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100, 100, 100, 100, 100, 100],
        grade: [
                'Theoline L. McCoy',
                'Sir John A. Cumber', 
                'Edna M. Moyle', 
                'Georgetown', 
                'East End',
                'Prospect',
                'Red Bay', 
                'Savannah', 
                'John Gray', 
                'Clifton Hunter',
                'CIFEC', 
                'Creek & Spot', 
                'West End', 
                'Layman E. Scott',
                'Lighthouse', 
                'Cornerstones',
                'Early Interventions',
                'Little Stars', 
                'Stepping Stones'
            ],
        chartData:[
            engagedSchool('Theoline L. McCoy', props.schoolPop['tlMccoy'], moment().month()), 
            engagedSchool('Sir John A. Cumber', props.schoolPop['jacumber'], moment().month()),
            engagedSchool('Edna M. Moyle', props.schoolPop['emmoyle'], moment().month()),
            engagedSchool('Georgetown', props.schoolPop['georgetown'], moment().month()),
            engagedSchool('East End', props.schoolPop['eastEnd'], moment().month()),
            engagedSchool('Prospect', props.schoolPop['prospect'], moment().month()),
            engagedSchool('Red Bay', props.schoolPop['redBay'], moment().month()),
            engagedSchool('Savannah', props.schoolPop['savannah'], moment().month()),
            engagedSchool('John Gray', props.schoolPop['johnGray'], moment().month()),
            engagedSchool('Clifton Hunter', props.schoolPop['cliftonHunter'], moment().month()),
            engagedSchool('CIFEC', props.schoolPop['cifec'], moment().month()),
            engagedSchool('Creek & Spot', props.schoolPop['creek'], moment().month()),
            engagedSchool('West End', props.schoolPop['westEnd'], moment().month()),
            engagedSchool('Layman E. Scott', props.schoolPop['leScott'], moment().month()),
            engagedSchool('Lighthouse', props.schoolPop['lighthouse'], moment().month()),
            engagedSchool('Cornerstones', props.schoolPop['cornerstones'], moment().month()),
            engagedSchool('Early Interventions', props.schoolPop['earlyInterventions'], moment().month()),
            engagedSchool('Little Stars', props.schoolPop['littleStars'], moment().month()),
            engagedSchool('Stepping Stones', props.schoolPop['steppingStones'], moment().month()),
            // engagedSchool('Sir John A. Cumber', props.schoolPop['Sir John A. Cumber'], moment().month()),
            // engagedSchool('Sir John A. Cumber', props.schoolPop['Sir John A. Cumber'], moment().month()),    
        ]
    }

    var option = {
        backgroundColor: '#100736',
        title: {
            top: 40,
            text: 'School Engagement for Month',
            subtext: '',
            x: 'center',
            textStyle: {
                align: 'center',
                color: '#CCC',
                fontSize: 15,
                fontWeight: '100',
            },
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: "rgba(0,0,0,.3)"
        },
        grid: {
            bottom: '15%',
            left: '10',
            top: '20%',
            right: '10',
        },
        xAxis: {
            show: false,
        },
        yAxis: {
            show: false,
            inverse: true,
            type: 'category',
            data: datas.grade,
        },
        series: [{
                type: 'bar',
                barGap: '-100%',
                  barWidth: '25%',
                z: 1,
                data: datas.totalCost,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#9bb2d4',
                        fontSize: 12,
                        offset: [-60, 0],
                        formatter: function(param) {
                            var dd = datas.chartData;
                            return +dd[param.dataIndex] + '%';
                        },
                    }
                },
      
                itemStyle: {
                    normal: {
                        shadowColor: 'rgba(200, 200, 200, 0.15)',
                        shadowBlur: 0,
                        shadowOffsetX: 1,
                        shadowOffsetY: 1,
                        color: '#1b223b',
                    }
                },
            },
            {
                type: 'bar',
                z: 2,
                data: datas.chartData,
                label: {
                    normal: {
                        show: true,
                        position: 'insideLeft',
                        color: '#9bb2d4',
                        fontSize: 12,
                        formatter: function(param) {
                            return param.name;
                        },
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 4,
                        opacity: 1,
                        color: function(params) {
                            let colorList = [
                            
                                // INDEX 1 'Theoline L. McCoy'
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 2 'Sir John A. Cumber'
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 3 'Edna M. Moyle'
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 4 'Georgetown'
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 5 east end 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 6 Prospect
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX7 'Red Bay', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX8 'Savannah', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX9 'John Gray', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 10 'Clifton Hunter', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 11 'CIFEC',
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#024cc4'
                                }, {
                                    offset: 0.5,
                                    color: '#015ef3'
                                }, {
                                    offset: 1,
                                    color: '#015ef3'
                                }]),
                                // INDEX 12  'Cayman Brac Primary', '
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#a201f3'
                                }, {
                                    offset: 1,
                                    color: '#a201f3'
                                }]),
                                // INDEX 13 Creek & Spot', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#a201f3'
                                }, {
                                    offset: 1,
                                    color: '#a201f3'
                                }]),
                                // INDEX 14 'West End', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#a201f3'
                                }, {
                                    offset: 1,
                                    color: '#a201f3'
                                }]),
                                // INDEX 15 'Layman E. Scott', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#a201f3'
                                }, {
                                    offset: 1,
                                    color: '#a201f3'
                                }]),
                                // INDEX 16 'Little Cayman Education Service', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#9602d5'
                                }, {
                                    offset: 0.5,
                                    color: '#a201f3'
                                }, {
                                    offset: 1,
                                    color: '#a201f3'
                                }]),
                                // INDEX 0 lighthouse
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#6c01f3'
                                }, {
                                    offset: 1,
                                    color: '#6c01f3'
                                }]),
                                // INDEX 17 'Cornerstones', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#6c01f3'
                                }, {
                                    offset: 1,
                                    color: '#6c01f3'
                                }]),
                                // INDEX 18 'Early Interventions', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#6c01f3'
                                }, {
                                    offset: 1,
                                    color: '#6c01f3'
                                }]),
                                // INDEX 19 'Little Stars', 
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#6c01f3'
                                }, {
                                    offset: 1,
                                    color: '#6c01f3'
                                }]),
                                // INDEX 20 'Stepping Stones'
                                new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#5d01d1'
                                }, {
                                    offset: 0.5,
                                    color: '#6c01f3'
                                }, {
                                    offset: 1,
                                    color: '#6c01f3'
                                }]),
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: .5,
                    }
                },
                max: 1
            }
        ]
    }
return(
    <ReactEcharts 
    option={option} 
    style={{height: '100%', z:"1"}}  
    className='center' />
)
}

export default Chart3