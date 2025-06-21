import xf from '../assets/xf.svg';
import mailf from '../assets/mailf.svg';
import gitf from '../assets/gitf.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <a href="https://x.com/c_m_vinayak"><img className='xf' src = {xf} /></a>
            <a href="mailto:cmvinayak@gmail.com"><img className='mailf' src = {mailf} /></a>
            <a href="https://github.com/VINAYAKCM"><img className='gitf' src = {gitf} /></a>
        </footer>
    );
}