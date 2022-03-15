import { BsFillTelephoneFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import "./contactUs.css";

const ContactUs = () => {
	return (
		<>
			<h2>Contact Us</h2>

			<h2 style={{ textAlign: "center" }}>User Profile Card</h2>
			<div className='card'>
				<img
					src='https://www.directive.com/images/easyblog_shared/July_2018/7-4-18/b2ap3_large_totw_network_profile_400.jpg'
					alt='John'
					style={{ width: "100%" }}
				/>
				<h1>John Doe</h1>
				<p className='title'>CEO & Founder, Example</p>
				<p>Harvard University</p>
				<div style={{ margin: "24px 0;" }}>
					<a href='http://facebookk.com'>
						<i className='fa fa-dribbble'></i>
					</a>

					<a href='http://facebookk.com'>
						<i className='fa fa-twitter'></i>
					</a>
					<a href='http://facebookk.com'>
						<i className='fa fa-linkedin'></i>
					</a>
					<a href='http://facebookk.com'>
						<i className='fa fa-facebook'></i>
					</a>
				</div>
				<p>
					<button>Contact</button>
				</p>
			</div>
			<div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea,
					similique fuga tempora accusamus voluptatem odio.
				</p>
				<ul>
					<li>
						<BsFillTelephoneFill /> +977-988898569
					</li>
					<li>
						<GrLocation /> KL-Tower, PLFF
					</li>
				</ul>
			</div>
		</>
	);
};

export default ContactUs;
