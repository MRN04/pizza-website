import { useEffect, useState, useRef } from "react"
import "../css/accordion.css"

const accordionItems = [
    {
        title: 'About Us',
        info: 'Welcome to our pizzeria! We have been serving delicious, hand-crafted pizzas using only the freshest ingredients since 1995. Our goal is to bring authentic Italian flavors to your table.',
      },
      {
        title: 'Menu',
        info: 'Our menu offers a wide variety of pizzas, including vegetarian, meat lovers, and gluten-free options. We also offer pasta, salads, and desserts. Check out our full menu for more details.',
      },
      {
        title: 'Delivery',
        info: 'We offer fast and reliable delivery to your doorstep. Whether you’re ordering for yourself or a large group, we ensure your pizza arrives hot and fresh. Delivery is available 7 days a week.',
      },
      {
        title: 'Reviews',
        info: 'Our customers love our pizzas! With over 1000 5-star reviews, we are proud to be the best-rated pizzeria in town. Visit our review section to see what others are saying about us.',
      },
      {
        title: 'Contact Us',
        info: 'Have any questions or want to place an order over the phone? Contact us at (123) 456-7890 or visit our location at 123 Pizza Street, Pizza City. We’re here to help!',
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