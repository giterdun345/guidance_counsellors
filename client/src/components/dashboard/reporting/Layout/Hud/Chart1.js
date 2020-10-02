import React from 'react'
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
// import moment from 'moment'

const Chart1 = (props) => {
//     const tallyServices = (service, column, month) => {
//         let total = 0
//         for(let index in service){
//             if(moment(service[index].mon).month() === month){
//                 total += parseInt(service[index][column],  10)
//             }
//         }
//         return total
//     }

//     // console.log(tallyServices(props.visits, "visits", moment().month()))

//    let option = {
//         dataset: {
//             // source: [
//             //     ['Amount', 'Service'],
//             //     [89, 'Check-in'],
//             //     [57, 'Classroom Presentation'],
//             //     [74, 'Session'],
//             //     [50, 'Group Session'],
//             //     [89, 'Crisis Intervention'],
//             //     [68, 'Home Visit'],
//             //     [19, 'Meeting'],
//             //     [10, 'Parent Contact'],
//             //     [32, 'CP Referral'],
//             //     [32, 'Referral'],
//             //     [32, 'Discharge']
//             // ]
//             source:[
//                 ['Amount', 'Service'],
//                 // [tallyServices(props.checks, "checks", moment().month()), 'Check-in'],
//                 // [tallyServices(props.presentations, "presentations", moment().month()), 'Classroom Presentation'],
//                 // [tallyServices(props.sessions, "sessions", moment().month()), 'Session'],
//                 // [tallyServices(props.groups, "groups", moment().month()), 'Group Session'],
//                 // [tallyServices(props.interventions, "interventions", moment().month()), 'Crisis Intervention'],
//                 // [tallyServices(props.agencies, "agencies", moment().month()), 'Other Methods'],
//                 // [tallyServices(props.visits, "visits", moment().month()), 'Home Visit'],
//                 // [tallyServices(props.meeting, "meets", moment().month()), 'Meeting'],
//                 [tallyServices(props.parent, "parents", moment().month()), 'Parent Contact'],
//                 [tallyServices(props.cpref, "cps", moment().month()), 'CP Referral'],
//                 [tallyServices(props.referrals, "referrals", moment().month()), 'Referral'],
//                 [tallyServices(props.discharges, "discharges", moment().month()), 'Discharge']
//             ]
//         },
//         grid: {containLabel: true},
//         xAxis: {name: 'amt'},
//         yAxis: {type: 'category'},
//         textStyle:{
//             // fontStyle:
//             color:"white"
//         },
//         // visualMap: {
//         //     orient: 'horizontal',
//         //     left: 'center',
//         //     min: 10,
//         //     max: 100,
//         //     text: ['High Score', 'Low Score'],
//         //     // Map the score column to color
//         //     dimension: 0,
//         //     inRange: {
//         //         color: ['#D7DA8B', '#E15457']
//         //     }
//         // },
//         title:{
//             text: "This Month's Tally:",
//             textStyle:{
//                 color:"white",
//                 x: "center"
//             }
//         },
//         series: [
//             {
//                 type: 'bar',
//                 encode: {
//                     // Map the "amount" column to X axis.
//                     x: 'Amount',
//                     // Map the "product" column to Y axis
//                     y: 'Service'
//                 }
//             }
//         ]
//     };

const datas=
{
    totalCost:[1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
    grade: ['Theoline L. McCoy', 'Sir John A. Cumber', 'Edna M. Moyle', 'Georgetown', 'East End', 'Prospect', 'Red Bay', 'Savannah', 'John Gray', 'Clifton Hunter', 'CIFEC', 'Cayman Brac Primary', 'Creek & Spot', 'West End', 'Layman E. Scott', 'Little Cayman Education Service', 'Lighthouse', 'Cornerstones', 'Early Interventions', 'Little Stars', 'Stepping Stones'],
    chartData:[750, 110, 130, 140, 640, 220, 470, 480, 230, 360, 570, 990, 780, 940, 710, 530, 980, 340, 980, 340, 120]
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
            style={{height: '100%', width: '100%'}}  
            className='center' />
    )
}


export default Chart1



