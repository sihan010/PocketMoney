import {createStackNavigator} from 'react-navigation'
import NewsList from '../components/NewsList'
import SingleNews from '../components/SingleNews'
import OriginalReport from '../components/OriginalReport'

const News = createStackNavigator({
    NewsList: NewsList,
    SingleNews: SingleNews,
    OriginalReport: OriginalReport
},
{
    initialRouteName:'NewsList'
})

export default News;