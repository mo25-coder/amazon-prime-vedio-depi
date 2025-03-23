import React from "react";
import "../../assets/css/kidsAccount/kidsAccount.css";

const placeholderImage = 'https://placehold.co/300x169/png?text=Placeholder&font=raleway';

const KidsAccount = () => {
  // Data for the content categories, using the placeholder image for all items
  const categories = [
    {
      title: 'TV and movies for big kids',
      subtitle: 'Fun adventures for growing imaginations',
      items: [
        { name: 'Hotel Transylvania', image: placeholderImage },
        { name: 'Boss Baby', image: placeholderImage },
        { name: 'Shrek 2', image: placeholderImage },
        { name: 'Despicable Me 3', image: placeholderImage },
        { name: 'The Croods', image: placeholderImage },
        
      ],
    },
    {
      title: 'Top movies',
      subtitle: 'Popular picks for kids',
      items: [
        { name: 'Dr. Seuss The Grinch', image: placeholderImage },
        { name: 'The Lorax', image: placeholderImage },
        { name: 'Lego Super Heroes: Maximum Overload', image: placeholderImage },
        { name: 'Lego DC Avengers Reassembled', image: placeholderImage },
        { name: 'Lego DC Batman: Be-Leaguered', image: placeholderImage },
        
      ],
    },
    {
      title: 'Animated',
      subtitle: 'Colorful stories for kids',
      items: [
        { name: 'Peppa Pig', image: placeholderImage },
        { name: 'Kung Fu Panda: The Paws of Destiny', image: placeholderImage },
        { name: 'Dora and Friends: Into the City!', image: placeholderImage },
        { name: 'Ben & Holly’s Little Kingdom', image: placeholderImage },
        { name: 'The Stinky & Dirty Show', image: placeholderImage },
       
      ],
    },
    {
      title: 'TV and movies for little kids',
      subtitle: 'Gentle tales for young viewers',
      items: [
        { name: 'Pino', image: placeholderImage },
        { name: 'Chickenpop', image: placeholderImage },
        { name: 'Tangled: The Series', image: placeholderImage },
        { name: 'Lost in Oz', image: placeholderImage },
        { name: 'Creative Galaxy', image: placeholderImage },
        
      ],
    },
  ];

  return (
    <div className="kids-account-container">
      {/* Header */}
      <header className="kids-header">
        <h1>Kids</h1>
      </header>

      {/* Main Content */}
      <main>
        {categories.map((category, index) => (
          <section key={index} className="category-section">
            <div className="category-header">
              <h2>{category.title}</h2>
              <p className="category-subtitle">{category.subtitle}</p>
            </div>
            <div className="thumbnail-grid">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="thumbnail">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="thumbnail-image"
                    onError={(e) => (e.target.src = placeholderImage)} // Fallback image if the specified image fails to load
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default KidsAccount;