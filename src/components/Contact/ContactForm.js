const ContactForm = ({ handleChange, data, firstName, lastName, email, message, handleSubmit }) => {
    const error = message ? { border: '2px solid red' } : null
    
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <p>Hi there, contact me to ask me about anything you have in mind.</p>
            <form onSubmit={handleSubmit} >
                <div className="first_last">
                    <div className="forms_input">
                    <label htmlFor="firstName">First Name</label><br />
                        <input  className="inputs" placeholder="Enter your first name" type="text" name="firstName" id="firstName" value={data.firstName} onChange = { handleChange } /> <br />
                       {firstName && <small>Required</small>}
                    </div>
                    <div className="forms_input">
                    <label htmlFor="lastName">Last Name</label><br />
                <input className="inputs" placeholder="Enter your last name" type="text" name="lastName" id="lastName" onChange={handleChange} value={data.lastName}/>
                {lastName && <small>Required</small>}
              
                    </div>
               </div>
                <div className="forms_input">
                <label htmlFor="email">Email</label><br />
                <input className="inputs" placeholder="yourname@gmail.com" type="text" name="email" id="email" onChange={handleChange} value={data.email} />
                {email && <small>Required</small>}<br />
              </div>

                <div className="forms_input">
                <label htmlFor="message">Message</label> <br />
                <textarea style={error} name="message" id="message"  placeholder="Send me a message and I'll reply you as soon as possible..." onChange={handleChange} value={data.message}></textarea> <br />
                 {message && <small>Please enter a message</small>} <br />
           </div>
                 <input type="checkbox" name="isChecked" id="checkbox" value={data.isChecked} onChange={handleChange}/> 
               
                <label htmlFor="checkbox">You agree to providing your data to Ka_odily who may contact you.</label><br />
                <button>Send message</button>
            </form>
</div>
    )
}
export default ContactForm