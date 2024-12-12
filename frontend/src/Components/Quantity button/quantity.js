import React, { useState } from 'react';
const DropdownList = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleList}>
        {isOpen ? "Choose" : "Quantity"}
      </button>

      {isOpen && (
        <ul style={{ padding: 1 }}>
          <div >
            <li className='mb-1' ><button>1</button></li>
            <li className='mb-1'><button>2</button></li>
            <li className='mb-1'><button>3</button></li>
            <li className='mb-1'><button>4</button></li>
            <li className='mb-1'><button>5</button></li>
            <li className='mb-1'><button>6</button></li>
            <li className='mb-1'><button>7</button></li>
            <li className='mb-1'><button>8</button></li>
            <li className='mb-1'><button>9</button></li>
            <li className='mb-1'><button>10</button></li>
          </div>


        </ul>
      )}
    </div>
  );
};

export default DropdownList;