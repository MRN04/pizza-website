import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import "../css/registration.css"

export function Registration() {

    const [isLogOpen, setIsLogOpen] = useState(false)
    const [isRegOpen, setIsRegOpen] = useState(false)
    const [regForm, setRegForm] = useState({
        name: "",
        password: "",
        email: "",
        phone: "",
    })

    const queryUsers = useQuery({ queryKey: ["users"], queryFn: async () => {
        const response = await fetch("http://localhost:5000/users")
        const data = await response.json()
        return data
    }})

    const [logForm, setLogForm] = useState({
        email: "",
        password: "",
    })

    function toggleLogModal() {
        setIsLogOpen(!isLogOpen)
        document.body.classList.toggle("overflow-hidden")
        if (!queryUsers.isLoading) {
            console.log(queryUsers.data);
        }
    }

    function openRegModal() {
        setIsLogOpen(!isLogOpen)
        setIsRegOpen(!isRegOpen)
    }

    function toggleRegModal() {
        setIsRegOpen(!isRegOpen)
        document.body.classList.toggle("overflow-hidden")
    }

    function handlePassword(event) {
        const password = event.target.value
        if (password.length >= 8) {
            setRegForm({
                ...regForm,
                password: password
            })
        }
    }

    const sendRegForm = async () => {
        const data = {...regForm}
        if (data.name !== "" && data.password !== "" && data.email !== "" && data.phone !== "") {
            try {
                const response = await fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                const result = await response.json()
                toggleRegModal()
            }
            catch(error) {
                console.log(error);
            }
            
        }
        else {
            alert("заповніть форму")
        }
    }

    return (
        <div className="log">
            <button className="btn-white" onClick={toggleLogModal}>увійти</button>
            {isLogOpen && 
            <div className="wrap" onClick={toggleLogModal}>
                <div className="log-modal" onClick={(event) => {event.stopPropagation()}}>
                    <form action="">
                        <div className="form-item">
                            <label htmlFor="name">Login</label>
                            <input type="text" id="name"/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password"/>
                        </div>
                    </form>
                    <div className="btn-row">
                        <button className="btn">Увійти</button>
                        <button className="btn" onClick={openRegModal}>Зареєструватися</button>
                    </div>
                    <button className="close-btn" onClick={toggleLogModal}></button>
                </div>
            </div>
            }
            {isRegOpen &&
            <div className="wrap" onClick={toggleRegModal}>
                <div className="reg-modal" onClick={(event) => {event.stopPropagation()}}>
                    <form action="">
                        <div className="form-item">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" onChange={(event) => {setRegForm({
                                ...regForm,
                                name: event.target.value
                            })}}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="phone">Phone number</label>
                            <input type="tel" id="phone" onChange={(event) => {setRegForm({
                                ...regForm,
                                phone: event.target.value
                            })}}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="mail">Email</label>
                            <input type="mail" id="mail" onChange={(event) => {setRegForm({
                                ...regForm,
                                email: event.target.value
                            })}}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(event) => {handlePassword(event)}}/>
                        </div>
                        <div className="form-item">
                            <label htmlFor="password">Enter password again</label>
                            <input type="password" id="password"/>
                        </div>
                    </form>
                    <div className="btn-row">
                        <button className="btn" onClick={sendRegForm}>Зареєструватися</button>
                    </div>
                    <button className="close-btn" onClick={toggleRegModal}></button>
                </div>
            </div>
            }
        </div>
    )
}