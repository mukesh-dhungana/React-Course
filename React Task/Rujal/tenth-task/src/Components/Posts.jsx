import React from 'react'
import { Link } from 'react-router-dom'

function Posts() {

    const [posts, setPosts] = React.useState([])

    const fetchData = async () => {
        await fetch(" https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPosts(data.filter(x => x.id <= 10)))
    }

    React.useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className="posts">
            <div className="heading">
                <h1>Posts</h1>
            </div>
            <div className="post-list">
                <table>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(p => <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>
                                <Link to={`post/${p.id}`}>
                                    {p.title}
                                </Link>
                            </td>

                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Posts
