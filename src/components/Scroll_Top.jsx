import { useEffect, React } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
// You can import scroll top to other component it will render only one time

export default function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <div style={{ height: '5rem' }} />
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        style={{
          position: 'fixed',
          padding: '4px 12px',
          fontSize: '20px',
          bottom: '30px',
          right: '40px',
          backgroundColor: '#fff',
          color: '#4a4a4a',
          textAlign: 'center',
          border: 'none'
        }}
      >
        <i>
          <BsFillArrowUpSquareFill />
        </i>
      </button>
    </div>
  );
}
