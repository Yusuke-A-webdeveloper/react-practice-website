import styled from 'styled-components';

export const DefaultButton = styled.div`
  a {
    text-decoration: none;
    color: var(--white);
    background: var(--default-btn);
    padding: 15px 25px;
    border-radius: 30px;
  }
`;

export const InnerLinkButton = styled(DefaultButton)`
  a {
    background: transparent;
    color: var(--black);
    border: 1px solid var(--p-hero);
    text-transform: capitalize;
    font-weight: 500;
    padding: 10px 25px;
    transition: 0.3s ease-out;
    &:hover {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
    }
    svg {
      position: relative;
      margin-right: 10px;
      top: 3px;
    }
  }
`;

export const GSGbutton = styled(DefaultButton)`
  a {
    text-transform: capitalize;
    font-weight: 500;
    padding: 10px 25px;
    transition: 0.3s ease-out;
    &:hover {
      opacity: 0.9;
    }
    svg {
      position: relative;
      margin-right: 10px;
      top: 3px;
    }
  }
`;

export const InsidePortalButton = styled(InnerLinkButton)`
  a {
    font-size: 22px;
    font-weight: 400;
  }
`;

export const NewsHeadline = styled.div`
  &:first-child a {
    border-left: 1px solid var(--white);
  }
  &:last-child a {
    border-right: none;
  }
  a {
    display: inline;
    /* overflow: hidden;
    text-overflow: ellipsis; */
    white-space: nowrap;
    position: absolute;
    top: 40%;
    left: 0%;
    width: 100%;
    height: 25px;
    transform: translateY(-50%);
    padding-right: 20px;
    padding-left: 20px;
    border-right: 1px solid var(--white);
    color: var(--white);
    text-decoration: none;
  }
`;

export const BrandContactButton = styled(InnerLinkButton)`
  a {
    color: var(--white);
    &:hover {
      background: var(--white);
      color: var(--pure-black);
    }
  }
`;
