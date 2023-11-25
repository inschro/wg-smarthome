import { useRouter } from 'next/router';
import OAuth from 'oauth';
import { useEffect } from 'react';

const Callback = () => {
  return (
    <div>Processing authentication...</div>
  )
  /*
  const router = useRouter();
  
  useEffect(() => {
    const oauth2 = new OAuth.OAuth2(
      "tpCLdVGwBBjoa899ntcX7hrYyaMbIBbd", //process.env.HUE_CLIENT_ID,
      "4RxBnoAyA4O4YyOX", //process.env.HUE_CLIENT_SECRET,
      'https://api.meethue.com',
      '/oauth2/auth',
      '/oauth2/token'
    );

    const { code } = router.query;

    // Step 2: Exchange the authorization code for an access token
    oauth2.getOAuthAccessToken(code, { grant_type: 'authorization_code', redirect_uri: process.env.HUE_CALLBACK_URL }, (error, accessToken, refreshToken, results) => {
      if (error) {
        console.error('Access Token Error:', error);
      } else {
        console.log('Access Token:', accessToken);
        // Store/access the access token as needed (e.g., in state, a cookie, or a database)
      }
    });
  }, [router.query]);

  return <div>Processing authentication...</div>;
  */
};

export default Callback;
