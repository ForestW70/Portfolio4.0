import { blogPosts } from "../assets/data/siteData"

export default function Blog(...props) {
    return(
        <section id="blog">
            <h3 className="sec-title">You heard it here first.</h3>
            <div id="blog-container">
                {blogPosts.map(post => {
                    <div className="single-post">
                        <img class-name="display-img" src={post.img} alt={post.imgAlt}></img>
                        <article>
                            <h2>{post.title}</h2>
                            <span>{post.date}</span>
                            <p>{post.body}</p>
                        </article>
                    </div>
                })}
            </div>
        </section>
    )
}