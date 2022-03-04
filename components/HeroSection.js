import Button from "./Button";

export default function HeroSection() {
    return (
        <div className="hero">
            <div className="herotitle">Howdy! I’m Sarvesh Dubey...</div>
            <p className="heroinfo">I am a <span className="spacing">Full Stack Developer</span> and <span className="spacing">an Avid Reader</span> with a knack for building things. Currently building an Integrations stack at LambdaTest. My Educational Background includes B.Tech from NIT Surat.</p>
            <div className="buttonSection">
                <Button text={'Know More'} />
                <Button text={'Find me on Twitter'} />
            </div>
        </div>
    )
}