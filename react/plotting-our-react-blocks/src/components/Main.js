import { Component } from 'react';
// import Subcontent from './Subcontent';
// import Advertisement from './Advertisement';
export class Main extends Component {



    render() {
        return(
            <div class="main">
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default Main;