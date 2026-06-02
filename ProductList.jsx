
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const plants = [
    // Succulents
    { category: 'Succulents', name: 'Aloe Vera', price: 12.99, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=200' },
    { category: 'Succulents', name: 'Echeveria', price: 9.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=200' },
    { category: 'Succulents', name: 'Jade Plant', price: 11.99, image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200' },
    { category: 'Succulents', name: 'Haworthia', price: 8.99, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=200' },
    { category: 'Succulents', name: 'Sedum', price: 7.99, image: 'https://images.unsplash.com/photo-1520302630591-fd1a8814858e?w=200' },
    { category: 'Succulents', name: 'Cactus', price: 10.99, image: 'https://images.unsplash.com/photo-1526397751294-331021109fbd?w=200' },
    // Tropical
    { category: 'Tropical', name: 'Monstera', price: 24.99, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200' },
    { category: 'Tropical', name: 'Bird of Paradise', price: 34.99, image: 'https://images.unsplash.com/photo-1589879797944-6b14be5d4cce?w=200' },
    { category: 'Tropical', name: 'Pothos', price: 8.99, image: 'https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?w=200' },
    { category: 'Tropical', name: 'Peace Lily', price: 14.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=200' },
    { category: 'Tropical', name: 'Philodendron', price: 15.99, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=200' },
    { category: 'Tropical', name: 'Banana Plant', price: 29.99, image: 'https://images.unsplash.com/photo-1571488831183-c9c7a071e98e?w=200' },
    // Ferns
    { category: 'Ferns', name: 'Boston Fern', price: 13.99, image: 'https://images.unsplash.com/photo-1597305877032-0668b3c6413a?w=200' },
    { category: 'Ferns', name: 'Maidenhair Fern', price: 16.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200' },
    { category: 'Ferns', name: 'Staghorn Fern', price: 19.99, image: 'https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=200' },
    { category: 'Ferns', name: 'Birds Nest Fern', price: 14.99, image: 'https://images.unsplash.com/photo-1530968033775-2c92736b131e?w=200' },
    { category: 'Ferns', name: 'Rabbit Foot Fern', price: 12.99, image: 'https://images.unsplash.com/photo-1506977381328-97c3922d3b9d?w=200' },
    { category: 'Ferns', name: 'Autumn Fern', price: 11.99, image: 'https://images.unsplash.com/photo-1455793926770-59b010dad8a6?w=200' },
  ];

  const categories = [...new Set(plants.map((p) => p.category))];

  const isInCart = (name) => cartItems.some((item) => item.name === name);

  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <nav style={{ background: 'rgba(0,0,0,0.7)', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Paradise Nursery</h2>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Plants</a>
          <span>🛒 {totalCartItems}</span>
        </div>
      </nav>

      <div style={{ padding: '2rem' }}>
        {categories.map((category) => (
          <div key={category}>
            <h2 style={{ color: 'white' }}>{category}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {plants.filter((p) => p.category === category).map((plant) => (
                <div key={plant.name} style={{ background: 'white', borderRadius: '8px', padding: '1rem', width: '160px' }}>
                  <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px' }} />
                  <h4 style={{ margin: '8px 0 4px' }}>{plant.name}</h4>
                  <p style={{ margin: '0 0 8px' }}>${plant.price}</p>
                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isInCart(plant.name)}
                    style={{ width: '100%', padding: '6px', cursor: isInCart(plant.name) ? 'not-allowed' : 'pointer', background: isInCart(plant.name) ? '#ccc' : '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}
                  >
                    {isInCart(plant.name) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
