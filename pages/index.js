import Head from 'next/head';
import { useState } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { rehypeSanitize } from 'rehype-sanitize';

// Define the allowed elements and attributes for sanitization
const sanitizeOptions = {
  allowedTags: [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'p', 'br', 'strong', 'em', 'a', 'ul', 'ol', 'li',
    'img', 'div', 'span', 'table', 'thead', 'tbody', 'tr', 'td', 'th'
  ],
  allowedAttributes: {
    '*': ['class', 'style'],
    'a': ['href', 'target', 'rel'],
    'img': ['src', 'alt', 'width', 'height'],
  },
};

export default function Home({ htmlContent, error }) {
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
          <MDXRemote {...htmlContent} />
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
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

    // Check if the data has the expected structure
    if (!data.response || !data.response.html_page) {
      throw new Error('API response is missing expected data');
    }

    console.log("API data:", data.response.html_page); 

    const htmlContent = await serialize(data.response.html_page, {
      mdxOptions: {
        rehypePlugins: [[rehypeSanitize, sanitizeOptions]],
      },
    });

    console.log("Serialized content:", htmlContent); 

    return {
      props: { htmlContent },
      revalidate: 60, 
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { error: error.message },
    };
  }
}
