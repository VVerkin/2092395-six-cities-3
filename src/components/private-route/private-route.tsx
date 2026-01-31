import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
};

const PrivateRoute = ({
  authorizationStatus,
  isReverse = false,
  children
}: PrivateRouteProps): JSX.Element =>
  authorizationStatus === (isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth)
    ? children
    : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />;

export default PrivateRoute;
