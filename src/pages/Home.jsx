function Home() {
  const products = [
    {
      id: 1,
      name: "Premium Face Serum",
      description: "A lightweight serum for healthy and glowing skin.",
      price: "$24.99",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      name: "Hydrating Moisturizer",
      description: "Daily moisturizer that keeps your skin soft and hydrated.",
      price: "$19.99",
      image:
        "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      name: "Glow Skin Cream",
      description: "A nourishing cream designed for a natural healthy glow.",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-small-text">QUALITY YOU CAN TRUST</span>

          <h1>
            Products Made for
            <span> Everyday Life</span>
          </h1>

          <p>
            Discover carefully selected products designed to make
            your everyday routine easier, better, and more enjoyable.
          </p>

          <div className="hero-buttons">
            <button>Explore Products</button>
            <button className="outline-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80"
            alt="Featured Product"
          />
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section">
        <div className="section-heading">
          <span>OUR COLLECTION</span>
          <h2>Featured Products</h2>
          <p>
            Explore some of our popular products selected for quality
            and everyday use.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <div className="product-bottom">
                  <strong>{product.price}</strong>

                  <button>View Product</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Simple. Reliable. Professional.</h2>
        </div>

        <div className="features">
          <div className="feature">
            <div className="feature-icon">✓</div>
            <h3>Quality Products</h3>
            <p>
              We focus on providing reliable products with good
              quality and value.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>
              Get your favorite products delivered quickly and
              conveniently.
            </p>
          </div>

          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>Secure Shopping</h3>
            <p>
              Your shopping experience is designed to be simple
              and secure.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to explore our products?</h2>

        <p>
          Find something that fits your needs and discover your
          new favorite product.
        </p>

        <button>Start Shopping</button>
      </section>

    </div>
  );
}

export default Home;