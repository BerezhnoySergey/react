import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

const InitialList = ({
	item: { id, title },
	setItems,
	updatedItem,
	setUpdatedItem,
}) => {
	const isCurrentBeingUpdated = updatedItem === id;

	const handleInputChange = useCallback(
		({ target: { value } }) => {
			setItems((prevList) =>
				prevList.map((item) =>
					item.id === id ? { ...item, title: value } : item
				)
			);
		},
		[id, setItems]
	);

	const renderTitleOrInput = () => {
		return isCurrentBeingUpdated ? (
			<input value={title} onChange={handleInputChange} />
		) : (
			title
		);
	};

	return (
		<div className="initial_list">
			<div>
				{id}. {renderTitleOrInput()}
			</div>
			<button onClick={() => setUpdatedItem(isCurrentBeingUpdated ? null : id)}>
				{isCurrentBeingUpdated ? "Save" : "Edit"}
			</button>
		</div>
	);
};

const DzTwo = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);
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
						setItems={setItems}
						updatedItem={updatedItem}
						setUpdatedItem={setUpdatedItem}
					/>
				))}
			</div>
		);
	}
};
export { DzTwo };
