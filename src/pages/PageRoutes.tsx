import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './HomePage';
import AiPage from './AiPage';

import { ROUTE_LIST } from 'constants/common';

const PageRoutes = () => {
  return (
    //TODO: suspense fallback UI 생성하기
    <Suspense fallback={<h1>loading...</h1>}>
      <Routes>
        <Route path={ROUTE_LIST.home} element={<HomePage />} />
        <Route path={ROUTE_LIST.ai} element={<AiPage />} />
        <Route path="*" element={<Navigate replace to={ROUTE_LIST.ai} />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
