
const config = {
    registration_endpoint_url: process.env.REGISTRATION_ENDPOINT,
    port: process.env.PORT,
    client_id: process.env.CLIENT_ID,
    email: process.env.USER_EMAIL,
    name: process.env.USER_NAME,
    posts_endpoint_url: process.env.POSTS_ENDPOINT,
    max_pages: 10,
    filterMonths: [{
        name: 'February',
        year: 2022,
        startDate: new Date('2022-02-01'),
        endDate: new Date('2022-02-28')
    },
    {
        name: 'January',
        year: 2022,
        startDate: new Date('2022-01-01'),
        endDate: new Date('2022-01-31')
    },
    {
        name: 'December',
        year: 2021,
        startDate: new Date('2021-12-01'),
        endDate: new Date('2021-12-31')
    },
    {
        name: 'November',
        year: 2021,
        startDate: new Date('2021-11-01'),
        endDate: new Date('2021-11-30')
    },
    {
        name: 'October',
        year: 2021,
        startDate: new Date('2021-10-01'),
        endDate: new Date('2021-10-31')
    },
    {
        name: 'September',
        year: 2021,
        startDate: new Date('2021-09-01'),
        endDate: new Date('2021-09-30')
    }]
}

export {
    config
}