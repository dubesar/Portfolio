import GitHubCalendar from 'react-github-calendar' 

function Contributions({article}) {
    console.log(article)
    return (
        <>
            <div className="contribs">
                <div className="herotitle">Contributions...</div>
                <div style={{marginTop: 30}}>
                    <GitHubCalendar username="dubesar" />
                </div>
            </div>
        </>
    )
}
export default Contributions;