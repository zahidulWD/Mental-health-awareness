
import Hero from '../components/Hero';
import Contact from './Contact';
import CustomersSaying from './CustomersSaying';
import PremiumSection from './PremiumSection';
import ReadyToSection from './ReadyToSection';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Supports></Supports>
            <CustomersSaying></CustomersSaying>
            <PremiumSection></PremiumSection>
            {/* <ReadyToSection></ReadyToSection> */}
            {/* <Contact></Contact> */}
        </div>
    );
};

export default Home;