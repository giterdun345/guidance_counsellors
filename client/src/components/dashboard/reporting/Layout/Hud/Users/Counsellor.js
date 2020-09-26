import React from 'react'
import echarts from 'echarts/lib/echarts';import ReactEcharts from 'echarts-for-react';
import moment from 'moment'


const Counsellor = (props) => {
    let thisMonth = moment().month() + 1
  function workBreakdown(userName, month){
    // month must be (month - 1) due to indexing with moment/
    let breakdown = {
     totalSession:0,
     totalPresentation:0,
     totalGroups:0,
     totalChecks:0,
     totalInterventions:0,
     totalVisits:0,
     totalParents:0,
     totalCPRef:0,
     totalMeets:0
    } 

    for(let index in props.allConnections){
        if((props.allConnections[index].user_name === userName) && (moment(props.allConnections[index].mon).month() === month)){
          if (props.allConnections[index].contact_method === 'session'){breakdown.totalSession = breakdown.totalSession+1}
          if (props.allConnections[index].contact_method === 'classroom presentation'){breakdown.totalPresentation = breakdown.totalPresentation+1}
          if (props.allConnections[index].contact_method === 'group session'){breakdown.totalGroups= breakdown.totalGroups+1}
          if (props.allConnections[index].contact_method === 'check in'){breakdown.totalChecks=breakdown.totalChecks+1}
          if (props.allConnections[index].contact_method === 'crisis intervention'){breakdown.totalInterventions=breakdown.totalInterventions+1}
          if (props.allConnections[index].contact_method === 'home visit'){breakdown.totalVisits=breakdown.totalVisits+1}
          if (props.allConnections[index].contact_type === 'parent'){breakdown.totalParents=breakdown.totalParents+1}
          if (props.allConnections[index].contact_method === 'meeting'){breakdown.totalMeets=breakdown.totalMeets+1}
          if (props.allConnections[index].cp_referral === 'Yes'){breakdown.totalCPRef=breakdown.totalCPRef+1}
        }
    }
    return breakdown
}
    const sumAll = (obj) => {
      let sum = 0;
      for (let key in obj) {
        sum += parseInt(obj[key], 10)
      } 
      return sum
    }
    // console.log(thisMonth)
    // console.log(workBreakdown(name.props, thisMonth))
    // console.log(sumAll(workBreakdown(name.props, thisMonth)))
    const components = workBreakdown(props.name, 8)
    const all = sumAll(workBreakdown(props.name, 8))
    let first = (all - components.totalParents)
    let second = (first-components.totalSession)
    let third = (second-components.totalGroups)
    let fourth = (third-components.totalMeets) 
    let fifth = (fourth-components.totalPresentation) 
    let sixth = (fifth-components.totalCPRef)
    let seventh = (sixth-components.totalChecks)
    let eighth = (seventh-components.totalVisits)
const option = {
  title: {
      text: 'Work',
      subtext: 'breakdown of components',
      textAlign:"left"
  },
  tooltip: {
      trigger: 'axis',
      axisPointer: {            
          type: 'shadow'        
      },
      formatter: function (params) {
          var tar = params[1];
          return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
      }
  },
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: {
      type: 'category',
      splitLine: {show: false},
      data: ['Work','Sessions', 'Classroom Presentations', 'Group Sessions', 'Check-ins', 'Crisis Interventions', 'Home Visits', 'Parent Contacts', 'CP Referrals', 'Meetings']
  },

  yAxis: {
      type: 'value'
  },
  series: [
      {
          name: 'Component',
          type: 'bar',
          stack: 'total',
          itemStyle: {
              barBorderColor: 'rgba(0,0,0,0)',
              color: 'rgba(0,0,0,0)'
          },
          emphasis: {
              itemStyle: {
                  barBorderColor: 'rgba(0,0,0,0)',
                  color: 'rgba(0,0,0,0)'
              }
          },
          data: [0, first, second, third, fourth, fifth, sixth, seventh, eighth, 0]
      },
      {
          name: 'Amount',
          type: 'bar',
          stack: 'total',
          label: {
              show: true,
              position: 'inside'
          },
          data: [
            all,
            components.totalParents, 
            components.totalSession,
            components.totalGroups, 
            components.totalMeets,
            components.totalPresentation,
            components.totalCPRef, 
            components.totalChecks,
            components.totalVisits,
            components.totalInterventions
        ]
      }
  ]
};



const option2 = {
    title:{
      text: 'Monthly Work',
      subtext: 'Conmparing Months of Work can add additional',
      textAlign:"left"
    },
  legend: {},
  tooltip: {},
  dataset: {
      dimensions: ['service', 'Oct', 'Nov', 'Dec'],
      source: [
          {service: 'Work', 'Oct': sumAll(workBreakdown(props.name, 10)), 'Nov':sumAll(workBreakdown(props.name, 11)), 'Dec': sumAll(workBreakdown(props.name, 12))},
        //   {service: 'Students Engaged', 'Oct': workBreakdown('user1', 9), 'Nov':workBreakdown('user1', 9), 'Dec': workBreakdown('user1', 9)},
        //   {service: 'Matcha Latte', 'Oct': workBreakdown('user1', 10), 'Nov':workBreakdown('user1', 10), 'Dec': workBreakdown('user1', 10)},
        //   {service: 'Milk Tea', 'Oct': 83.1, 'Nov': 73.4, 'Dec': 55.1},
        //   {service: 'Cheese Cocoa', 'Oct': 86.4, 'Nov': 65.2, 'Dec': 82.5},
          {service: 'Something', 'Oct': 72.4, 'Nov': 53.9, 'Dec': 39.1}
      ]
  },
  xAxis: {type: 'category'},
  yAxis: {},
  // Declare several bar series, each will be mapped
  // to a column of dataset.source by default.
  series: [
      {type: 'bar'},
      {type: 'bar'},
      {type: 'bar'}
  ]
};



var builderJson = {
  "all": 10887,
  "charts": {
    "map": 3237,
    "lines": 2164,
    "bar": 7561,
    "line": 7778,
    "pie": 7355,
    "scatter": 2405,
    "candlestick": 1842,
    "radar": 2090,
    "heatmap": 1762,
    "treemap": 1593,
    "graph": 2060,
    "boxplot": 1537,
    "parallel": 1908,
    "gauge": 2107,
    "funnel": 1692,
    "sankey": 1568
  },
  "components": {
    "geo": 2788,
    "title": 9575,
    "legend": 9400,
    "tooltip": 9466,
    "grid": 9266,
    "markPoint": 3419,
    "markLine": 2984,
    "timeline": 2739,
    "dataZoom": 2744,
    "visualMap": 2466,
    "toolbox": 3034,
    "polar": 1945
  },
  "ie": 9743
};

var downloadJson = {
  "echarts.min.js": 17365,
  "echarts.simple.min.js": 4079,
  "echarts.common.min.js": 6929,
  "echarts.js": 14890
};

var themeJson = {
  "dark.js": 1594,
  "infographic.js": 925,
  "shine.js": 1608,
  "roma.js": 721,
  "macarons.js": 2179,
  "vintage.js": 1982
};

var waterMarkText = 'ECHARTS';

var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 100;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
ctx.fillText(waterMarkText, 0, 0);

const option3 = {
    backgroundColor: {
        type: 'pattern',
        image: canvas,
        repeat: 'repeat'
    },
    tooltip: {},
    title: [{
        text: 'Visualizations',
        subtext: 'Breakdown ' + builderJson.all,
        left: '25%',
        textAlign: 'center'
    }, {
        text: 'Extras',
        subtext: 'extra add ons ' + Object.keys(downloadJson).reduce(function (all, key) {
            return all + downloadJson[key];
        }, 0),
        left: '75%',
        textAlign: 'center'
    }, {
        text: 'Pie Charts',
        subtext: 'Pie' + Object.keys(themeJson).reduce(function (all, key) {
            return all + themeJson[key];
        }, 0),
        left: '75%',
        top: '50%',
        textAlign: 'center'
    }],
    grid: [{
        top: 50,
        width: '50%',
        bottom: '45%',
        left: 10,
        containLabel: true
    }, {
        top: '55%',
        width: '50%',
        bottom: 0,
        left: 10,
        containLabel: true
    }],
    xAxis: [{
        type: 'value',
        max: builderJson.all,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        max: builderJson.all,
        gridIndex: 1,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.charts),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }, {
        gridIndex: 1,
        type: 'category',
        data: Object.keys(builderJson.components),
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        stack: 'chart',
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'chart',
        silent: true,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.charts).map(function (key) {
            return builderJson.all - builderJson.charts[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        xAxisIndex: 1,
        yAxisIndex: 1,
        z: 3,
        label: {
            normal: {
                position: 'right',
                show: true
            }
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.components[key];
        })
    }, {
        type: 'bar',
        stack: 'component',
        silent: true,
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
            normal: {
                color: '#eee'
            }
        },
        data: Object.keys(builderJson.components).map(function (key) {
            return builderJson.all - builderJson.components[key];
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '25%'],
        data: Object.keys(downloadJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: downloadJson[key]
            }
        })
    }, {
        type: 'pie',
        radius: [0, '30%'],
        center: ['75%', '75%'],
        data: Object.keys(themeJson).map(function (key) {
            return {
                name: key.replace('.js', ''),
                value: themeJson[key]
            };
        })
    }]
};

    return(
        <div>
            <h1 className="text-center" style={{textShadow: "2px 2px gray"}}>{props.name}</h1>
            <div>
              <ReactEcharts 
              option={option} 
              style={{height: '500px', width: '100%'}}  
              className="align-text-bottom" />
            </div>
            <div style={{marginTop:"100px"}}>
              <ReactEcharts 
              option={option2} 
              style={{height: '500px', width: '100%'}}  
              className="align-text-bottom" />
            </div>
            <div>
              <ReactEcharts 
              option={option3} 
              style={{height: '500px', width: '100%'}}  
              className="align-text-bottom" />
            </div>
        </div>
        
    )
}

export default Counsellor