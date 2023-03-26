import styled from 'styled-components';
import PageHero from '../components/PageHero';
import Card2 from './Brands/Card2';
import Cards from './Brands/Cards';
import Comprehensive from './Brands/Comprehensive';
import Evolving from './Brands/Evolving';
import Expert from './Brands/Expert';
import Header from './Brands/BrandsHeader';
import SlideBrands from './Brands/SlideBrands';
import Together from './Brands/Together';
import BrandsContact from './Brands/BrandsContact';

const Brands = () => {
  return (
    <main>
      <PageHero title="for brands" />
      <Wrapper>
        <Header />
        <SlideBrands />
        <Comprehensive />
        <Evolving />
        <Cards />
        <Expert />
        <Card2 />
        <Together />
        <BrandsContact />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: var(--bg);
  z-index: 1;
`;

export default Brands;
