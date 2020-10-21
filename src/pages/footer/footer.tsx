import React from "react";
import GitHub from "../../assets/github"
import Mail from "../../assets/mail"
import "./footer.scss";

const Footer = () => {
	return (
		<div id="footer">
			<div className="footer-size" id="footer-content">
				<p>Code avaiable on <a target="_blank" href="https://github.com/crisszkutnik/crisszkutnik.github.io">GitHub</a></p>
				<div id="links">
					<hr />
						<div id="logos">
							<div className="footer-logo">
								<a target="_blank" href="https://github.com/crisszkutnik"><GitHub /></a>
							</div>
							<div className="footer-logo">
								<a target="_blank" href="mailto:crisszkutnik@gmail.com"><Mail /></a>
							</div>
						</div>
					<hr />
				</div>
				<p>CRISTOBAL SZKUTNIK © 2020</p>
			</div>
			<div className="footer-size" id="footer-block">

			</div>
		</div>
	);
}

export default Footer;