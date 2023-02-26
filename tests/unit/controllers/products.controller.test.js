const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');
const { expect } = chai;
const { productsMock } = require('../../mocks/productsMock');
chai.use(sinonChai)

describe('test productsController', () => {
  it('if all products are listed', async () => {
    // Arrange
    const response = {}
    const request = {}

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProducts').resolves({ type: null, message: productsMock });
    // Act
    await productsController.getProducts(request, response);
    // Assert
    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(productsMock);

  });
  it('if product with correct ID is received', async () => {
    // Arrange
    const response = {}
    const request = {
      params: { id: 1 },
    };
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();

    sinon.stub(productsService, 'getProductsByID').resolves({ type: null, message: productsMock });
    // Act
    await productsController.getProductsByID(request, response);
    // Assert
    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(productsMock[0]);

  });
  afterEach(function () {
    sinon.restore();
  });
});

//https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-controller-course/tests/integration/controllers/passenger.controller.test.js