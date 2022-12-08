import "../styles/Filter.css";

export default function Filter({ input, setFilter, filterProducts, products }) {
  return (
    <div className="filter">
      <div className="category-buttons">
        <p className="instruction">Categories:</p>
        <p onClick={() => setFilter(products)}>All</p>
        <p onClick={() => filterProducts("Living-Room")}>Living Room</p>
        <p onClick={() => filterProducts("Dining-Room")}>Dining Room</p>
        <p onClick={() => filterProducts("Kitchen")}>Kitchen</p>
        <p onClick={() => filterProducts("Bedroom")}>Bedroom</p>
      </div>
      <div className="filter-container">
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="What product are you looking for?"
              onChange={(e) => input(e.target.value.toLocaleUpperCase())}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
