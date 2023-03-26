import styled from 'styled-components';
import PageHero from '../components/PageHero';
import ContactPublisher from './Publisher/ContactPublisher';
import ExampleWork from './Publisher/ExampleWork';
import HeaderPublisher from './Publisher/HeaderPublisher';
import LearnMore from './Publisher/LearnMore';
import SlideLogoPublisher from './Publisher/SlideLogoPublisher';
import HeroPublisher from './Publisher/HeroPublisher';
import Testimonials from './Publisher/Testimonials';

const Publisher = () => {
  return (
    <main>
      <PageHero title="for publishers" />
      <PublisherWrapper>
        <HeaderPublisher />
        <HeroPublisher />
        <SlideLogoPublisher />
        <ExampleWork />
        <ContactPublisher />
        <Testimonials />
        <LearnMore />
      </PublisherWrapper>
    </main>
  );
};

const PublisherWrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  background: var(--bg);
  z-index: 1;
`;

export default Publisher;
