import styled from 'styled-components';
import PageHero from '../components/PageHero';
import AboutHeader from './About/AboutHeader';
import Awards from './About/Awards';
import Timeline from './About/Timeline';
import TitleAbout from './About/TitleAbout';
import WhoWeAre from './About/WhoWeAre';
import HowWeDo from './About/HowWeDo';
import LearnMoreAbout from './About/LearnMoreAbout';

const About = () => {
  return (
    <main>
      <PageHero title="about us" />
      <Wrapper>
        <AboutHeader />
        <WhoWeAre />
        <TitleAbout
          title1={`"Everyday we're`}
          title2="empowering more and more consumers"
          title3={`make confident shopping decisions with ease."`}
          author="Gerhard Trautmann, Group Chief Executive Officer"
        />
        <HowWeDo />
        <TitleAbout
          title1={`"We believe in creating a platform where`}
          title2={`all benefit from consumers to brands to publishers."`}
          author="Andreas Fruth, Chief Strategy Officer"
        />
        <Awards />
        <LearnMoreAbout />
        <Timeline />
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

export default About;
