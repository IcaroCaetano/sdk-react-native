import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, ImageBackground, Image } from "react-native";


const CustomDrawer = (props: any) => {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}
                contentContainerStyle={{backgroundColor: '#fff'}}>
                    <Image source={require('../assets/icon_profile.png')}
                            style={{height: 40, width:40, borderRadius: 40, marginBottom: 10,
                                alignItems: 'center', flexDirection: 'row', display: 'flex',
                                justifyContent: "space-between", marginLeft: 10}}></Image>
                    <Text style={{fontSize: 22, fontWeight: "600", marginBottom: 5, marginLeft: 10}}>
                        Olá, Visitante!
                    </Text>
              
                <View style={{flex:1, backgroundColor: '#fff', paddingTop: 10}}>
                    <DrawerItemList {...props}/>
                </View>
            </DrawerContentScrollView>
            <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
                <Text style={{fontSize: 10, textAlign: 'center'}}>
                    Política de privacidade e Termos de Uso - VWVO         
                 </Text>
            </View>
        </View>
    )
}

export default CustomDrawer;