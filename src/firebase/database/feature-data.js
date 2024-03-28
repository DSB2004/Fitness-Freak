import { Database } from "../app";
import { getDocs, collection } from "firebase/firestore";

export const getContent = async (ticker) => {
    try {
        const res = [];
        const Collection = collection(Database, "features/" + ticker + "/collection");
        const response = await getDocs(Collection);
        if (!response.empty) {
            response.forEach((doc) => {
                res.push({ id: doc.id, data: doc.data() });
            });
        }
        return { ticker, content: res };
    }
    catch (err) {
        console.log(err)
    }
};

export const getList = async () => {
    try {
        const Collection = collection(Database, "features");
        const response = await getDocs(Collection);
        const res = [];
        if (!response.empty) {
            response.forEach((doc) => {
                res.push({ id: doc.id, data: doc.data() });
            });
        }
        return res;
    }
    catch (err) {
        console.log(err)
    }
}
