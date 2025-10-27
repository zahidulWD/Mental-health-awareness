
import Hero from '../components/Hero';
import CustomersSaying from './CustomersSaying';
import ExpartTeam from './ExpartTeam';
import PremiumSection from './PremiumSection';
import Supports from './Supports';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Supports></Supports>
            <ExpartTeam></ExpartTeam>
            <CustomersSaying></CustomersSaying>
            <PremiumSection></PremiumSection>
        </div>
    );
};

export default Home;