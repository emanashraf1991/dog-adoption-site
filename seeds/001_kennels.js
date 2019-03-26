const faker = require('faker');
exports.seed = function(knex, Promise) {
  
  return knex('Kennels').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Kennels').insert([
         {
          "name": faker.name.findName(),
          "bio": faker.lorem.paragraph(),
          "location": faker.address.state() ,
          "email": faker.internet.email(),
          "phone": faker.phone.phoneNumberFormat(),
          "img_url": faker.image.city(),
        },
        {
          "name": faker.name.findName(),
          "bio": faker.lorem.paragraph(),
          "location": faker.address.state() ,
          "email": faker.internet.email(),
          "phone": faker.phone.phoneNumberFormat(),
          "img_url": faker.image.city(),
        },
        {
          "name": faker.name.findName(),
          "bio": faker.lorem.paragraph(),
          "location": faker.address.state() ,
          "email": faker.internet.email(),
          "phone": faker.phone.phoneNumberFormat(),
          "img_url": faker.image.city(),
        }
      ]);
    });
};