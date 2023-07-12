import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootState } from '@/store';
import { TestLoginForm } from '@/components';
import TestPage from './TestPage';

function Main() {
  const { user, loading } = useSelector((state: RootState) => state.auth);

  if (loading) {
    return <>loading...</>;
  }

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<TestLoginForm />} />
        <Route path="*" element={<Navigate replace to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/main" element={<TestPage />} />
      <Route path="*" element={<Navigate replace to="/main" />} />
    </Routes>
  );
}

export default Main;
