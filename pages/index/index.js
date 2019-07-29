import * as echarts from '../../ec-canvas/echarts';

let chart = null;

function initChart(canvas, width, height) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '体重',
      textStyle: {
        fontSize: '16',
        fontWeight: 'bold'
      }
    },
    xAxis: [{
      type: 'category',
      data: ['4/1', '4/8', '4/15', '4/21', '4/28', '5/3'],
      axisPointer: {
        type: 'shadow'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#ccc',
          fontSize: '13'
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '单位：公斤',
      nameTextStyle: {
        color: '#bbb',
        fontSize: 13,
        padding: 10
      },
      min: 60,
      interval: 1,
      axisLabel: {
        formatter: 'value'

      },
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle: {
          color: '#ccc',
          fontSize: '13'
        }
      }
    }],
    series: [{
        name: '蒸发量',
        type: 'bar',
        data: [62, 62.4, 63.6, 62, 62.3, 61],
        barWidth: 16,
        itemStyle: {
          normal: {
            color: '#fcb5b9',
          }
        },
      },
      {
        name: '蒸发量',
        type: 'line',
        data: [62, 62.4, 63.6, 62, 62.3, 61],
        itemStyle: {
          normal: {
            color: '#fab0af',
          }
        },
        label: {
          normal: {
            show: true,
            position: 'top',
            color: '#85bff0',
            fontSize: '13'
          }
        },
        smooth: true
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

Page({
  onShareAppMessage: function(res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function() {},
      fail: function() {}
    }
  },
  data: {
    ec: {
      onInit: initChart
    }
  },

  onReady() {
    setTimeout(function() {
      // 获取 chart 实例的方式
      console.log(chart)
    }, 2000);
  }
});