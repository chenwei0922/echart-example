// 饼形图
const pie1 = () => {
  // 基于准备好的dom，初始化echarts实例
  const myChart = window.echarts.init(document.querySelector('.pie .chart'))

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
      position(p: number[]): number[] {
        // 其中p为当前鼠标的位置
        return [p[0] + 10, p[1] - 10]
      }
    },
    legend: {
      top: '90%',
      itemWidth: 10,
      itemHeight: 10,
      data: ['0岁以下', '20-29岁', '30-39岁', '40-49岁', '50岁以上'],
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ['50%', '42%'],
        radius: ['40%', '60%'],
        color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab', '#06b4ab', '#06c8ab', '#06dcab', '#06f0ab'],
        label: { show: false },
        labelLine: { show: false },
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
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

// 饼形图2
const pie2 = () => {
  // 1. 实例化对象
  const myChart = window.echarts.init(document.querySelector('.pie1  .chart'))
  // 2. 指定配置项和数据
  const option = {
    legend: {
      top: '90%',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: 'rgba(255,255,255,.5)',
        fontSize: '12'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    // 注意颜色写的位置
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    series: [
      {
        name: '点位统计',
        type: 'pie',
        // 如果radius是百分比则必须加引号
        radius: ['10%', '70%'],
        center: ['50%', '42%'],
        roseType: 'radius',
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '深圳' },
          { value: 42, name: '广东' }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        // 修饰引导线样式
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      }
    ]
  }

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option)
  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener('resize', () => {
    // 让我们的图表调用 resize这个方法
    myChart.resize()
  })
}
export { pie1, pie2 }
