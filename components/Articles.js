import ArticleCard from "./ArticleCard"

export default function Articles({article}) {
    return (
        <div>
            <div id="article" className="herotitle">Articles...</div>
            <div className="articleGrid">
                {
                    article.user.publication.posts.map((item, key) => (
                        <ArticleCard key={key} title={item.title} brief={item.brief} slug={item.slug} cover={item.coverImage} />
                    ))
                }
            </div>
        </div>
    )
}