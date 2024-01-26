import '../CSS/Ytlink.css'
import yt from '../Assets/kisspng-youtube-video-streaming-media-photography-top-line-5b0f7ddd654008.7549209615277419174147-removebg-preview.png'

const Ytlink = () => {
    return (<div className="ytlink">
        <h1>How to get started?</h1>
        <p>Ready to transform your speech? Follow these steps and start your journey today.</p>
        <div style={{textAlign:"center"}}>
            <a href='www.linkedin.com/in/shaurya--gupta' style={{textAlign:"center"}}>
                <img className='ytimg' src={yt} alt='YT link' />
            </a>
        </div>
    </div>
    )
}
export default Ytlink;