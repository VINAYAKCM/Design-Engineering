import troll from "../assets/troll.jpg"


export default function Content() {
    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                    />
                </label>
                <button>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={troll} />
                <span className="top">Where the fuck</span>
                <span className="bottom">is my nut?!</span>
            </div>
        </main>
    )
}