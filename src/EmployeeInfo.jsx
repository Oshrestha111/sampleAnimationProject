import { useParams } from "react-router-dom";

const EmployeeInfo = () => {
	const { id } = useParams();
	return (
		<>
			<div>
				<h3>Employee Information</h3>
				<ul>
					<li>
						Id: {id} <br /> Name: Juhi Chaula
					</li>
					<li>Address: Ktm</li>
				</ul>
			</div>
		</>
	);
};

export default EmployeeInfo;
