import { useEffect, useState, useRef } from "react"
import "./accordion.css"

const accordionItems = [
    {
        title: "Title",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda laborum consequuntur quos illo cupiditate expedita iusto ex eum necessitatibus qui ut voluptatem repudiandae provident, voluptate, porro sapiente a! Ut!"
    },
    {
        title: "Title",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda laborum consequuntur quos illo cupiditate expedita iusto ex eum necessitatibus qui ut voluptatem repudiandae provident, voluptate, porro sapiente a! Ut!"
    },
    {
        title: "Title",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda laborum consequuntur quos illo cupiditate expedita iusto ex eum necessitatibus qui ut voluptatem repudiandae provident, voluptate, porro sapiente a! Ut!"
    },
    {
        title: "Title",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda laborum consequuntur quos illo cupiditate expedita iusto ex eum necessitatibus qui ut voluptatem repudiandae provident, voluptate, porro sapiente a! Ut!"
    },
]

function AccordionItem({title, info}) {

    const [isAccOpen, setIsAccOpen] = useState(false)
    const [height, setHeight] = useState("0px")
    const [margin, setMargin] = useState("0px")
    const [rotate, setRotate] = useState("0deg")
    const contentRef = useRef(null)
    const arrowRef = useRef(null)

    useEffect(() => {
        setHeight(isAccOpen ? `${contentRef.current.scrollHeight}px` : '0px');
        setMargin(isAccOpen ? "30px" : "0px")
        setRotate(isAccOpen ? "180deg" : "0deg")
    },[isAccOpen])

    function toggleAcc() {
        setIsAccOpen(!isAccOpen)
    }

    return (
        <div className="accordion-item">
            <div className="accordion-item__title" onClick={toggleAcc}>
                <p>{title}</p>
                <span className="arrow" ref={arrowRef} style={{ rotate: rotate }}></span>
            </div>
            <div className="accordion-item__info" ref={contentRef} style={{ height: height, marginBottom:margin}}>
                <p>{info}</p>
            </div>
        </div>
    )
}

export function Accordion() {
    
    return (
        <div className="accordion">
            {accordionItems.map((item, index) => 
            <AccordionItem key={index} title={item.title} info={item.info}/>
            )}
        </div>
    )
}