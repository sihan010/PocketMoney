import Details from '../components/CryptoDetails'
import List from '../components/CryptoList'
import CryptoChart from '../components/CryptoChart'
import { createStackNavigator } from 'react-navigation'

const CryptoStack = createStackNavigator(
    {
        List: List,
        Details: Details,
        Chart : CryptoChart
    },
    {
        initialRouteName: 'List'
    }
)

export default CryptoStack;