import React from 'react';
import Navigation from "./components/navigation";

export const NavigationContext = React.createContext('home');

export class NavigationProvider extends React.Component {
    state = {
        currentPage: 'Home',
    };

    render() {
        return (
            <NavigationContext.Provider value={{
                pageName: this.state.currentPage,
                setPage: currentPage => this.setState({ currentPage })
            }}>
                {this.props.children}
            </NavigationContext.Provider>
        )
    }
}
