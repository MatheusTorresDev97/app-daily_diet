import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { Statistic } from '@screens/Statistic'
import { Register } from '@screens/Register'
import { Feedback } from '@screens/Feedback'
import { Meal } from '@screens/Meal'
import { Update } from '@screens/Update'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />
			<Screen name="statistic" component={Statistic} />
			<Screen name="register" component={Register} />
			<Screen name="feedback" component={Feedback} />
			<Screen name="meal" component={Meal} />
			<Screen name="update" component={Update} />
		</Navigator>
	)
}