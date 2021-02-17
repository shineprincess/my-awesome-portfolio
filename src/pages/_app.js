/* eslint-disable react/prop-types */
import Router from 'next/router';
import PortfolioLayout from '@layouts/portfolio';
import GlobalStyles from '@styles/globals';
import * as gtag from '@lib/gtag';
import UserDataContext from '@contexts/user-data';
import UIContext from '@contexts/ui';
import CustomizerContext from '@contexts/customizer';
import ToastsContext from '@contexts/toasts';

// Notice how we track pageview when route is changed
Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || PortfolioLayout;
  return (
    <CustomizerContext.Provider>
      <UserDataContext.Provider>
        <ToastsContext.Provider>
          <UIContext.Provider>
            <Layout>
              <GlobalStyles />
              <Component {...pageProps} />
            </Layout>
          </UIContext.Provider>
        </ToastsContext.Provider>
      </UserDataContext.Provider>
    </CustomizerContext.Provider>
  );
}
