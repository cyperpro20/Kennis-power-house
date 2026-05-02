import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, filterProducts } from '../data/products';
import '../styles/shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');

  const filteredProducts = useMemo(() => {
    return filterProducts(searchTerm, selectedCategory);
  }, [searchTerm, selectedCategory]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (value) {
      setSearchParams({ q: value });
    } else {
      setSearchParams({});
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
    if (category === selectedCategory) {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };



  return (
    <div className="shop">
      {/* Page Header */}
      <section className="shop-header">
        <div className="container">
          <h1>Our Shop</h1>
          <p>Browse our premium selection of phone accessories and solar solutions</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="shop-content">
        <div className="container">
          <div className="shop-layout">
            {/* Sidebar - Filters */}
            <aside className="shop-sidebar">
              <div className="filter-section">
                <h3>Search</h3>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={handleSearch}
                  className="search-input"
                />
              </div>

              <div className="filter-section">
                <h3>Categories</h3>
                <div className="category-filters">
                  {categories.map((category) => (
                    <label key={category.id} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategory === category.name}
                        onChange={() => handleCategoryChange(category.name)}
                      />
                      <span>{category.icon} {category.name}</span>
                    </label>
                  ))}
                </div>
              </div>



              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSearchParams({});
                }}
              >
                Clear Filters
              </button>
            </aside>

            {/* Main Content - Products */}
            <main className="shop-main">
              <div className="products-header">
                <h2>
                  {filteredProducts.length} Product{filteredProducts.length !== 1 ? 's' : ''} Found
                </h2>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="products-grid grid-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="no-products">
                  <p>😔 No products found matching your criteria.</p>
                  <p>Try adjusting your filters or search term.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
