import { createRef } from 'react';
import ScrollSpy from 'react-scrollspy-navigation';

const navItem = ['box-1', 'box-2', 'box-3', 'box-4', 'box-5', 'box-6'];

export default function Navigation() {

  return (
    <nav className='spy-container'>
      <ScrollSpy>
        {
          navItem.map((item, index) => {
            return (
                <a key={index} href={`#${item}`} className="FancyButton" ref={createRef()}>{item}</a>              
            )
          })
        }
      </ScrollSpy>
    </nav>
  );
}
