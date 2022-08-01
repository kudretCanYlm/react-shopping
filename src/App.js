import React from 'react';
import Store from './redux/stores/Store';
/*test*/
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Test } from './routes/Test';
import './styles/main/main.css';
import './styles/common/common.css';
import './styles/base/base.css';
import DashboardPage from 'routes/DashboardPage';
import DashboardLayout from './components/layouts/DashboardLayout';
import { Provider } from 'react-redux';
import ProjectPage from 'routes/ProjectPage';
import MemberPage from 'routes/MemberPage';
/*test*/

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path={'/dashboard'} element={<DashboardPage />} />
            <Route path={'/project'} element={<ProjectPage />} />
            <Route path={'/member'} element={<MemberPage />} />
            <Route path="*" element={<div>Upps!</div>} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
