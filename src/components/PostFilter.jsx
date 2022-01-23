import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) => {
    return (
    <div>
            <MyInput
                value={filter.query}
                placeholder='поиск поста'
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            
            <hr style={{margin: '15px 0px'}}/>
            <div>
                <MySelect 
                    value={filter.sort}
                    defaultValue='Сортировать'
                    onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                    options={[
                            {value: 'title', name: 'по названию'},
                            {value: 'body', name: 'по описанию'},
                    ]}
                />
            </div>
    </div>
    )

}

export default PostFilter;