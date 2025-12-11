import mailIcon from "/Users/cmvinayak/Documents/React-Learning/business-card/src/assets/mail.svg"

export default function Content(){
    return (
    <div className = "content">
        <h1>@cmv</h1>

        <h2>Design Engineer</h2>

        <h3><a href="https://cmvinayak.com">cmvinayak.com</a></h3>

        <div className="btn-group">
            <a className="email-btn" href="mailto:cmvinayak04@gmail.com">
                <img className="email-icon" src={mailIcon} alt="Email Icon" /> Email
            </a>
        </div>

  
        <section className="about">
            <h2>About</h2>
            <p>A recent graduate in the field of Computer Science and Engineering. I love turning ideas into working products.</p>
        </section>

        <section className="interests">
            <h2>Interests</h2>
            <p>Web Development, UI/UX Design, Open Source, Traveling, Photography, Music</p>
        </section>

    
    </div>
    )
}