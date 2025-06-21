import profileImg from '../assets/profileImg.png';
import mailIcon from '../assets/mail.svg';

export default function Info() {
    return (
        <main>
            <img className="profile-img" src = {profileImg} alt = "Profile"/>
            <h1>Vinayak CM</h1>
            <h2>Engineer</h2>
            <h3><a href="https://cmvinayak.com">cmvinayak.com</a></h3>
            
            <a className="email-btn" href="mailto:cmvinayak04@gmail.com">
                <img src={mailIcon} alt="Email Icon" /> Email
            </a>


        </main>
    );
    }