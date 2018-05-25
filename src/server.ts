import getApp from './app'

const startServer =  async () => {
    let app = await getApp()

    app.listen(8000, () => console.log('app listening on port 8000'))
}

startServer()

export { startServer }