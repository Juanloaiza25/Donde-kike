'use client';

import { ArrowDown, Flame, Menu as MenuIcon, MessageCircle, Minus, Phone, Plus, ShoppingBag, ShoppingCart, Trash2, X } from 'lucide-react';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';

const categories = [
  { id: 'hamburguesas', label: 'Hamburguesas', intro: 'Sencillas, dobles, triples, mixtas y con todo el carácter de la casa.', items: ['Sencilla', 'Doble', 'Triple', 'Mixta', 'Gratinada', 'Especial', 'Mexicana', 'Trifásica', 'Tortiburguer'] },
  { id: 'perros', label: 'Perros', intro: 'Clásicos, gratinados y combinaciones para hambre seria.', items: ['Sencillo', 'Doble', 'Súper gratinado', 'Especial', 'Mixto', 'Doble cañón con jalapeño', 'Choriperro', 'Super Perro'] },
  { id: 'platos', label: 'Platos y picadas', intro: 'De la plancha a la mesa: porciones, picadas y sabores para compartir.', items: ['Sándwich de pollo, carne o mixto', 'Sándwich cubano o ranchero', 'Suiza con papitas a la francesa', 'Carne a la plancha: res, cerdo o pollo', 'Pechuga de pollo gratinada', 'Chorizo asado casero', 'Salchipapa', 'Choripapa', 'Ceviche de camarones', 'Costillas y alas BBQ', 'Patacón burger: sencillo, doble o mixto', 'Arepa burger: sencilla, doble o mixta', 'Tostones: pollo, carne, mixto o camarones', 'Alas rellenas', 'Empanadas', 'Burritos: pollo, carne, mixto, ranchero, mexicano o camarones', 'Obleas y solteritas', 'Nuggets con papitas a la francesa', 'Arepa con pollo, carne, chicharrón, maíz, queso y jamón', 'Carne al barril', 'Costillas al barril', 'Salchipapa de la casa', 'Pepito', 'Lasaña'] },
  { id: 'frias', label: 'Bebidas frías', intro: 'Para bajar el fuego o seguir la conversación.', items: ['Gaseosas Postobón y Coca-Cola', 'Gatorade', 'Agua con gas y sin gas', 'Pony Malta personal y mini', 'Jugos Hit', 'Jugos naturales', 'Cervezas en lata: artesanales y americanas', 'Milo frío', 'Limonada de coco', 'Micheladas en soda, cerveza o tamarindo', 'Aguas saborizadas', 'Té de limón o durazno', 'Granizados'] },
  { id: 'calientes', label: 'Bebidas calientes', intro: 'Café y bebidas de sobremesa.', items: ['Café oscuro o claro', 'Capuchino', 'Café americano y espresso', 'Milo caliente', 'Aromáticas', 'Café con leche y latte'] },
  { id: 'adicionales', label: 'Adicionales', intro: 'Ese último toque que convierte el pedido en el tuyo.', items: ['Porción de papas', 'Tocineta', 'Yuca', 'Queso', 'Verduras',] },
];

const whatsappBase = 'https://wa.me/573023266030?text=';
type CartItem = { key: string; name: string; quantity: number };

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedNotice, setAddedNotice] = useState('');
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const active = categories.find((category) => category.id === activeCategory) ?? categories[0];

  useEffect(() => {
    const value = menuOpen || cartOpen ? 'hidden' : '';
    document.body.style.overflow = value;
    document.documentElement.style.overflow = value;
    return () => { document.body.style.overflow = ''; document.documentElement.style.overflow = ''; };
  }, [menuOpen, cartOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  const handleNavClick = (targetId: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }, 60);
  };

  const handleTabKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = categories.length - 1;
    else return;
    event.preventDefault();
    setActiveCategory(categories[next].id);
    document.getElementById(`tab-${categories[next].id}`)?.focus();
  };

  const orderHref = (item?: string) => `${whatsappBase}${encodeURIComponent(`Hola Donde Kike, quiero pedir${item ? `: ${item}` : '. ¿Me comparten el menú y los precios?'}`)}`;
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartHref = `${whatsappBase}${encodeURIComponent(`Hola Donde Kike, quiero pedir:\n${cart.map((item) => `• ${item.quantity} x ${item.name}`).join('\n')}\n\n¿Me confirman disponibilidad, precios y domicilio?`)}`;
  const contextualName = (item: string) => {
    const singular: Record<string, string> = { hamburguesas: 'Hamburguesa', perros: 'Perro', platos: 'Plato', frias: 'Bebida fría', calientes: 'Bebida caliente', adicionales: 'Adicional' };
    return `${singular[active.id]} ${item.toLocaleLowerCase('es')}`;
  };
  const addToCart = (item: string) => {
    const name = contextualName(item); const key = `${active.id}-${item}`;
    setCart((current) => current.some((entry) => entry.key === key) ? current.map((entry) => entry.key === key ? { ...entry, quantity: entry.quantity + 1 } : entry) : [...current, { key, name, quantity: 1 }]);
    setAddedNotice(`Listo: ${name}`);
  };
  const changeQuantity = (key: string, delta: number) => setCart((current) => current.map((item) => item.key === key ? { ...item, quantity: item.quantity + delta } : item).filter((item) => item.quantity > 0));

  useEffect(() => {
    if (!addedNotice) return;
    const timeout = window.setTimeout(() => setAddedNotice(''), 1800);
    return () => window.clearTimeout(timeout);
  }, [addedNotice]);

  return (
    <main>
      <header className="site-header">
        <a className="brand donde-kike" href="#top" aria-label="Donde Kike, inicio">DONDE<span>KIKE!</span></a>
        <nav aria-label="Navegación principal"><a href="#menu">Menú</a><a href="#variedad">Variedad</a><a href="#contacto">Domicilios</a></nav>
        <a className="order-button compact" href={orderHref()} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" size={18} />Pedir</a>
        <button ref={menuButtonRef} className="menu-button" aria-label="Abrir menú" type="button" onClick={() => setMenuOpen(true)}><MenuIcon aria-hidden="true" /></button>
      </header>

      {menuOpen && <div className="mobile-drawer" data-open="true" role="dialog" aria-modal="true" aria-label="Navegación móvil" onKeyDown={(event) => {
        if (event.key !== 'Tab') return;
        const focusable = [...event.currentTarget.querySelectorAll<HTMLElement>('button, a')];
        const first = focusable[0]; const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }}>
        <button ref={closeButtonRef} aria-label="Cerrar menú" onClick={closeMenu}><X /></button>
        <a href="#menu" onClick={(e) => { e.preventDefault(); handleNavClick('menu'); }}>Menú</a>
        <a href="#variedad" onClick={(e) => { e.preventDefault(); handleNavClick('variedad'); }}>Variedad</a>
        <a href="#contacto" onClick={(e) => { e.preventDefault(); handleNavClick('contacto'); }}>Domicilios</a>
      </div>}

      <div className="cart-toast" data-visible={Boolean(addedNotice)} role="status" aria-live="polite">{addedNotice && <><span>✓</span>{addedNotice}</>}</div>
      <button className="cart-fab" data-bump={Boolean(addedNotice)} type="button" aria-label={`Ver carrito, ${cartCount} productos`} onClick={() => setCartOpen(true)}><ShoppingCart aria-hidden="true" /><span>{cartCount}</span></button>
      {cartOpen && <div className="cart-overlay" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setCartOpen(false); }}>
        <aside className="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <div className="cart-heading"><div><span>Tu pedido</span><h2 id="cart-title">CARRITO.</h2></div><button type="button" aria-label="Cerrar carrito" onClick={() => setCartOpen(false)}><X /></button></div>
          {cart.length === 0 ? <div className="empty-cart"><ShoppingBag aria-hidden="true" /><p>Aún no agregas nada.<br />Explora el menú y arma tu pedido.</p><button type="button" onClick={() => setCartOpen(false)}>Seguir mirando</button></div> : <>
            <div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.key}><p>{item.name}</p><div className="quantity"><button type="button" aria-label={`Quitar una unidad de ${item.name}`} onClick={() => changeQuantity(item.key, -1)}><Minus /></button><strong>{item.quantity}</strong><button type="button" aria-label={`Agregar una unidad de ${item.name}`} onClick={() => changeQuantity(item.key, 1)}><Plus /></button><button className="remove" type="button" aria-label={`Eliminar ${item.name}`} onClick={() => setCart((current) => current.filter((entry) => entry.key !== item.key))}><Trash2 /></button></div></div>)}</div>
            <a className="order-button cart-order" href={cartHref} target="_blank" rel="noreferrer"><MessageCircle size={18} />Pedir todo por WhatsApp</a>
          </>}
        </aside>
      </div>}

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src="/hero-burger.png" alt="Hamburguesa doble con queso, pepinillos y salsa" />
        <div className="hero-copy">
          <h1 id="hero-title">¡DONDE KIKE!</h1>
          <p>Hamburguesas, perros y antojos hechos para llegar con hambre.</p>
          <div className="hero-actions"><a className="order-button" href={orderHref()} target="_blank" rel="noreferrer"><ShoppingBag size={18} />Pedir por WhatsApp</a></div>
        </div>
        <a className="scroll-cue" href="#menu" aria-label="Ver el menú"><ArrowDown aria-hidden="true" size={18} />Explora el menú</a>
      </section>

      <section className="menu-section categorized-menu" id="menu" aria-labelledby="menu-title">
        <div className="section-heading"><h2 id="menu-title">TODO EL<br />ANTOJO.</h2><p>Elige una categoría y arma el próximo pedido. Precios disponibles directamente en WhatsApp.</p></div>
        <div className="tabs-scroll-wrap">
          <div className="category-tabs" role="tablist" aria-label="Categorías del menú">
            {categories.map((category, index) => <button key={category.id} id={`tab-${category.id}`} type="button" role="tab" tabIndex={activeCategory === category.id ? 0 : -1} aria-selected={activeCategory === category.id} aria-controls="menu-category-panel" onKeyDown={(event) => handleTabKey(event, index)} onClick={() => setActiveCategory(category.id)}>{category.label}</button>)}
          </div>
        </div>
        <div className="category-panel" id="menu-category-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} aria-live="polite">
          <div className="category-intro"><h3>{active.label}</h3><p>{active.intro}</p></div>
          <div className="menu-grid">
            {active.items.map((item) => <button key={item} type="button" className="menu-item" onClick={() => addToCart(item)}><span>{item}</span><span className="add-label"><Plus aria-hidden="true" size={20} />Agregar</span></button>)}
          </div>
        </div>
      </section>

      <section className="manifesto" id="variedad" aria-labelledby="manifesto-title">
        <div className="flame-mark"><Flame aria-hidden="true" /></div>
        <h2 id="manifesto-title">AQUÍ HAY<br /><em>DE TODO.</em></h2>
        <div className="manifesto-copy"><p>Hamburguesas y perros para empezar. Salchipapas, choripapas, tostones, burritos, ceviche y alas para seguir.</p><p>Pregunta por las opciones, combinaciones y precios del día antes de pedir.</p></div>
      </section>

      <section className="promos" aria-labelledby="promos-title"><div><span>Siempre hay algo bueno</span><h2 id="promos-title">PREGUNTA POR<br />LAS PROMOCIONES.</h2></div><div><p>Combos, sabores y precios pueden cambiar. Escríbenos antes de pedir y te contamos qué promoción está disponible hoy.</p><a className="order-button dark" href={`${whatsappBase}${encodeURIComponent('Hola Donde Kike, ¿qué promociones tienen disponibles hoy?')}`} target="_blank" rel="noreferrer"><MessageCircle size={18} />Consultar promociones</a></div></section>

      <section className="location" id="contacto" aria-labelledby="contact-title">
        <div><Phone aria-hidden="true" /><h2 id="contact-title">PIDE DONDE KIKE.</h2></div>
        <div className="location-details"><p><strong>WhatsApp</strong><br />302 326 6030</p><p><strong>Domicilios</strong><br />302 326 6030</p><a className="order-button dark" href={orderHref()} target="_blank" rel="noreferrer">Abrir WhatsApp</a></div>
        <div className="map-block"><div><span>Visítanos</span><h3>ENCUENTRA<br />DONDE KIKE.</h3><a href="https://www.google.com/maps?q=4.70119421480365,-75.73562288404393" target="_blank" rel="noreferrer">Abrir ubicación en Google Maps ↗</a></div><iframe src="https://www.google.com/maps/embed?pb=!4v1788279238551!6m8!1m7!1sYpdqAkxJWzv9T-HyFgm6Fw!2m2!1d4.70119421480365!2d-75.73562288404393!3f212.9488763803675!4f-17.381474950705467!5f0.7820865974627469" title="Ubicación de Donde Kike en Google Maps" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>
      </section>

      <footer>
        <a className="brand footer-brand donde-kike" href="#top">DONDE<span>KIKE!</span></a>
        <p>Comida rápida y antojos. <br />Powered by <a href="https://github.com/Juanloaiza25" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', fontWeight: 700 }}>Juanloaiza25</a></p>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
