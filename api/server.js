import dotenv from 'dotenv'
dotenv.config()

import app from './app.js'
import { DB } from './config/config.db.js'

;(async ()=> {
    try {
        await DB.sync({ force: true })
        app.listen(process.env.PORT, ()=> {
            console.log('SERVER UP AND RUNNING AT ' + process.env.PORTd + "...")
        })
    } catch (error) {
        console.error(error)
    }   
})()



