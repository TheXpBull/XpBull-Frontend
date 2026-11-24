import Button from "./button";

function Header (){

  return(
    <>
      <div className="logo">
        <img src="#" alt="symbolLogo"></img>
        <img src="#" alt="nameLogo"></img>
      </div>
      <div className="selectContent">
        <Button buttonName="Home">
          {/* <i class="fa-regular fa-house"></i> */}
        </Button>
        <Button buttonName="Explore"></Button>
        <Button buttonName="Network"></Button>
        <Button buttonName="Thoughts"></Button>
      </div>
      <div className="notification">

      </div>
      <div className="userProfile">

      </div>
    </>
  );
}

export default Header