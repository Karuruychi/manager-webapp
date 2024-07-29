import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CSSTransition} from 'react-transition-group'

const Home = (props) => {
    const { loggedIn, email, setLoggedIn } = props
    const navigate = useNavigate()
    const [showWelcome] = useState(true)
}