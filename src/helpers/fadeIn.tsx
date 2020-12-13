import React from "react";
import ReactDOM from "react-dom";
import Fade from "react-reveal/Fade";

interface IProps { };
interface IState {
    hasAppeared: boolean;
}

class FadeIn extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            hasAppeared: false
        };

        this.checkScroll = this.checkScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.checkScroll);
    }

    checkScroll() {
        let main = ReactDOM.findDOMNode(this);
        let nodeDistance = main.getBoundingClientRect().top;
        let totalScroll = window.innerHeight + window.scrollY;

        if (nodeDistance + 50 <= totalScroll) {
            this.setState({ hasAppeared: true });
            window.removeEventListener("scroll", this.checkScroll); // Element has already appeared, remove event listener
        }
    }

    render() {
        return (
            <Fade left when={this.state.hasAppeared}>
                {this.props.children}
            </Fade>
        );
    }
}

export default FadeIn;