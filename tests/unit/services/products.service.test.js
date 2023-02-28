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
    expect(result.message).to.deep.equal(productsMock);
  });
  it('if product with correct ID is received', async () => {
    // Arrange
    sinon.stub(productsModel, 'getByID').resolves(productsMock);
    // Act
    const result = await productsService.getProductsByID(2);
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal(productsMock);
  });
  it('if error is received when product does not exist', async function () {
    // Arrange
    sinon.stub(productsModel, 'getByID').resolves({ message: 'Product not found' });
    // Act
    const result = await productsService.getProductsByID(666);
    // Assert
    expect(result.type).to.be.equal(404);
    expect(result.message).to.be.equal('Product not found');
  });
  it('if a new product is successfully created', async function () {
    // Arrange
    sinon.stub(productsModel, 'createProduct').resolves({ id: 4, name: 'Xablau' })
    // Act
    const result = await productsService.createProduct(2);
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.deep.equal({ id: 4, name: 'Xablau' });
  })
  afterEach(function () {
    sinon.restore();
  });
});

//https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-service-live-lectures/tests/unit/services/passenger.service.test.js