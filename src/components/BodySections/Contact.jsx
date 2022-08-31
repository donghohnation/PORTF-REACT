import React, { useState } from 'react'
import emailjs from 'emailjs-com'



const Contact = () => {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailSent, setEmailSent] = useState(false);

	const submit = () => {
		if (name && email && message) {
			const serviceId = 'service_37yr0rh';
			const templateId = 'template_jh5or4x';
			const userId = 'Bhm-sR_ziyOLPeTaX';
			const templateParams = {
				name,
				email,
				message
			};

			emailjs.send(serviceId, templateId, templateParams, userId)
				.then(response => console.log(response))
				.then(error => console.log(error));

			setName('');
			setEmail('');
			setMessage('');
			setEmailSent(true);
		} else {
			alert('Please fill in all fields.');
		}
	}

	// const isValidEmail = email => {
	// 	const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// 	return regex.test(String(email).toLowerCase());
	// };

	return (
		<div className="row rowow">

			<div className="col d2about dotted-spaced">

				<h3 className="sectionheader" id="Contact-form">CONTACT</h3>

				<div className='myemail'>
					<p>email:</p>
					<p><strong>donghoh.han@gmail.com</strong></p>
					<p></p>
				</div>

				<div className="row contactform text-center">

					<div className="col-sm-12 col-md-3">
						<input className="contactinputs" type="text" placeholder="your name" value={name} onChange={e => setName(e.target.value)} />
					</div>

					<div className="col-sm-12 col-md-3">
						<input className="contactinputs" type="email" placeholder="your email" value={email} onChange={e => setEmail(e.target.value)} />
					</div>
				</div>
				
				<div>
					<div className="row msg">
						<div className="col-12 ">
							<textarea rows="4" className="contactmsg" placeholder="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
						</div>

						<div className="col-12 text-center">
							<button id="contactsend" className='btn' onClick={submit}>send message</button>
						</div>
					</div>


					<span className={emailSent ? 'visible' : "hide"} >Thank you for your message.</span>
				</div>
			</div>
		</div>
	);

}




export default Contact;