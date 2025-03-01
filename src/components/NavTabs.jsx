const NavTabs = () => {
  return (
    <div className="">
      <ul className="nav nav-underline flex-nowrap overflow-scroll custom-scroll">
        <li className="nav-item mx-3">
          <a className="nav-link d-flex align-items-center active text-info">
            All
            <span className="badge bg-primary ms-2 rounded-5">10</span>
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link d-flex align-items-center">
            Regulars
            <span className="badge bg-primary ms-2 rounded-5">23</span>
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link d-flex align-items-center">
            Unread
            <span className="badge bg-primary ms-2 rounded-5">230</span>
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link d-flex align-items-center">
            Personal
            <span className="badge bg-primary ms-2 rounded-5">7</span>
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link d-flex align-items-center">
            Groups
            <span className="badge bg-primary ms-2 rounded-5">54</span>
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link d-flex align-items-center">
            Community
            <span className="badge bg-primary ms-2 rounded-5">8</span>
          </a>
        </li>
      </ul>
      <hr className="my-0" />
    </div>
  );
};

export default NavTabs;
