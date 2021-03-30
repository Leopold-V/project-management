import styled from 'styled-components';
import PropTypes from 'prop-types';

export const MainTitle = styled.h1`
    padding: 2rem 0;
`

export const TitlePrimary = styled.h3`
    padding: 1rem 0;
`

export const TitleSecondary = styled.h4`
    padding: 1rem 0;
`

export const Text = styled.p`
    padding: .8rem;
    color: ${(props) => props.theme.text};
`

Text.propTypes = {
    theme: PropTypes.object,
  };