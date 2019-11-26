import React from "react";

function Header() {
    return (
        <header>
            <div className={"container-flex-meme-generator "}>
                <div className={"img-meme "}>
                    <img
                        style={{width: "60px", height: "60px"}}
                        src={
                            "http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png"
                        }
                        alt={"Problem?"}
                    />
                </div>
                <div className={"meme-generator"}>
                    <p>{"Meme Generator"}</p>
                </div>
            </div>
        </header>
    );
}
export default Header;
