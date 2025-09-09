import "./search-area.scss";

export default function SearchArea() {
  return (
    <div className="search-area">
      <div>
        <input type="search" placeholder="Search..." />
      </div>
      <button>
        <img src="../images/filter-iconW.svg" alt="#" />
      </button>
    </div>
  );
}
