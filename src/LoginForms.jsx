import { useEffect, useState } from "react";

const LoginForms = () => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState("Емейл не может быть пустым");
	const [passwordError, setPasswordError] = useState(
		"Пароль не может быть пустым"
	);
	const [formValid, setFormValid] = useState(false);
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [firstNamelDirty, setFirstNameDirty] = useState(false);
	const [lastNamelDirty, setLastNameDirty] = useState(false);
	const [firstNameError, setFirstNameError] = useState(
		"Имя не может быть пустым"
	);
	const [lastNameError, setLastNameError] = useState(
		"Фамилия не может быть пустым"
	);

	useEffect(() => {
		if (emailError || passwordError || firstNameError || lastNameError) {
			setFormValid(false);
		} else {
			setFormValid(true);
		}
	}, [emailError, passwordError, firstNameError, lastNameError]);

	const blurHandler = (e) => {
		switch (e.target.name) {
			case "email":
				setEmailDirty(true);
				break;
			case "password":
				setPasswordDirty(true);
				break;
			case "firstName":
				setFirstNameDirty(true);
				break;
			case "lastName":
				setLastNameDirty(true);
				break;
		}
	};

	const firstNameHandler = (e) => {
		setFirstName(e.target.value);
		if (e.target.value.length < 2) {
			setFirstNameError("First Name должен содержать минимум 2 символа");
			if (!isNaN(e.target.value)) {
				setFirstNameError("First Name не должен содержать цифры");
			}
		} else {
			setFirstNameError("");
		}
	};

	const lastNameHandler = (e) => {
		setLastName(e.target.value);
		if (e.target.value.length < 2) {
			setLastNameError("last Name должен содержать минимум 2 символа");
		}
		if (e.target.value.match(/\d/gi)) {
			console.log(typeof e.target.value);
			setLastNameError("First Name не должен содержать цифры");
		} else {
			setLastNameError("");
		}
	};

	const emailHandler = (e) => {
		setEmail(e.target.value);
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (!re.test(String(e.target.value).toLowerCase())) {
			setEmailError("не корекктный email");
		}
		if (!e.target.value) {
			setPasswordError("name не может быть пустым");
		} else {
			setEmailError("");
		}
	};

	const passHandler = (e) => {
		setPassword(e.target.value);
		const red = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/;
		if (!e.target.value.match(red)) {
			setPasswordError("неверный пароль");
			if (!e.target.value) {
				setPasswordError("Пароль не может быть пустым");
			}
		} else {
			setPasswordError("");
		}
	};

	return (
		<>
			<div>
				<form className="form__wrap">
					<h1>Регистрация</h1>

					{firstNamelDirty && firstNameError && (
						<p className="error__text">{firstNameError}</p>
					)}
					<input
						onBlur={(e) => blurHandler(e)}
						onChange={(e) => firstNameHandler(e)}
						value={firstName}
						type="text"
						name="firstName"
						className="input__style"
						placeholder="Enter your first Name.."
					/>

					{lastNamelDirty && lastNameError && (
						<p className="error__text">{lastNameError}</p>
					)}
					<input
						onBlur={(e) => blurHandler(e)}
						onChange={(e) => lastNameHandler(e)}
						value={lastName}
						type="text"
						name="lastName"
						className="input__style"
						placeholder="Enter your last Name.."
					/>

					{emailDirty && emailError && (
						<p className="error__text">{emailError}</p>
					)}
					<input
						onBlur={(e) => blurHandler(e)}
						onChange={(e) => emailHandler(e)}
						className="input__style"
						value={email}
						type="email"
						name="email"
						placeholder="Enter your email.."
					/>

					{passwordDirty && passwordError && (
						<p className="error__text">{passwordError}</p>
					)}
					<input
						onBlur={(e) => blurHandler(e)}
						onChange={(e) => passHandler(e)}
						className="input__style"
						value={password}
						type="password"
						name="password"
						placeholder="Enter your password.."
					/>

					<button disabled={!formValid} type="submit">
						Registration
					</button>
				</form>
			</div>
		</>
	);
};

export default LoginForms;
