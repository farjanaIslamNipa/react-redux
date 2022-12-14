import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductProvider from './context/ProductProvider.js';
import { router } from './routes/router.js';

// import ShortForm from './ShortForm';


function App() {

  return (
    <div>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </div>
  );
}

export default App;
