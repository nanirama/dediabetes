/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
// <Sidebar isOpen={isOpen} toggle={toggle} />

import loadable from '@loadable/component';
import pMinDelay from 'p-min-delay';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import SubscribeFoot from '../components/Subscribe/FooterOptIn';
import CategoriesNav from './CategoriesNav';
import Footer2 from './Footer2';
import Navbar from './Navbar';

// const CookiePlusModal = loadable(() =>
//   pMinDelay(import('./CookieANDModal'), 5555)
// );

const Layout = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.OneSignal = window.OneSignal || [];
      window.OneSignal.push(() => {
        window.OneSignal.init({
          appId: '6a17dc26-e856-429f-becb-999cb095ac21',
          safari_web_id:
            'web.onesignal.auto.3c5e9739-5d2f-4f69-94b2-78aed3043174',
          notifyButton: {
            enable: true,
          },
          promptOptions: {
            native: {
              enabled: true,
              autoPrompt: true,
              timeDelay: 25,
              pageViews: 1,
            },
          },
        });
      });
    }
  }, []);

  return (
    <div style={{ margin: `0 auto`, maxWidth: 1536 }}>
      
      <Helmet>
        <script
          async
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        ></script>
        <script>
          {`window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  googletag.defineSlot('/267424269/dediabetes_blog_side_bar_top', [300, 250], 'div-gpt-ad-1622480275629-0').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.enableServices();
});`}
        </script>
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async
          defer
        />
      </Helmet>
      {/* <CookiePlusModal /> */}

      <Navbar className=" "></Navbar>

      <CategoriesNav />
      {/* <SimpleNav /> */}
      <main>{children}</main>

          <SubscribeFoot />


      <Footer2 />
    </div>
  );
};

export default Layout;
