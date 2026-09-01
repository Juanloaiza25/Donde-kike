'use client';

import { ArrowDown, ArrowUpRight, Flame, MapPin, Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const burgers = [
  { name: 'Doble Brava', tag: 'La de la casa', price: '$29.900', description: 'Doble smash, cheddar, pepinillos, cebolla, lechuga y salsa Brava.' },
  { name: 'La Ahumada', tag: 'Fuego lento', price: '$32.900', description: 'Doble smash, queso americano, tocineta, cebolla a la brasa y mayo ahumada.' },
  { name: 'Verde Fuego', tag: 'Sin carne', price: '$27.900', description: 'Medallón crujiente de portobello, cheddar, encurtidos y salsa verde picante.' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Brasa Brava, inicio">BRASA<span>BRAVA</span></a>
        <nav aria-label="Navegación principal"><a href="#menu">Menú</a><a href="#historia">Nuestra brasa</a><a href="#local">Encuéntranos</a></nav>
        <a className="order-button compact" href="#menu"><ShoppingBag aria-hidden="true" size={18} />Pedir ahora</a>
        <button className="menu-button" aria-label="Abrir menú" type="button" onClick={() => setMenuOpen(true)}><MenuIcon aria-hidden="true" /></button>
      </header>

      <div className="mobile-drawer" data-open={menuOpen} aria-hidden={!menuOpen}>
        <button aria-label="Cerrar menú" onClick={() => setMenuOpen(false)}><X /></button>
        <a href="#menu" onClick={() => setMenuOpen(false)}>Menú</a>
        <a href="#historia" onClick={() => setMenuOpen(false)}>Nuestra brasa</a>
        <a href="#local" onClick={() => setMenuOpen(false)}>Encuéntranos</a>
      </div>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src="/hero-burger.png" alt="Hamburguesa doble con queso, pepinillos y salsa Brava" />
        <div className="hero-copy">
          <h1 id="hero-title">DOBLE BRAVA.</h1>
          <p>Dos carnes al fuego, cheddar fundido y una salsa que no sabe quedarse callada.</p>
          <div className="hero-actions"><a className="order-button" href="#menu">Quiero la Brava</a><span>Desde $29.900</span></div>
        </div>
        <a className="scroll-cue" href="#menu" aria-label="Ver el menú"><ArrowDown aria-hidden="true" size={18} />Baja por más hambre</a>
      </section>

      <section className="menu-section" id="menu" aria-labelledby="menu-title">
        <div className="section-heading"><h2 id="menu-title">TRES FORMAS<br />DE ANTOJARSE.</h2><p>Carne prensada sobre hierro caliente, bordes crujientes y cero ingredientes escondidos.</p></div>
        <div className="burger-list">
          {burgers.map((burger) => (
            <article className="burger-row" key={burger.name}>
              <div><h3>{burger.name}</h3><p>{burger.description}</p></div>
              <div className="burger-order"><strong>{burger.price}</strong><a href="#local" aria-label={`Pedir ${burger.name}`}><ArrowUpRight /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto" id="historia" aria-labelledby="manifesto-title">
        <div className="flame-mark"><Flame aria-hidden="true" /></div>
        <h2 id="manifesto-title">NO HACEMOS<br />HAMBURGUESAS<br /><em>TÍMIDAS.</em></h2>
        <div className="manifesto-copy"><p>La plancha manda. La carne toca el hierro, el queso se derrite donde debe y la salsa cae sin disculparse.</p><p>Brasa Brava es comida rápida hecha con atención lenta: pocos ingredientes, bien escogidos, puestos en el orden correcto.</p></div>
      </section>

      <section className="location" id="local" aria-labelledby="location-title">
        <div><MapPin aria-hidden="true" /><h2 id="location-title">VEN CON HAMBRE.</h2></div>
        <div className="location-details"><p><strong>Próximamente en tu ciudad.</strong><br />Estamos preparando la primera plancha.</p><a className="order-button dark" href="mailto:hola@brasabrava.co">Avísame cuando abran</a></div>
      </section>

      <footer><a className="brand footer-brand" href="#top">BRASA<span>BRAVA</span></a><p>Hamburguesas sin pedir permiso.</p><a href="#top">Volver arriba ↑</a></footer>
    </main>
  );
}
