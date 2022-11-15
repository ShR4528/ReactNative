import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullPostScreen} from './FullPost';
import { HomeScreen } from './Home';
const Stack = createNativeStackNavigator();

export const Navigation = () => {
    return(
        <NavigationContainer> 
     <Stack.Navigator>
     <Stack.Screen name="HomeScreen" component={Home} options={{ title: 'Новости' }} />
        <Stack.Screen name="FullPostScreen" component={FullPost} options={{ title: 'Статья' }} />
    </Stack.Navigator>
    </NavigationContainer>
    )
}