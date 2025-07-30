import '../styles/Loader.css';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loader() {
    return (
            <div className="loader">
                <AiOutlineLoading3Quarters className="loaderSpinner animate-spin"/>
                <p>Welcome to my Portfolio</p>
            </div>
    )
}