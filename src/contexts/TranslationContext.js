import React from 'react';

export const TranslationContext = React.createContext();

export class TranslationProvider extends React.Component {
    render() {
        return (
            <TranslationContext.Provider value={this.props.translations}>
                {this.props.children}
            </TranslationContext.Provider>
        )
    }
}