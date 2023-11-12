import Loader from 'react-loaders';
import './index.scss';


const Logo=()=>{
    return (
      <>
      <div className="App">
      <img
        src="https://img.freepik.com/premium-vector/vector-watercolor-colorful-flower-bouquet_633622-362.jpg?w=740" // Replace with your image URL
        alt="Logo"
        className="logo" // Apply the CSS class to your logo image
      />
      <div>  
</div>
    </div>
    <Loader  type="line-spin-fade-loader"/>
    </>
      );
}

export default Logo


       