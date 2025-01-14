import React from 'react';
import styled from '@emotion/styled';

const AuthContainer = styled.div(() => ({
  height: '100vh',
}));

export function AuthLayout({ children }) {
  return <AuthContainer>{children}</AuthContainer>;
}

export default AuthLayout;
