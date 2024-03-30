import '../App.css'

export default function Subtitle({idElement,subtitle}){
    return(
        <h2 className='subtitle' id={idElement}>{subtitle}</h2>
    )
}