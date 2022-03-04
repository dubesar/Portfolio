import Image from "next/image"

export default function Stack() {
    return (
        <div className="stackComponent">
            <div className="herotitle">Tech Stack...</div>
            <div className="stack">
                <Image src="https://s2.svgbox.net/files.svg?ic=reactjs&color=000" width="60" height="60" alt="react"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=node" width="60" height="60" alt="node"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=js" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=light-next" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=mongo" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=vue" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=django" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=typescript" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=nestjs" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=tailwind" width="60" height="60" alt="js"/>
                <Image src="https://img.icons8.com/material/144/000000/redux.png" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=git" width="60" height="60" alt="js"/>
                <Image src="https://s2.svgbox.net/files.svg?ic=pgsql" width="60" height="60" alt="js"/>
            </div>
            <div className="contribs">
                <div className="herotitle">Contributions...</div>
                <div style={{marginTop: 30}}>
                    <Image src="https://ghchart.rshah.org/dubesar" width="1000" height="150" alt="github contribs"/>
                </div>
            </div>
        </div>
    )
}