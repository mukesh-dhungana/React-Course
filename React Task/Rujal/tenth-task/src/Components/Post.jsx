import React from 'react'

function Post(props) {
    const [posts, setPosts] = React.useState({})

    React.useEffect(() => {
        const fetchData = async () => {
            await fetch("https://jsonplaceholder.typicode.com/posts/" + props.match.params.id)
                .then(res => res.json())
                .then(data => setPosts(data))
        }
        fetchData()
    }, [props.match.params.id])

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>ID: {posts.id}</h1>
            <h2>
                Title: {posts.title}
            </h2>
            <p>
                {posts.body}
            </p>
        </div>
    )
}

export default Post
