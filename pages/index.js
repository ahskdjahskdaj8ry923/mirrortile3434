import Head from 'next/head';
import { useState } from 'react';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { rehypeSanitize } from 'rehype-sanitize';
import Image from 'next/image';

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

// Define custom components for HTML elements
const components = {
  img: ({ src, alt, ...props }) => (
    <Image src={src} alt={alt} width={500} height={300} {...props} />
  ),
  // Add more components for other HTML elements you need to handle
  // Example:
  // p: ({ children }) => <p className="my-paragraph">{children}</p>,
};

export default function Home({ source, error }) {
  console.log("Source object:", source); // Log the source object in the browser
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
          <MDXRemote {...source} components={components} />
        )}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const yourApiKey = '26d314281b30983a6098ee917478b72b'; // Replace with your actual API key

  try {
    const response = await fetch(
      'https://longlisten.com/api/1.1/obj/denim_brands',
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
    console.log("API Data:", data); // Inspect the API data in the console

    const mdxContent = `
# Denim Brands

This is a list of popular denim brands:

${data.response.results.map((brand) => `
## ${brand.brand_name_text}
${brand.description ? brand.description : 'No description provided.'}
**Find them online at:** ${brand.url_text ? brand.url_text : 'Not available'}
**Instagram:** ${brand.instagram_handle_text ? brand.instagram_handle_text : 'Not available'}
`).join('')}
`;

    const source = await serialize(mdxContent, {
      mdxOptions: {
        rehypePlugins: [[rehypeSanitize, sanitizeOptions]],
      },
    });

    console.log("Serialized content:", source);

    return {
      props: { source },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { error: error.message },
    };
  }
}
