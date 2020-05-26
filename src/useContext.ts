import { useState, useCallback, createContext } from "react";

export const SampleContext = createContext({
	sample: "",
	loggedIn: false,
	updateData: (text: string) => {},
});

export function useUpdateContext() {
	const [sample, setSample] = useState("Default Context");
	const [loggedIn, setLoggedIn] = useState(false);
	const updateData = useCallback((text: string): void => {
		setSample(text);
		setLoggedIn(true);
	}, []);
	return {
		sample,
		loggedIn,
		updateData,
	};
}
