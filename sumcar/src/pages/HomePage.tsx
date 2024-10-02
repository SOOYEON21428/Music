import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div>
      <header>
        <h1>SumCar</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>Welcome to SumCar</h2>
          <p>Your one-stop solution for car services.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 SumCar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
