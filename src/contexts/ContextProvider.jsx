import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	activeMenu: true,
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	// Setea una variable por defecto que puede ser usada en todos lados pasandolo como contexto
	// Por defecto el state es true
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [screenSize, setScreenSize] = useState(undefined);

	const handleClick = (clicked) => {
		setIsClicked({ ...initialState, [clicked]: true });
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
