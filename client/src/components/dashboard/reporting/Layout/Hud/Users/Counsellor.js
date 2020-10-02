import React from 'react'
// import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';
import moment from 'moment'


const Counsellor = (props) => {
    let thisMonth = moment().month()
    let textMonth = moment().format('MMMM')
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
     totalMeets:0, 
     totalSBT:0, 
     totalOutside:0

    } 

    for(let index in props.allConnections){
        if((props.allConnections[index].user_name === userName) && (moment(props.allConnections[index].mon).month() === month)){
            // console.log("entered")
          if (props.allConnections[index].contact_method === 'session'){breakdown.totalSession = breakdown.totalSession+1}
          if (props.allConnections[index].contact_method === 'classroom presentation'){breakdown.totalPresentation = breakdown.totalPresentation+1}
          if (props.allConnections[index].contact_method === 'group session'){breakdown.totalGroups= breakdown.totalGroups+1}
          if (props.allConnections[index].contact_method === 'check in'){breakdown.totalChecks=breakdown.totalChecks+1}
          if (props.allConnections[index].contact_method === 'crisis intervention'){breakdown.totalInterventions=breakdown.totalInterventions+1}
          if (props.allConnections[index].contact_method === 'home visit'){breakdown.totalVisits=breakdown.totalVisits+1}
          if (props.allConnections[index].contact_method === 'sbst, mdt, case conference'){breakdown.totalSBT=breakdown.totalSBT+1}
          if (props.allConnections[index].contact_method === 'outside agency meeting'){breakdown.totalOutside=breakdown.totalOutside+1}
          if (props.allConnections[index].contact_method === 'other meeting'){breakdown.totalMeets=breakdown.totalMeets+1}
          if (props.allConnections[index].contact_type === 'parent'){breakdown.totalParents=breakdown.totalParents+1}
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
    // console.log(workBreakdown(props.name, thisMonth))
    console.log(sumAll(workBreakdown(props.name, thisMonth)))
    const components = workBreakdown(props.name, thisMonth)
    const all = sumAll(workBreakdown(props.name, thisMonth))
    let first = (all - components.totalParents)
    let second = (first-components.totalSession)
    let third = (second-components.totalGroups)
    let fourth = (third-components.totalMeets) 
    let fifth = (fourth-components.totalPresentation) 
    let sixth = (fifth-components.totalCPRef)
    let seventh = (sixth-components.totalChecks)
    let eighth = (seventh-components.totalVisits)
    let ninth = (eighth -components.totalSBT)
    let tenth = (ninth - components.totalOutside)
const option = {
  title: {
      text: `${textMonth} Output`,
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
      data: ['Output', 'Parents', 'Sessions', 'Group Sessions', 'Other Meetings', 'Classroom Presentations', 'CP Referrals',  'Check-ins', 'Home Visits', 'SBST, MDT, Case Conf', 'Outside Meetings', 'Crisis Interventions']
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
          data: [0, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, 0]
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
            components.totalSBT, 
            components.totalOutside,
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
          {service: 'Work', 'Oct': sumAll(workBreakdown(props.name, thisMonth)), 'Nov':sumAll(workBreakdown(props.name, thisMonth + 1)), 'Dec': sumAll(workBreakdown(props.name, thisMonth + 2))},
        //   {service: 'Students Engaged', 'Oct': workBreakdown('user1', 9), 'Nov':workBreakdown('user1', 9), 'Dec': workBreakdown('user1', 9)},
        //   {service: 'Matcha Latte', 'Oct': workBreakdown('user1', 10), 'Nov':workBreakdown('user1', 10), 'Dec': workBreakdown('user1', 10)},
        //   {service: 'Milk Tea', 'Oct': 83.1, 'Nov': 73.4, 'Dec': 55.1},
        //   {service: 'Cheese Cocoa', 'Oct': 86.4, 'Nov': 65.2, 'Dec': 82.5},
          {service: 'Projected Amount', 'Oct': 72.4, 'Nov': 53.9, 'Dec': 39.1}
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
  "total": 1088,
  "school1": {
    "parent contact": 323,
    "group session": 216,
    "session": 756,
    "other meeting": 777,
    "presentation": 735,
    "scatter": 240,
    "cp referral": 184,
    "check-in": 209,
    "home visit": 176,
    "sbst, mdt, case conf": 159,
    "outside meeting": 206,
    "crisis intervention": 153,
  },
  "school2": {
    "parent contact": 278,
    "group session": 75,
    "session": 94,
    "other meeting": 94,
    "presentation": 92,
    "scatter": 34,
    "cp referral": 29,
    "check-in": 27,
    "home visit": 27,
    "sbst, mdt, case conf": 24,
    "outside meeting": 30,
    "crisis intervention": 19
  },
  "ie": 3520
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
        max: builderJson.total,
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        max: builderJson.total,
        gridIndex: 1,
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: Object.keys(builderJson.school1),
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
        data: Object.keys(builderJson.school1),
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
        data: Object.keys(builderJson.school2).map(function (key) {
            return builderJson.school2[key];
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
        data: Object.keys(builderJson.school2).map(function (key) {
            return builderJson.total - builderJson.school2[key];
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
        data: Object.keys(builderJson.school1).map(function (key) {
            return builderJson.school1[key];
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
        data: Object.keys(builderJson.school1).map(function (key) {
            return builderJson.total - builderJson.school1[key];
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