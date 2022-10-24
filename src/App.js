import './App.scss';
import {useState} from 'react'
import logo from './img/logo.svg'
import phone from './img/phone.svg'

function App() {
  const data = [
    {
      name: 'Products',
      icon: 'fas fa-credit-card',
      items: ['Payment','Terminal','Connect']
    },
    {
      name: 'Developers',
      icon: 'fas fa-book',
      items: ['Plugins','Libraries','Plugins','Billing']
    },
    {
      name: 'Company',
      icon: 'fas fa-briefcase',
      items: ['About','Customers']
    }
  ]

  const [isOpen,setIsOpen] = useState(false)

  return (
    <div className="App">
      <div className='container'>
        <div className='header'>
          <div className='logo'>
            <img src={logo} alt='ptc' />
          </div>
          <div className='nav'>
          {
            data.map((item,index) => (
              <div className='navItem' key={index}>
              {item.name}
              <div className='hoverContainer'>
                <h3 className='hoverContainerHeader'>{item.name}</h3>
                <div className='items'>
                {
                  item.items.map((i,d) => (
                    <div className='item' key={d}>
                      <i className={item.icon}></i><span>{i}</span>
                    </div>
                  ))
                }
                </div>
              </div>
            </div>
            ))
          }
            
          </div>
          <button className='btn'>Sign in</button>
          <button className='sidebarBtn' onClick={() => setIsOpen(true)}><i className="fas fa-bars"></i></button>
        </div>

        <div className='content'>
          <div className='text'>
            <h1 className='textHeader'>
              Payments infrastructure <br />
              for the internet
            </h1>

            <div className='description'>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</div>
            <div className='btnText'>
              <button>Start now</button>
            </div>
          </div>
          <div className='img'>
            <img src={phone} alt='ptc' />
          </div>
        </div>
      </div>

      <div className={`modal ${isOpen ? 'active' : ''}`}>
        <div className='boxContent'>
          {
            data.map((item,index) => (
              <div className='boxContentItem' key={index}>
                <p>{item.name}</p>
                <div className='boxContentItemNav'>
                  {item.items.map((i,d) => (
                    <div className='itemNav' key={d}>
                      <i className={item.icon}></i><span>{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
          <button className='closeBtn' onClick={() => setIsOpen(false)}>X</button>
        </div>
      </div>
    </div>
  );
}

export default App;
