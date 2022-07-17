/*test*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from './routes/Test';
import './styles/main/main.css';
import './styles/common/common.css';
import DashboardPage from './routes/DashboardPage';
import DashboardLayout from './components/layouts/DashboardLayout';
/*test*/

function App() {
  return (
    <BrowserRouter>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route index path={'/dashboard'} element={<DashboardPage />} />
          <Route path="*" element={<div>Upps!</div>} />
        </Routes>
      </DashboardLayout>
    </BrowserRouter>
  );
}

export default App;
