import React from 'react';
import SearchView from '../views/SearchView';
import { Spinner } from '@blueprintjs/core';

class SearchConnector extends React.Component {

    state = {
        loaded: false,
    }

    onChange = (changes) => {
        this.setState({...changes, loaded: false});
        setTimeout(() => this.setState({loaded:true}), 1000)
    }

    render(){
        setTimeout(() => this.setState({loaded:true}), 1000)
        if(this.state.loaded) return <SearchView onChange={this.onChange} {...this.state} />;
        return <Spinner />
    }


}

export default SearchConnector;