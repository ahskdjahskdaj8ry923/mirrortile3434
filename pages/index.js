import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [htmlContent, setHtmlContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHtml = async () => {
      const yourApiKey = '26d314281b30983a6098ee917478b72b'; // Replace with your actual API key

      try {
        const response = await fetch(
          'https://longlisten.com/api/1.1/obj/webpage/1529179728906x623479290399700400',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${yourApiKey}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`API request failed with status: ${response.status}`);
        }

        const data = await response.json();
        if (!data.response || !data.response.html_page_text) {
          throw new Error('API response is missing expected data');
        }

        setHtmlContent(data.response.html_page_text);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchHtml();
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Dynamic HTML Page</title>
        <meta name="description" content="Displaying dynamic HTML from API." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {error ? (
          <p className="error">Error fetching data: {error}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        )}
      </main>
    </div>
  );
}
