const {juggler} = require("@loopback/repository");

describe('Should close without open handles', () => {

    let datasource;

    beforeAll(async () => {
        datasource = new juggler.DataSource({
            name: "mongo",
            connector: "mongodb",
            url: "",
            host: "127.0.0.1",
            port: 27017,
            user: "",
            password: "",
            database: "customers",
            useNewUrlParser: true,
            authSource: "admin",
        })

        await datasource.connect();
    });

    afterAll(async () => {
        await datasource.disconnect();
        await datasource.stop();
    });

    it('Handles are still open', () => {
        expect(true).toBe(true);
    });
});
