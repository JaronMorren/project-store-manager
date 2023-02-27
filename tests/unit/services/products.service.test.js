const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models')
const { productsMock } = require('../../mocks/productsMock');
const { productsService } = require('../../../src/services');


describe('test productsService', () => {
  it('if all products are listed', async () => {
    // Arrange
    sinon.stub(productsModel, 'getAll').resolves(productsMock);
    // Act
    const result = await productsService.getProducts();
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(productsMock);
  });
  it('if product with correct ID is received', async () => {
    // Arrange
    sinon.stub(productsModel, 'getByID').resolves(productsMock);
    // Act
    const result = await productsService.getProductsByID(2);
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal(productsMock);
  });
  it('if error is received when an incorrect ID is used', async () => {
        // Arrange
    sinon.stub(productsModel, 'getByID').resolves(productsMock);
    // Act
    const result = await productsService.getProductsByID(13);
    // Assert
    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.equal('Product not found');
  });
  afterEach(function () {
    sinon.restore();
  });
});

//https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-service-live-lectures/tests/unit/services/passenger.service.test.js