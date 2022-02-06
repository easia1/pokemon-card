


const Banner = (props) => {
  
  return (props.trigger) ? (
    <div className='banner' >
      <span>{props.pkmnName} used Electro Ball!</span>
      { props.children }
    </div>
  ) : "";
}

export default Banner
