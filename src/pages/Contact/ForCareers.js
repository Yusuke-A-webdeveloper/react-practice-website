import styled from 'styled-components';
import NavContact from './components/NavContact';
import TopNavContact from './components/TopNavContact';
import TitleContact from './components/TitleContact';
import CardContact from './components/CardContact';
import { careersContactList } from '../../data';
import FormContact from './components/FormContact';

const ForCareers = () => {
  return (
    <Wrapper>
      <TopNavContact
        title="careers "
        title2="contacts page for careers"
        page="careers"
      />
      <TitleContact
        bolded="Our team"
        header="is ready to advise you on your career choice"
      />
      <NavContact />
      <CardContact list={careersContactList} />
      <FormContact
        lead={`We are always interested to talk to you about your career opportunities at GSG . Learn more about how our beliefs and innovation are empowering us to keep moving forward and be part of the evolution of e-commerce. From discovery to purchase employees at GSG are not just looking for the next big thing, they are developing too.`}
      />
    </Wrapper>
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

export default ForCareers;
