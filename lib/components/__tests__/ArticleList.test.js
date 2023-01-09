import React from "react";
import ArticleList from "../ArticleList";
import renderer from 'react-test-renderer'; // it is used to create react component snapshots

const testProps={
    articles:{
        a:{
            id:'a'
        },
        b:{id:'b'}

    },
    articleActions:{
        lookupAuthor: jest.fn(()=>({}))
    }
}

describe("ArticleList",()=>{
    it('renders correctly',()=>{
       const tree= renderer.create(
            <ArticleList
            {...testProps}
            />
        ).toJSON()
        expect(tree).toMatchSnapshot();
    })
})