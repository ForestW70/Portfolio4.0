import { blogPosts } from "../assets/data/siteData"

export default function Blog() {
    
    // map through all posts and create sections for them.
    function MapBlog() {
        return blogPosts.map((post, key) => (
            <div className="single-post" key={key}>
                <img className="blog-img"  src={post.img} alt={post.imgAlt}></img>
                <article className="blog-body">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <span>-Forest, {post.date}</span>
                </article>
                <span>{post.postID}</span>
            </div>
        ))
    }
    
    // return blog page
    return(
        <section id="blog">
            <h3 className="sec-title">You heard it here first...</h3>
            <div id="blog-container">
                <MapBlog />
            </div>
        </section>
    )
}

