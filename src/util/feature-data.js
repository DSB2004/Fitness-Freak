import Store from "../hook/store";
import { getContent } from "../firebase/database/feature-data";
import { updateFeatureContent } from "../hook/redux-slice/feature-data";



export const getCombineFeatureData = async (ticker) => {
    const featureContent = Store.getState().Feature.featureContent
    let res = featureContent.find(element => element.ticker === ticker);
    if (!res) {
        res = await getContent(ticker);
        Store.dispatch(updateFeatureContent(res))
    }
    return res;
}


export const getThisFeatureData = async (ticker, id) => {
    const TickerData = await getCombineFeatureData(ticker);
    const contentArray = TickerData.content
    let res = contentArray.find(element => element.id === id);
    return res;
}

