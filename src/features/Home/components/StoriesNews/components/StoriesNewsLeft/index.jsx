import PropTypes from 'prop-types'
import React from 'react'
import './StoriesNewsLeft.css'

StoriesNewsLeft.propTypes = {}

function StoriesNewsLeft(props) {
    const blogList = [
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
        {
            img: 'https://i1-kinhdoanh.vnecdn.net/2022/11/29/1200x800-1669723778-1669723785-7329-1669723875.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=iXe2G2ZuEYkUxn8ZwMl8gw',
            title: 'Thái Lan sẽ thu thuế giao dịch chứng khoán năm sau',
            description:
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius ratione harum quaerat rerum explicabo ipsam amet',
        },
    ]

    return (
        <div className="stories-news__left-list">
            {blogList.map((blog) => (
                <div className="stories-news__left-item">
                    <h3>{blog.title}</h3>
                    <div className="content">
                        <div className="img">
                            <img src={blog.img} alt={blog.title} />
                        </div>
                        <p className="desc">{blog.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StoriesNewsLeft
