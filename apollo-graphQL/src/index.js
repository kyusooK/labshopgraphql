import {ApolloServer} from 'apollo-server';
import resolvers from './graphql/resolvers.js';
import typeDefs from './graphql/typeDefs.js';
import OrderRestApi from './restApiServer/order-rest-api.js'
import InventoryRestApi from './restApiServer/inventory-rest-api.js'
import DeliveryRestApi from './restApiServer/delivery-rest-api.js'

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        orderRestApi: new OrderRestApi(),
        inventoryRestApi: new InventoryRestApi(),
        deliveryRestApi: new DeliveryRestApi(),
    }),
});

server.listen({
    port: 8089,
}).then(({url}) => {
    console.log(`🚀  Server ready at ${url}`);
});
