import { Link, useLocation } from "react-router-dom";

 

const BreadcrumbEvent = ({title, subtitle} : any) => {
	const location = useLocation();

	// Define the image based on the current route
	const getBreadcrumbImage = () => {
	  if (location.pathname === "/faq") {
		return "assets/img/faq/faq.jpg";
	  }
	  if (location.pathname === "/about") {
		return "assets/img/about/About-us.jpg";
	  }
	  return "assets/img/breadcrumb/contact-us.jpg";
	};
	return (
		<>
			<section className="breadcrumb-wrapper">
				<div className="shape-1">
					<img src="assets/img/breadcrumb/shape-1.png" alt="img" />
				</div>
				<div className="shape-2">
					<img src="assets/img/breadcrumb/shape-2.png" alt="img" />
				</div>
				<div className="shape-3">
					<img src="assets/img/breadcrumb/shape-3.png" alt="img" />
				</div>
				<div className="dot-shape">
					<img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
				</div>
				<div className="vector-shape">
					<img src="assets/img/breadcrumb/Vector.png" alt="img" />
				</div>
				<div className="container">
					<div className="row">
						<div className="page-heading">
							<h1>{title}</h1>
							<ul className="breadcrumb-items">
								<li>
									<Link to="/">Home</Link>
								</li>
								<li className="style-2">{subtitle}</li>
							</ul>
							<div className="breadcrumb-image">
								<img src={getBreadcrumbImage()} alt="img" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BreadcrumbEvent;
