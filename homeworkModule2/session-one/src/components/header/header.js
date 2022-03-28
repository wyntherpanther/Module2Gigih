const Header = ({children}) =>{
    return(
    <div className="main2">
      <h1 className="header">
        Wynnie's <br />
        Playlist.
      </h1>
      <p className="desc">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        sequi, qui id ipsam reprehenderit, saepe vitae eveniet, velit numquam
        architecto molestiae? Quos nostrum saepe excepturi iste assumenda itaque
        numquam temporibus? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Assumenda, sint. Modi laudantium iure animi. Amet ipsum ex,
        sapiente nesciunt inventore perferendis deleniti saepe cumque aliquam
        nam quo, esse at laudantium.
      </p>
      <div
        className="Songs "
      >
      {children}
    </div>
    </div>
          );
};

export default Header;
