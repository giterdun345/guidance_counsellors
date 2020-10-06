import React from 'react'
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'

const Chart1 = (props) => {

    function calculateWork(schoolName, month){
        // month must be (month - 1) due to indexing with moment/
        let total = 0
        for(let index in props.allConnections){
            const conditionsArray = [
                props.allConnections[index].contact_method === 'session',
                props.allConnections[index].contact_method === 'classroom presentation',
                props.allConnections[index].contact_method === 'group session',
                props.allConnections[index].contact_method === 'check-in',
                props.allConnections[index].contact_method === 'crisis intervention',
                props.allConnections[index].contact_method === 'home visit',
                props.allConnections[index].contact_type === 'parent',
                props.allConnections[index].contact_method === "outside agency meeting",
                props.allConnections[index].contact_method === 'other meeting',
                props.allConnections[index].cp_referral === 'Yes',
                props.allConnections[index].contact_method === "sbst, mdt, case conference"
            ]

            // console.log(props.allConnections[index].school, props.allConnections[index].contact_method)
            // console.log(props.allConnections[index].school, props.allConnections[index].contact_type)
            // console.log(props.allConnections[index].school, props.allConnections[index].cp_referral)

            if((props.allConnections[index].school === schoolName) && (moment(props.allConnections[index].connection_date).month() === month)){
                
                if (conditionsArray.includes(true)) {
                    total += 1
                 }
            }
        }
        return total
    }

    // console.log()

    const datas=
        {
            grade: ['Theoline L. McCoy', 'Sir John A. Cumber', 'Edna M. Moyle', 'Georgetown', 'East End', 'Prospect', 'Red Bay', 'Savannah', 'John Gray', 'Clifton Hunter', 'CIFEC', 'Creek & Spot', 'West End', 'Layman E. Scott', 'Lighthouse', 'Cornerstones', 'Early Interventions', 'Little Stars', 'Stepping Stones'],
            chartData:[
                calculateWork('Theoline L. McCoy', moment().month()),
                calculateWork('Sir John A. Cumber', moment().month()),
                calculateWork('Edna M. Moyle', moment().month()),
                calculateWork('East End', moment().month()), 
                calculateWork('Prospect', moment().month()), 
                calculateWork('Red Bay', moment().month()), 
                calculateWork('Savannah', moment().month()), 
                calculateWork('John Gray', moment().month()), 
                calculateWork('Clifton Hunter', moment().month()), 
                calculateWork('CIFEC', moment().month()), 
                calculateWork('Creek & Spot', moment().month()),  
                calculateWork('West End', moment().month()),
                calculateWork('Layman E. Scott', moment().month()),
                calculateWork('Lighthouse', moment().month()),
                calculateWork('Cornerstones', moment().month()),  
                calculateWork('Early Interventions', moment().month()),
                calculateWork('Little Stars', moment().month()),
                calculateWork('Stepping Stones', moment().month()), 
            ],

            totalCost:[25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25],

        }

    var option = {
        backgroundColor: '#100736',
        title: {
            top: 40,
            text: 'School Output for Month',
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
                            return +dd[param.dataIndex];
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
                                // INDEX 16 lighthouse
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
                style={{height: '100%', width: '100%'}}  
                className='center'
            />
    )
}


export default Chart1



