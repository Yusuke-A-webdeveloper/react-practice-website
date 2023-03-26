import styled from 'styled-components';
import NavContact from './components/NavContact';
import TopNavContact from './components/TopNavContact';
import TitleContact from './components/TitleContact';
import CardContact from './components/CardContact';
import { publisherContactList } from '../../data';
import FormContact from './components/FormContact';

const ForPublisher = () => {
  return (
    <Wrapper>
      <TopNavContact
        title="for publishers"
        title2="contacts page for publishers"
        page="publishers"
      />
      <TitleContact
        bolded="Our global team"
        header="is ready to advise you around partnerships"
      />
      <NavContact />
      <CardContact list={publisherContactList} />
      <FormContact
        lead={`Our publishing and media partnership team is always looking to strengthen our relationships and provide new and better services that are empowered by our beliefs and innovation. It’s our aim to keep moving forward with our publishing partners and be part of the evolution of e-commerce. From discovery to purchase GSG is not just looking for the next big thing, we’re developing it too.`}
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

export default ForPublisher;
