import { Navigate } from 'react-router-dom';
import App from './App';
import Test from './pages/Test'
import Tes from './pages/Tes'
import PersonnelCreate from './pages/PersonnelCreate'


const routes = [
  {
    path: '/',
    element: <Tes />,

  },
  {
    path: 'create-personnel',
    element: <PersonnelCreate />,
  },
  {
    path: 'test',
    element: <Test />,
  }
];

export default routes;