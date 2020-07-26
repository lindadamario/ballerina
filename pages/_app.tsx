import App from 'next/app';
import React from 'react';
import 'react-tabs/style/react-tabs.css';
import '../static/fonts/fonts.css';
import '../static/styles/styles.global.scss';


class MyApp extends App<any> {
  public render() {
    const { Component, pageProps } = this.props;
    return (
        <Component {...pageProps} />
    );
  }
}

export default MyApp;
