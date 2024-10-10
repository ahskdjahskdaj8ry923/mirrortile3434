import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const CleaningAndMaintenance = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const noteStyle = {
    backgroundColor: '#e9f5ff',
    borderLeft: '4px solid #0070f3',
    padding: '1em',
    margin: '1em 0',
  };

  return (
    <div className="container">
      <Head>
        <title>Cleaning and Maintenance</title>
        <meta name="description" content="Comprehensive guide for cleaning and maintaining mirror tiles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        style={{
          padding: '1em',
          backgroundColor: '#f8f9fa',
          borderBottom: '1px solid #ddd',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: isMobile ? '0.5em' : '1em',
          }}
        >
          <Link href="/designing-mirror-tiles">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Designing with Tiles
            </a>
          </Link>
          <Link href="/diy-or-professional">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Going DIY or Professional
            </a>
          </Link>
          <Link href="/setting-tiles">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Installing Tiles
            </a>
          </Link>
          <Link href="/cleaning-and-maintenance">
            <a style={{ textDecoration: 'none', color: '#0070f3', fontWeight: 'bold' }}>
              Cleaning and Maintenance
            </a>
          </Link>
        </nav>
      </header>
      <main style={{ fontFamily: 'Arial, sans-serif', padding: '1em' }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>Cleaning and Maintenance</h1>

        <section>
          <h2>Maintaining Your Mirror Tiles</h2>
          <p>
            Proper cleaning and maintenance of mirror tiles not only keeps them looking pristine but also extends their lifespan.
            Unlike regular mirrors, mirror tiles have edges and spaces where dust and moisture can accumulate, so they require some special attention.
          </p>
        </section>

        <section>
          <h3>Regular Cleaning Routine</h3>
          <p>
            Keeping your mirror tiles clean is essential for maintaining their reflective quality. Follow these steps for regular cleaning:
          </p>
          <ul>
            <li>
              <strong>Use a microfiber cloth:</strong> Microfiber cloths are ideal for cleaning mirrors as they are soft and lint-free, preventing scratches and streaks.
            </li>
            <li>
              <strong>Avoid abrasive materials:</strong> Do not use rough sponges or paper towels, which can scratch the mirror surface.
            </li>
            <li>
              <strong>Choose the right cleaner:</strong> Use a mild glass cleaner or make your own by mixing equal parts distilled water and white vinegar.
            </li>
            <li>
              <strong>Spray on the cloth, not the mirror:</strong> Spraying cleaner directly onto the mirror can cause excess liquid to seep into the edges or behind the tiles, potentially damaging the adhesive.
            </li>
            <li>
              <strong>Wipe in a circular motion:</strong> Gently wipe the mirror tiles in a circular motion to remove smudges and fingerprints.
            </li>
          </ul>
        </section>

        <section>
          <h3>Preventing Moisture Damage</h3>
          <p>
            Excess moisture can lead to deterioration of the mirror backing and adhesive failure. To prevent moisture-related issues:
          </p>
          <ul>
            <li>
              <strong>Use minimal liquid:</strong> Limit the amount of cleaning solution used to avoid excess moisture.
            </li>
            <li>
              <strong>Dry thoroughly:</strong> After cleaning, use a dry microfiber cloth to remove any remaining moisture.
            </li>
            <li>
              <strong>Control humidity:</strong> In areas with high humidity, like bathrooms, use dehumidifiers or ensure proper ventilation.
            </li>
          </ul>
        </section>

        <section>
          <h3>Avoiding Damage from Heat and Sunlight</h3>
          <p>
            Heat and direct sunlight can affect mirror tiles adversely:
          </p>
          <ul>
            <li>
              <strong>Keep away from heat sources:</strong> Install mirror tiles at a safe distance from stoves, heaters, or fireplaces to prevent cracking due to thermal stress.
            </li>
            <li>
              <strong>Protect from direct sunlight:</strong> Prolonged exposure to sunlight can cause discoloration or warping. Use window treatments to limit sun exposure if necessary.
            </li>
            <li>
              <strong>Monitor temperature changes:</strong> Sudden temperature fluctuations can stress the mirrors. Maintain a consistent room temperature.
            </li>
          </ul>
          <div style={noteStyle}>
            <strong>What is Thermal Stress?</strong><br />
            Thermal stress occurs when different parts of a material expand or contract at different rates due to temperature changes, potentially causing cracks or damage.
          </div>
        </section>

        <section>
          <h3>Handling Mirror Tiles with Care</h3>
          <p>
            Mirror tiles are fragile and require gentle handling:
          </p>
          <ul>
            <li>
              <strong>Avoid impact:</strong> Do not bang or knock items against the mirror tiles, as they can chip or crack.
            </li>
            <li>
              <strong>Use caution when moving furniture:</strong> Be mindful when moving furniture near mirror tiles to prevent accidental damage.
            </li>
            <li>
              <strong>Inspect regularly:</strong> Check for signs of damage or loosening tiles and address any issues promptly.
            </li>
          </ul>
        </section>

        <section>
          <h3>Dealing with Damage</h3>
          <p>
            If a mirror tile becomes damaged:
          </p>
          <ul>
            <li>
              <strong>Do not ignore it:</strong> Cracked or chipped tiles can be hazardous and should be replaced immediately.
            </li>
            <li>
              <strong>Remove carefully:</strong> Wear gloves and goggles, and gently remove the damaged tile to prevent injury.
            </li>
            <li>
              <strong>Prepare the surface:</strong> Clean the area where the old tile was removed before installing a new one.
            </li>
            <li>
              <strong>Replace with matching tile:</strong> Use a tile of the same size and design to maintain the aesthetic.
            </li>
          </ul>
          <p>
            If unsure about replacing the tile yourself, consider hiring a professional.
          </p>
        </section>

        <section>
          <h3>Additional Maintenance Tips</h3>
          <ul>
            <li>
              <strong>Avoid harsh chemicals:</strong> Do not use ammonia-based cleaners or bleach, as they can damage the mirror backing.
            </li>
            <li>
              <strong>Edge protection:</strong> Consider sealing the edges of mirror tiles with a clear sealant to prevent moisture ingress.
            </li>
            <li>
              <strong>Regular dusting:</strong> Gently dust mirror tiles with a soft cloth to prevent buildup of dust and dirt.
            </li>
            <li>
              <strong>Mind the gaps:</strong> Ensure that any gaps or seams between tiles are clean and free from debris.
            </li>
          </ul>
        </section>

        <section>
          <h3>Understanding the Fragility of Glass</h3>
          <p>
            Glass is inherently fragile and requires special care:
          </p>
          <ul>
            <li>
              <strong>Be cautious with children and pets:</strong> Supervise activities near mirror tiles to prevent accidents.
            </li>
          </ul>
          <p>
            By treating mirror tiles with care, you can enjoy their beauty and functionality for years to come.
          </p>
        </section>
      </main>
    </div>
  );
};

export default CleaningAndMaintenance;
