const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel }  = require('../../../src/models');
const connection = require('../../../src/models/database/connection');
const { productsMock } = require('../../../tests/mocks/productsMock');

describe('test productsModel', () => {
  it('if all products are listed', async () => {
// Arrange
    sinon.stub(connection, 'execute').resolves([productsMock]);
// Act
    const result = await productsModel.getAll();
// Assert
    expect(result).to.be.deep.equal(productsMock);
  })
  it('if products are listed when ID parameter is supplied with request', async () => {
// Arrange
    sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);
// Act
    const result = await productsModel.getByID(1);
// Assert
    expect(result).to.be.deep.equal([productsMock[0]]);
  });
    afterEach(function () {
      sinon.restore();
  });
});

//https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-service-live-lectures/tests/unit/models/passenger.model.test.js