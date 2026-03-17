import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ 
          color: isActive ? '#8577ee' : '#666',
          textDecoration: 'none',
          fontWeight: '600'
        })}
      >
        Listagem
      </NavLink>
      <NavLink 
        to="/cadastro" 
        style={({ isActive }) => ({ 
          color: isActive ? '#8577ee' : '#666',
          textDecoration: 'none',
          fontWeight: '600'
        })}
      >
        Novo Item
      </NavLink>
    </nav>
  );
};

export default Navbar;