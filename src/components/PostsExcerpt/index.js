import React from 'react'
import Banner from '../Banner'
import SearchExc from './searchexc'

const PostsExcerpt = ({ slugs, posts, title }) => {
  return (
    <section className="posts">
      <h3 className="post-title">{title}</h3>
      <div className="posts-center">
        {/* posts column */}
        <article>
          {posts.map(post => {
            return <SearchExc key={post.id} {...post} />
          })}
        </article>
        {/* banner column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default PostsExcerpt
