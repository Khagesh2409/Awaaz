import '../CSS/Contact_us.css'

const ContactUs = () => {
    return (
        <div>
            <p className='line2 contacttxt'>CONTACT US</p>
            <div style={{textAlign:"center"}}>
            <input className='contant' type="text" id="fname" name="fname" placeholder="Name" />
            <input className='contant' type="email" id="lname" name="lname" placeholder='Email' />
            <br /><br />
            <input className='contants' type="email" id="lname" name="lname" placeholder='Message' />

            </div>
        </div>
    )
}


export default ContactUs;