import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './DrawerRoutes';

const RootNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}

export default RootNavigator;