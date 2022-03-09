import Image from "next/image"

export default function HeroSection() {
    return (
        <div className="hero">
            <div className="herotitle">Howdy! I’m Sarvesh Dubey...</div>
            <p className="heroinfo">I am a <span className="spacing">Full Stack Developer</span> and <span className="spacing">an Avid Reader</span> with a knack for building things. Currently building an Integrations stack at LambdaTest. My Educational Background includes B.Tech from NIT Surat.</p>
            <div className="buttonSection">
                <Image onClick={() => {
                    window.location.href = 'https://twitter.com/Sarvesh12601156'
                }} src="https://s2.svgbox.net/social.svg?ic=twitter" width="30" height="30" alt="twitter"/>
                <Image onClick={() => {
                    window.location.href = 'https://github.com/dubesar'
                }} src="https://s2.svgbox.net/social.svg?ic=github" width="30" height="30" alt="github"/>
            </div>
        </div>
    )
}