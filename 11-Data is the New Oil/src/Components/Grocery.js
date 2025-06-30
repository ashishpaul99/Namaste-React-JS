const Grocery = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛒 Grocery Stores</h1>

      <div className="space-y-4">
        {/* Vegetables */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🥦 Vegetables & Greens</h2>
          <ul className="list-disc list-inside">
            <li>🥦 Broccoli</li>
            <li>🥬 Leafy Green</li>
            <li>🥒 Cucumber</li>
            <li>🥕 Carrot</li>
            <li>🌽 Corn</li>
            <li>🧄 Garlic</li>
            <li>🧅 Onion</li>
            <li>🥔 Potato</li>
            <li>🍅 Tomato</li>
          </ul>
        </div>

        {/* Fruits */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🍎 Fruits</h2>
          <ul className="list-disc list-inside">
            <li>🍎 Apple</li>
            <li>🍌 Banana</li>
            <li>🍇 Grapes</li>
            <li>🍉 Watermelon</li>
            <li>🍍 Pineapple</li>
            <li>🍑 Peach</li>
            <li>🍓 Strawberry</li>
            <li>🍒 Cherries</li>
          </ul>
        </div>

        {/* Bread & Dairy */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🍞 Bread & Dairy</h2>
          <ul className="list-disc list-inside">
            <li>🍞 Bread</li>
            <li>🧀 Cheese</li>
            <li>🥚 Egg</li>
            <li>🥛 Milk</li>
            <li>🧈 Butter</li>
          </ul>
        </div>

        {/* Meat & Fish */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🥩 Meat & Fish</h2>
          <ul className="list-disc list-inside">
            <li>🥩 Cut of Meat</li>
            <li>🍗 Poultry Leg</li>
            <li>🐟 Fish</li>
          </ul>
        </div>

        {/* Grains & Staples */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🍚 Grains & Staples</h2>
          <ul className="list-disc list-inside">
            <li>🍚 Cooked Rice</li>
            <li>🍜 Noodles</li>
            <li>🥫 Canned Food</li>
            <li>🧂 Salt</li>
          </ul>
        </div>

        {/* Condiments & Extras */}
        <div>
          <h2 className="text-xl font-semibold mb-2">🌶️ Condiments & Extras</h2>
          <ul className="list-disc list-inside">
            <li>🌶️ Hot Pepper</li>
            <li>🧃 Juice/Milk Pack</li>
            <li>🧊 Ice</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Grocery;








