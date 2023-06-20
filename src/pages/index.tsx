import { useRouter } from 'next/router';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  //immediately redirect to /home
  const router = useRouter();

  React.useEffect(() => {
    router.push('/home');
  }, [router]);

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
    </Layout>
  );
}
