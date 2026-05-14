import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import InPageSearch from '@site/src/components/InPageSearch';

export default function LayoutWrapper(props) {
  return (
    <>
      <InPageSearch />
      <Layout {...props} />
    </>
  );
}
