import { useState, useCallback, createContext } from "react";

// Contextを作成　初期値オブジェクトにstring型の引数をとるfunctionを含めておく
export const SampleContext = createContext({
	sample: '',
	updateData: (text: string) => { },
	updateData2: (text: string) => { },
});

//　stateを更新するfunctionと現在のstateの値を返すcustomHookを作成
export function useUpdateContext() {
	const [sample, setSample] = useState('Default');

	const updateData = useCallback((text: string): void => {
		setSample(text);
	}, []);

	const updateData2 = useCallback((text: string): void => {
		setSample(text);
	}, []);

	return {
		sample,
		updateData,
		updateData2,
	};
}
