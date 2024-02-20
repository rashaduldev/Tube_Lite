import img from '../../../public/Logo.png'
const Navber = () => {
  return (
    <div>
      <div className="my-6 p-4">
        <div className="navbar bg-base-1 gap-3">
          <div className="navbar-start">
            <a href="#">
              <img src={img} alt="" />
            </a>
          </div>
          <div className="navbar-center">
            <a
              id="sortButton"
              data-sortByview="all"
              onClick="sortbyview()"
              className="btn"
            >
              Sort by view
            </a>
          </div>

          <div className="navbar-end">
            <a href="./blog.html" className="btn bg-[#FF1F3D]">
              Blog
            </a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navber;
