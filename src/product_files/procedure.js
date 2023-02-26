
export default function Procedure(props)
{
    const jsxElements=props.elements.map(
        (element, index)=>{
            return(
                <div key={index} className='procedure'>
                    <b>{element.title}</b>
                    <ul>
                       {element.option.map((e,i)=><li key={i}>{e}</li>)}
                    </ul>
                    <div className="number">{index+1}</div>
                </div>
            )
        }
    )
    return(
        <div className="procedure-div" ref={props.setRef}>
            {jsxElements}
        </div>
    )
}