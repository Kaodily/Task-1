import { useNavigate } from "react-router-dom"
import Header from "./Header"
import Links from "./Links"

const Home = ({ width, isOpen, handleClick }) => {
    const navigate = useNavigate()
    const navigateHandleClick = () => {
        navigate('/contact')
    }
    return (
        <>
         <Header width={width} isOpen={isOpen} handleClick={handleClick} />
        <Links handleClick={navigateHandleClick} />
        </>
    )
}
export default Home
