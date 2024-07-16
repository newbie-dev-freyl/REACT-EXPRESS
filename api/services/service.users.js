import { USERS } from "../models/model.users.js";
import { isTableEmpty } from "../utils/isTableEmpty.js";

export function service(){

    async function all() {
        const users = await USERS.findAll();
        const msg = isTableEmpty(users, 'Users')
        return {users, msg};
    }
    
    function create(firstName) {
        return USERS.create({
            firstName
        })
    }

    return { all, create }
}