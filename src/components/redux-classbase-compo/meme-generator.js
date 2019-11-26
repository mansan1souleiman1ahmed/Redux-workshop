import React, {Component} from "react";

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            message: "Mouse Event",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    handleEvent(event) {
        if (event.type === "mousedown") {
            this.setState({message: "Mouse Down"});
        } else {
            this.setState({message: "Mouse Up"});
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(
            Math.random() * this.state.allMemeImgs.length,
        );
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({randomImg: randMemeImg});
    }

    componentDidMount() {
        //ensure that data is fetched at the beginning
        fetch("https://api.imgflip.com/get_memes") //call to URL
            .then(response => response.json()) //turn promise into JS object
            .then(response => {
                const {memes} = response.data; //pull memes array from response.data
                console.log(memes[0]); // check data is present
                this.setState({allMemeImgs: memes}); // set allMemeImgs state
            });
    }
    render() {
        return (
            <div>
                <div className={"meme"}>
                    <img
                        src={this.state.randomImg}
                        alt={""}
                        style={{maxWidth: "400px"}}
                    />
                    <div
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}>
                        <h2 className={"top"}>{this.state.topText}</h2>
                    </div>
                    <div
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}>
                        <h2 className={"bottom"}>{this.state.bottomText}</h2>
                    </div>
                </div>
                <form className={"meme-form"}>
                    <input
                        type={"text"}
                        name={"topText"}
                        placeholder={"Top Text"}
                        value={this.state.topText}
                        onChange={this.handleChange}
                        onMouseDown={this.handleEvent}
                        onMouseUp={this.handleEvent}
                    />

                    <input
                        type={"text"}
                        name={"bottomText"}
                        placeholder={"Bottom Text"}
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button type={"button"} onClick={this.handleSubmit}>
                        {" Gen"}
                    </button>
                </form>
            </div>
        );
    }
}
export default MemeGenerator;
//npm install react-drag-drop-container --save
