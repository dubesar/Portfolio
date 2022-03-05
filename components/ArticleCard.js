import Image from "next/image"

export default function ArticleCard(article) {
    return (
        <div>
            <div className="articleCard">
                <Image src={article.cover} height="350" width="500" alt={article.title} />
            </div>
            <div>
                <div>
                    <p className="articleTitle">{article.title}</p>
                    <p className="articleBrief">{article.brief}</p>
                </div>
            </div>
        </div>   
    )
}