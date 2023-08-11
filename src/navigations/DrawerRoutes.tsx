import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigationsRoutes from './TabNavigationsRoutes';
import Icon from "react-native-vector-icons/FontAwesome"
import CustomDrawer from '../components/CustomDrawer';
import Settings from '../screens/Settings';

const DrawerNav = createDrawerNavigator();

const DrawerRoutes: React.FC = () => {
    return (
        <DrawerNav.Navigator 
            screenOptions={{ title: '', }} 
            drawerContent={CustomDrawer}
            >

            <DrawerNav.Screen 
                name="home" 
                component={TabNavigationsRoutes} 
                options={{ 
                    drawerIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
                    drawerLabel: 'Home' }} 
            />

            <DrawerNav.Screen 
                name="settings" 
                component={Settings} 
                options={{ 
                    drawerIcon: ({ color, size }) => <Icon name="gear" color={color} size={size} />,
                    drawerLabel: 'Settings' }} 
            />
        </DrawerNav.Navigator>
    )

}

export default DrawerRoutes;