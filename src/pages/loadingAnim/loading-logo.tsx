import React, { useEffect, useState } from "react";

interface Props {
  doneAnim(): void;
  showPage(): void;
};
interface State {
  points: [number, number][];
  completeStr: string;
  str: string;
  last: number;
  alpha: number;
  finished: boolean;
  interval?: NodeJS.Timeout;
};

class LoadingLogo extends React.Component<Props, State> {
  interval: NodeJS.Timeout;

  constructor(props) {
    super(props);
    this.state = {
      points: [
        [125, 5],
        [5, 80],
        [5, 230],
        [125, 305],
        [255, 230],
        [255, 80],
        [125, 5]
      ],
      completeStr: "125,5",
      str: "125,5 125,5",
      last: 0,
      finished: false,
      alpha: 0,
    }
    this.hexagonAnim = this.hexagonAnim.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.hexagonAnim, 10);
  }

  hexagonAnim() {
    if(this.state.alpha >= 1) {
      let i;
      let cond = this.state.last + 1 === this.state.points.length - 1;
      if(cond)
        i = this.state.points.length - 1;
      else
        i = this.state.last + 1;

      let str = this.state.completeStr + " ";
      str += this.state.points[i][0] + "," + this.state.points[i][1];        
    
      if(cond) {
        this.setState({
          str,
          completeStr: str,
          last: i
        });
        clearInterval(this.interval);
        setTimeout(() => this.setState({ finished: true }), 150);
        setTimeout(this.props.showPage, 300);
        setTimeout(this.props.doneAnim, 300);
        return;
      } else
        this.setState({
          str,
          completeStr: str,
          last: i,
          alpha: 0
        });
    }

    /*
      This can be optimized by saving the difference between points
      and multiplying it by the alpha factor each iteration
    */

    let [lastX, lastY] = this.state.points[this.state.last];
    let [nextX, nextY] = this.state.points[this.state.last + 1];

    let alpha = this.state.alpha
    let str = this.state.completeStr + " ";
    str += lastX + (nextX - lastX) * alpha + ",";
    str += lastY + (nextY - lastY) * alpha;

    this.setState({
      str: str,
      alpha: alpha + .05
    })
  }

  render() {
    let style = { stroke: "#E94560", fill: "rgba(0,0,0,0)", "strokeLinejoin": "round" };

    return (
      <svg
        id="loading-svg"
        height="310"
        width="260"
        style={{
          transition: "all 0.5s ease-in-out",
          transform: `scale(${this.state.finished ? 0 : .4})`,
          opacity: `${this.state.finished ? 0 : 1}`
        }}
      >
        <polyline style={style} strokeWidth="8px" points={this.state.str} />
        <text
          style={{ 
            fill: "#E94560", 
            transition: "all 0.25s ease-in-out"
          }}
          x="53"
          y="190"
          fontFamily="Poppins"
          fontSize="110"
        >
          CS
      </text>
      </svg>
    );
  }
}

export default LoadingLogo;