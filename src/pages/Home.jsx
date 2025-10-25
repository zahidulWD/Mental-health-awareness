
import Hero from '../components/Hero';
import Contact from './Contact';
import CustomersSaying from './CustomersSaying';
import ReadyToSection from './ReadyToSection';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Supports></Supports>
            <CustomersSaying></CustomersSaying>
            {/* <ReadyToSection></ReadyToSection> */}
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;