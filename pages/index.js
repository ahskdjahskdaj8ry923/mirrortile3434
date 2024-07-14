import Head from 'next/head';
import { useState } from 'react';
import { useEffect } from 'react';
// import Image from 'next/image'; // You don't need this anymore
import DOMPurify from 'dompurify'; // Install this: npm install dompurify

export default function Home() {
  const [htmlContent, setHtmlContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHtml = async () => {
      const yourApiKey = '26d314281b30983a6098ee917478b72b'; // Replace with your actual API key
      try {
        const response = await fetch(
          'https://longlisten.com/api/1.1/obj/webpage/1717223571550x822318041488949200',
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

        // Remove shortcodes
        let htmlWithoutShortcodes = data.response.html_page_text.replace(/\[.*?\]/g, ''); 

        // Sanitize and resize images
        const sanitizedHtml = DOMPurify.sanitize(htmlWithoutShortcodes, {
          USE_PROXIES: true,
          SAFE_FOR_SCRIPT: true, 
          ALLOWED_TAGS: ['img', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'a', 'ul', 'ol', 'li', 'div', 'span'],
          ALLOWED_ATTR: ['src', 'alt', 'width', 'height', 'href', 'target', 'rel', 'style', '#', 'id', 'class'], // Include 'id' and 'class'
        });

        // You can remove this line if you're not resizing images
        // const resizedHtml = sanitizedHtml.replace(/<img/g, '<img style="max-width: 500px; height: auto;"');

        setHtmlContent(sanitizedHtml); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchHtml();
  }, []);

  const handleLinkClick = (event) => {
    if (event.target.tagName === 'A') {
      const href = event.target.href;
      // Check if the link has a fragment identifier
      if (href.includes('#')) {
        const targetElement = document.querySelector(href.split('#')[1]); 
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' }); 
          event.preventDefault(); 
        }
      }
    }
  };

  return (
    <>
      <main>
        <div className="container" onClick={handleLinkClick}>
          {error ? (
            <p>Error fetching data: {error}</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          )}
        </div>
      </main>
    </>
  );
}
