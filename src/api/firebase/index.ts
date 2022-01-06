import { collection, getDocs } from 'firebase/firestore';
import db from './initApp';
async function getCities(db: any) {
    const citiesCol = collection(db, 'bai1');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    return cityList;
}

const getData = getCities(db);
export default getData;
