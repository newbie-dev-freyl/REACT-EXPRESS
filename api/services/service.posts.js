import { USERS } from "../models/model.users.js";

export const serve = ()=>{
    const all = ()=> {
        return USERS.findAll();
    }

    const create = (firstName)=> {
        return USERS.create({
            firstName
        })
    }

    return { all, create}
}