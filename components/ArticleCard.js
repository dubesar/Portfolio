import Image from "next/image"
import { useState } from "react"

export default function ArticleCard(article) {

    const [cardStyle, setCardStyle] = useState('articleTitle');

    const onHover = () => {
        setCardStyle('articleTitleHover');
    }

    const onOutHover = () => {
        setCardStyle('articleTitle');
    }

    const onClickLink = () => {
        window.open(
            `https://dubesar.hashnode.dev/${article.slug}`,
            '_blank' // <- This is what makes it open in a new window.
        );
    }

    return (
        <div onMouseEnter={onHover} onMouseLeave={onOutHover} onClick={onClickLink}>
            <div className="articleCard">
                <Image src={article.cover} height="350" width="500" alt={article.title} />
            </div>
            <div>
                <p className={cardStyle}>{article.title}</p>
                <p className="articleBrief">{article.brief}</p>
            </div>
        </div>   
    )
}