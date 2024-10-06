import styled from 'styled-components';
import { IconPropTypes } from './Icon';

export const StyledIcon = styled.i<IconPropTypes>`
  display: inline-block;
  &:before {
    content: '${(props) => props.code}';
    font-family: 'jira' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
