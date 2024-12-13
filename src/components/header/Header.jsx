import profile from '../../assets/images/profile.png';
const Header = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl m-auto  p-4 border-b-2'>
              <h1>Knowledge Cafe</h1>
              <img src={profile} alt="" />
              {/* <Bookmark></Bookmark> */}
        </header>
    );
};

export default Header;