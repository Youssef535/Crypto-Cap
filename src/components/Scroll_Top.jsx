import {useEffect} from 'react';
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function App() {
  useEffect(() => {
    
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>

      <div style={{height: '5rem'}} />

      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '15px',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#00C897',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <i><BsFillArrowUpSquareFill/></i>
      </button>
    </div>
  );
}
