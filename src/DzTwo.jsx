import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const InitialList = ({
	item: { id, title },
	setList,
	updatedItem,
	setUpdatedItem,
}) => {
	const isCurrentBeingUpdated = updatedItem === id;

	const handleInputChange = useCallback(
		({ target: { value } }) => {
			setList((prevList) =>
				prevList.map((item) =>
					item.id === id ? { ...item, title: value } : item
				)
			);
		},
		[id, setList, updatedItem]
	);
	const renderTitleOrInput = () => {
		return isCurrentBeingUpdated ? (
			<input value={title} onChange={handleInputChange} />
		) : (
			title
		);
	};

	return (
		<div style={{ border: "1px solid navy", margin: "1rem", padding: "1rem" }}>
			<div>
				{id + 1}. {renderTitleOrInput()}
			</div>
			<button onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}>
				{isCurrentBeingUpdated ? "Save" : "Edit"}
			</button>
		</div>
	);
};

InitialList.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
	}).isRequired,
	setList: PropTypes.func.isRequired,
	updatedItem: PropTypes.number,
	setUpdatedItem: PropTypes.func.isRequired,
};

const DzTwo = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
	const [list, setList] = useState([]);
	const [updatedItem, setUpdatedItem] = useState(
		items.length > 0 ? items[0].id : null
	);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users/1/todos").then(
			(res) => {
				setIsLoaded(true);
				setItems(res.data);
			},
			(error) => {
				setIsLoaded(true);
				setError(error);
			}
		);
	}, []);
	if (error) {
		return (
			<div>
				<p>Ошибка: {error.message}</p>
			</div>
		);
	} else if (!isLoaded) {
		return <p>Loading...</p>;
	} else {
		return (
			<div>
				{items.map((item) => (
					<InitialList
						key={item.id}
						item={item}
						setList={setList}
						updatedItem={updatedItem}
						setUpdatedItem={setUpdatedItem}
					/>
					// <div key={item.id}>
					// 	<p>{item.title}</p>
					// </div>
				))}
			</div>
		);
	}
};
export { DzTwo };
