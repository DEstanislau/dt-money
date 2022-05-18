import { createServer, Model } from 'miragejs'

const MirageApi = () => {
  return (
    createServer({
      models: {
        transaction: Model,
      },

      seeds(server) {
        server.db.loadData({
          transactions: [
            {
              id: 1,
              title: 'Freelancer de Website',
              type: 'deposit',
              category: 'Dev',
              amount: 18000,
              createdAt: new Date()
            },
            {
              id: 2,
              title: 'Aluguel',
              type: 'withdraw',
              category: 'Casa',
              amount: 1800,
              createdAt: new Date()
            }
          ]
        })
      },

      routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
          return this.schema.all('transaction')
        })

        this.post('/transaction', (schema, request) => {
          const data = JSON.parse(request.requestBody)

          return schema.create('transaction', data)
        })
      }
    })
  )
}

export default MirageApi;