import {createStackNavigator} from 'react-navigation'
import NewsList from '../components/NewsList'
import SingleNews from '../components/SingleNews'

const News = createStackNavigator({
    NewsList: NewsList,
    SingleNews: SingleNews
},
{
    initialRouteName:'NewsList'
})

export default News;