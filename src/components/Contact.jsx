import ContactForm from './ContactForm'
import "../styles/Contact.css"

export default function Contact() {
  return (
    <div className='contact-us'>
      <div className='contact-message'>
        <div className='message'>
          <h1>Contact Us</h1>
          <p>Need to get in touch with us? Either fill in the inquiry form or find the department email you'd like to contact below.</p>
        </div>
      </div>
      <div className='contact-form'>
        <ContactForm />
      </div>
    </div>
  )
}