import React from "react";
import ReactApexChart from "react-apexcharts";

class LineChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: props.chartData,
      chartOptions: props.chartOptions,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.chartData != this.props.chartData) {
      this.setState({
        chartData: this.props.chartData,
        chartOptions: this.props.chartOptions,
      });
    }
  }

  render() {
    console.log(this.props.chartData, this.props.chartOptions);

    return (
      <ReactApexChart
        options={this.state.chartOptions}
        series={this.state.chartData}
        type="area"
        width="100%"
        height="100%"
      />
    );
  }
}

export default LineChart;
