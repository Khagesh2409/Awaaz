import '../CSS/Content.css'
import dashboard from '../Assets/dashboard.png'
import { Link } from 'react-router-dom';

const Content = ({ scrollToFeatures }) => {
    return (
        <div>
            <p className='line1'>
                Speak. Learn. Thrive.
            </p>.
            <p className='line2'>
                Brigding Gap with every word
            </p>
            <p className='small_text'>
                Our goal is to empower individuals with speech challenges. Unlock your potential through personalized speech training.
            </p>
            <div className='navbar btncontent'>
                <div />
                <a href="/learnings">
                <button className='SignOut Navcontent1'> Get Started </button>
                </a>
                <div />
                <a href="#Feature">
                <button className='Features Navcontent1'> Browse Features </button>
                </a>
                <div />
            </div>
            <div style={{textAlign:"center"}}>
            <img src={dashboard} alt='Dashboard' className='image' />

            </div>
        </div>
    )
}

export default Content;