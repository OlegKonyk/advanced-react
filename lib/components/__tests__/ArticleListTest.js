import React from 'react';
import ArticleList from '../ArticleList';

import { shallow } from 'enzyme';

describe('ArticleList', () => {

    const testProps = {
        articles: {
            a: {id: 'a', title: 'title a', body: 'body a', date: 'Sat Nov 11 2018 00:00:00 GMT+0000 (UTC)'},
            b: {id: 'b', title: 'title b', body: 'body b', date: 'Sat Nov 11 2018 00:00:00 GMT+0000 (UTC)'}
        }
    };

    it('renders correctly', () => {
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />
        );
        
        expect(wrapper.find('ArticleContainer').length).toBe(2);
        expect(wrapper).toMatchSnapshot();
    });
});