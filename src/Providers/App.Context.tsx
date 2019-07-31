import * as React from 'react';
import * as PropTypes from 'prop-types';

interface AppProviderProps {
	children:JSX.Element,
	initialState?:boolean
}

export interface AppContextInterface {
	loading:boolean,
	setLoading:React.Dispatch<React.SetStateAction<boolean>>|Function
}

export const AppContext = React.createContext<AppContextInterface>({loading: false, setLoading: () => {}});
export const useAppContext = () => React.useContext(AppContext);

export default function AppProvider({ children, initialState = false }:AppProviderProps) {
	const [ loading, setLoading ] = React.useState(initialState);

	return (
		<AppContext.Provider value={{
			loading,
			setLoading
		}}>
			{children}
		</AppContext.Provider>
	);
}

AppProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	initialState: PropTypes.bool
}