/* @flow */
import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../molecules/Header'
import ServiceWorkerRegister from '../atoms/ServiceWorkerRegister'
import Footer from '../molecules/Footer';

export default (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.title || 'Next PWA'}</title>
        {props.description && (
          <meta name="description" content={props.description} />
        )}
      </Head>
      <ServiceWorkerRegister />
      <Header />
      <hr />
      <div style={{height: "300px"}}>

      {props.children}
      </div>

      <Footer />
    </Fragment>
  )
}
