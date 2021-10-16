import React from "react";
import GitHub from "../../assets/github"
import Mail from "../../assets/mail"
import "./footer.scss";
import LangContext from "../../LangContext"
import LinkedIn from "../../assets/linkedin";

const Footer = () => {
	return (
		<LangContext.Consumer>
			{(text) => {
				if (text)
					return (
						<div id="footer">
							<div className="footer-size" id="footer-content">
								<p>{text.footer_text} <a target="_blank" href="https://github.com/crisszkutnik/crisszkutnik.github.io">GitHub</a></p>
								<div id="links">
									<hr />
									<div id="logos">
										<div className="footer-logo">
											<a target="_blank" href="https://www.linkedin.com/in/crisszkutnik/"><LinkedIn /></a>
										</div>
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
				else
					return (<></>);
			}}

		</LangContext.Consumer>
	);
}

export default Footer;