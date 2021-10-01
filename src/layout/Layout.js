import React from 'react';
import reactDom from 'react-dom';

class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: false
        };

        this.toggleColor = this.toggleColor.bind(this);
    }

    toggleColor() {
        var color = this.state.color;
        var paragraph = document.getElementById('paragraph');
        if (color) {
            reactDom.findDOMNode(paragraph).style.color = 'black';
        } else {
            reactDom.findDOMNode(paragraph).style.color = 'red';
        }
        this.setState({ color: !color });
    }

    render() {
        return (
            <div>
                <button class="btn btn-primary" onClick={this.toggleColor}>
                    Toggle Color
                </button>
                <hr />
                <p>Color?: {this.state.color ? 'true' : 'false'}</p>
                <p id="paragraph">Paragraph</p>
            </div>
        );
    }
}

export default Layout;