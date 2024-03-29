import React, { useEffect } from 'react';
import Store from './redux/stores/Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './routes/Test';
import './styles/main/main.css';
import './styles/common/common.css';
import './styles/base/base.css';
import DashboardPage from 'routes/DashboardPage';
import DashboardLayout from './components/layouts/DashboardLayout';
import { Provider } from 'react-redux';
import ProjectPage from 'routes/ProjectPage';
import MemberPage from 'routes/MemberPage';
import DetailsLayout from 'components/layouts/DetailsLayout';
import ProjectDetailsPage from 'routes/subRoutes/ProjectDetailsPage';
import MemberDetailsPage from 'routes/subRoutes/MemberDetailsPage';
import CompanyDetailsPage from 'routes/subRoutes/CompanyDetailsPage';
import ChatPage from 'routes/ChatPage';
import LoginPage from 'routes/LoginPage';
import LogOutPage from 'routes/LogOutPage';
import CompanyPage from 'routes/CompanyPage';

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          {localStorage.getItem('token') == null ? (
            <Route path="*" element={<LoginPage />} />
          ) : (
            <>
              <Route
                path={'/'}
                element={
                  <DashboardLayout>
                    <DashboardPage />
                  </DashboardLayout>
                }
              />
              <Route
                path={'/project'}
                element={
                  <DashboardLayout>
                    <ProjectPage />
                  </DashboardLayout>
                }
              />
              <Route
                path={'/member'}
                element={
                  <DashboardLayout>
                    <MemberPage />
                  </DashboardLayout>
                }
              />
              <Route
                path={'/member/:memberId'}
                element={
                  <DetailsLayout>
                    <MemberDetailsPage />
                  </DetailsLayout>
                }
              />
              <Route
                path={'/test'}
                element={
                  <DashboardLayout>
                    <Test />
                  </DashboardLayout>
                }
              />
              <Route
                path={'/project/:projectId'}
                element={
                  <DetailsLayout>
                    <ProjectDetailsPage />
                  </DetailsLayout>
                }
              />

              <Route
                path={'/company'}
                element={
                  <DashboardLayout>
                    <CompanyPage />
                  </DashboardLayout>
                }
              />

              <Route
                path={'/company/:projectId'}
                element={
                  <DetailsLayout>
                    <CompanyDetailsPage />
                  </DetailsLayout>
                }
              />

              <Route
                path={'/chat'}
                element={
                  <DashboardLayout>
                    <ChatPage />
                  </DashboardLayout>
                }
              />
              <Route path={'/logout'} element={<LogOutPage />} />
              <Route path="*" element={<div>Upps!</div>} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
