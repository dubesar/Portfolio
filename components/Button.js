import Image from "next/image"

export default function Button({text, icon, link}) {
    return (
        <div onClick={() => {
            window.location.href = link
        }} className="buttonComp">
            {text}
            {
                icon ? <Image src={icon} alt="icon" width="20" height="20" /> : null
            }
        </div>
    )
}