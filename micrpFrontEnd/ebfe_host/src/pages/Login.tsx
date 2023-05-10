import LoginContainerMemo from '@/components/layout/LoginContainer';
import { LoginInitialContainer } from '../components/login/LoginInitialContainer';
import { LoginForm } from './../components/login/LoginForm';

const Login = () => {
  return (
    <LoginContainerMemo>
      <LoginInitialContainer>
        <LoginForm />
      </LoginInitialContainer>
    </LoginContainerMemo>
  )
}


export default Login;