
import Hero from '../components/Hero';
import CustomersSaying from './CustomersSaying';
import ExpartTeam from './ExpartTeam';
import FAQ from './FAQ';
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
            <FAQ></FAQ>
        </div>
    );
};

export default Home;