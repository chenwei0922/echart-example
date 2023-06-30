interface Window {
  echarts: any,
}
declare module 'echarts' {
  const echarts: any
  export default echarts
}