import axios from "axios";

export const getItems = async () => {
    const res = await axios.get("http://localhost:7000/items");
    return res.data;
}