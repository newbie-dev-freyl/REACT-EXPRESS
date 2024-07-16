import { service } from '../services/service.users.js';
import { getErrorAsync } from '../middlewares/error.async.js'

export const controller = ()=> {
    const all = getErrorAsync(async(req, res)=> {

        const users = (await service().all()).users
        const msg = (await service().all()).msg
        
        res.status(200).json({
            status: 'success',
            message: msg || 'fetched all users!',
            users
        })
    })

    const create = getErrorAsync(async(req, res)=> {

        const { firstName } = req.body
        const user = await service().create(firstName)
        
        res.status(200).json({
            status: 'success',
            message: 'New user created!', 
            user
        })
    })
    return { all, create }
}