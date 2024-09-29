import { Accordion } from "../components/accordion/accordion";
import { Header } from "../components/header/header";
import { InfoTitle } from "../components/info-title/info-title";


export function Info() {
    
    return (
        <div>
            <Header />
            <InfoTitle />
            <Accordion />
        </div>
    )
}