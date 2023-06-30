// 柱状图1
const bar1 = () => {
  // 实例化对象
  const myChart = window.echarts.init(document.querySelector('.bar .chart'))
  // 指定配置数据
  const option = {
    color: ['#2f89cf'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '0%',
      top: '10px',
      right: '0%',
      bottom: '4%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['旅游行业', '教育培训', '游戏行业', '医疗行业', '电商行业', '社交行业', '金融行业'],
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12'
          }
        },
        axisLine: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: '12'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
            // width: 1,
            // type: "solid"
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          barBorderRadius: 5
        }
      }
    ]
  }
  // 把配置给实例对象
  myChart.setOption(option)

  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

// 柱状图2
const bar2 = () => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = window.echarts.init(document.querySelector('.bar1 .chart'))

  const data = [70, 34, 60, 78, 69]
  const titlename = ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE']
  const valdata = [702, 350, 610, 793, 664]
  const myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
  const option = {
    // 图标位置
    grid: {
      top: '10%',
      left: '22%',
      bottom: '10%'
    },
    xAxis: {
      show: false
    },
    yAxis: [
      {
        show: true,
        data: titlename,
        inverse: true,
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff',

          rich: {
            lg: {
              backgroundColor: '#339911',
              color: '#fff',
              borderRadius: 15,
              // padding: 5,
              align: 'center',
              width: 15,
              height: 15
            }
          }
        }
      },
      {
        show: true,
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: '#fff'
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        yAxisIndex: 0,
        data,
        barCategoryGap: 50,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color(params: { dataIndex: number }) {
              const num = myColor.length
              return myColor[params.dataIndex % num]
            }
          }
        },
        label: {
          normal: {
            show: true,
            position: 'inside',
            formatter: '{c}%'
          }
        }
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        barCategoryGap: 50,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: 'none',
            borderColor: '#00c1de',
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}
export { bar1, bar2 }
