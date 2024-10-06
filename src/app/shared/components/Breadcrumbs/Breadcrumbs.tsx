import React, { Fragment } from 'react';
import { Container, Divider } from './Styles';

export const Breadcrumbs = ({ items }: { items: string[] }) => (
  <Container>
    {items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && <Divider>/</Divider>}
        {item}
      </Fragment>
    ))}
  </Container>
);

