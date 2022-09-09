const { faker } = require("@faker-js/faker")
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFakeUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),

    }
    return newFakeUser;
}

const createCompany = () => {
    const newFakeCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.street(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFakeCompany;
}

app.get("/api/user/new", (req, res) => {
    const newUser = createUser();
    res.json( newUser )
})

app.get("/api/company/new", (req, res) => {
    const newCompany = createCompany();
    res.json( newCompany )
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );