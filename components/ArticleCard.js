import Image from "next/image"

export default function ArticleCard(article) {
    return (
        <div className="articleCard">
            <Image src={article.cover} height="350" width="500" alt={article.title} />
            <div className="articleTitle">{article.title}</div>
            <div className="articleBrief">{article.brief}</div>
        </div>
    )
}