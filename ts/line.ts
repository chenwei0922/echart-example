// 折线图
const line1 = () => {
  // 实例化对象
  // 基于准备好的dom，初始化echarts实例
  const myChart = window.echarts.init(document.querySelector('.line .chart'))

  // (1)准备数据
  const data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ]
  }

  // 2. 指定配置和数据
  const option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      // 通过坐标轴来触发
      trigger: 'axis'
    },
    legend: {
      // 距离容器10%
      right: '10%',
      // 修饰图例文字的颜色
      textStyle: {
        color: '#4c9bfd'
      }
      // 如果series 里面设置了name，此时图例组件的data可以省略
      // data: ["邮件营销", "联盟广告"]
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true,
      borderColor: '#012f4a',
      containLabel: true
    },

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: 'rgba(255,255,255,.7)'
      },
      // 去除x坐标轴的颜色
      axisLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      // 去除刻度
      axisTick: {
        show: false
      },
      // 修饰刻度标签的颜色
      axisLabel: {
        color: 'rgba(255,255,255,.7)'
      },
      // 修改y轴分割线的颜色
      splitLine: {
        lineStyle: {
          color: '#012f4a'
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: '总量',
        // 是否让线条圆滑显示
        smooth: true,
        data: data.year[0]
      },
      {
        name: '新增游客',
        type: 'line',
        stack: '总量',
        smooth: true,
        data: data.year[1]
      }
    ]
  }
  // 3. 把配置和数据给实例对象
  myChart.setOption(option)

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

// 折线图2
const line2 = () => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = window.echarts.init(document.querySelector('.line1 .chart'))

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#dddc6b'
        }
      }
    },
    legend: {
      top: '0%',
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      }
    },
    grid: {
      left: '10',
      top: '30',
      right: '10',
      bottom: '10',
      containLabel: true
    },

    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.2)'
          }
        },

        data: [
          '01',
          '02',
          '03',
          '04',
          '05',
          '06',
          '07',
          '08',
          '09',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
          '19',
          '20',
          '21',
          '22',
          '23',
          '24',
          '25',
          '26',
          '27',
          '28',
          '29',
          '30'
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: 'bottom',
        offset: 20
      }
    ],

    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: 'rgba(255,255,255,.1)'
          }
        },
        axisLabel: {
          textStyle: {
            color: 'rgba(255,255,255,.6)',
            fontSize: 12
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
        name: '播放量',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: '#0184d5',
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new window.echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(1, 132, 213, 0.4)'
                },
                {
                  offset: 0.8,
                  color: 'rgba(1, 132, 213, 0.1)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        },
        itemStyle: {
          normal: {
            color: '#0184d5',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          }
        },
        data: [
          30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 60, 20,
          40, 20, 40
        ]
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: '#00d887',
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new window.echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(0, 216, 135, 0.4)'
                },
                {
                  offset: 0.8,
                  color: 'rgba(0, 216, 135, 0.1)'
                }
              ],
              false
            ),
            shadowColor: 'rgba(0, 0, 0, 0.1)'
          }
        },
        itemStyle: {
          normal: {
            color: '#00d887',
            borderColor: 'rgba(221, 220, 107, .1)',
            borderWidth: 12
          }
        },
        data: [
          50, 30, 50, 60, 10, 50, 30, 50, 60, 40, 60, 40, 80, 30, 50, 60, 10, 50, 30, 70, 20, 50, 10, 40, 50, 30, 70,
          20, 50, 10, 40
        ]
      }
    ]
  }

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
}

export { line1, line2 }
