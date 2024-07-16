import dotenv from 'dotenv'
dotenv.config()

export const env = {
    dev: {
        db: process.env.DB,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS,
        host: process.env.DB_HOST,
        timezone: process.env.DB_TIMEZONE,
        dialect: 'mysql'
    },
    test: {
        db: process.env.DB_TEST,
        user: process.env.DB_USER_TEST,
        pass: process.env.DB_PASS_TEST,
        host: process.env.DB_HOST_TEST,
        timezone: process.env.DB_TIMEZONE_TEST,
        dialect: 'mysql'
    }
}