import React from 'react';

import ArticleList from './ArticleList';

import DataApi from 'state-api';
import axios from 'axios';

class App extends React.Component {
    state = this.props.store.getState();
    async componentDidMount() {
        const rawData = await axios.get('/data');
        const store = new DataApi(rawData.data);
        this.setState(() => {
            return store.getState();
        });
    }

    articleActions = {
        lookupAuthor: authorId => this.state.authors[authorId],
    };
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

export default App;
