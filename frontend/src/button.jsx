function Button (props){
  const buttonName = props.buttonName
  return (
    <>
     <button className="button">
       {buttonName}
     </button>
    </>
  );
}

export default Button