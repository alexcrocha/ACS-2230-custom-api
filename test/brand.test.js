const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, beforeEach, afterEach } = require('mocha');
const getServer = require('../src/index');

const should = chai.should();

chai.use(chaiHttp);

const { Brand, Category, User } = require('../src/models');

let server;

describe('Brand', function () {
  let categoryName;
  let brandName;
  let categoryId;
  let username = `testuser${Date.now()}`;

  before(async function () {
    server = await getServer;

    const res = await chai
      .request(server)
      .post('/v1/auth/register')
      .send({ username: username, password: 'password' });

    agent.jar.setCookie(`nToken=${res.body.token};`);
  });

  beforeEach(async () => {
    categoryName = `TestCategory${Date.now()}`;
    brandName = `TestBrand${Date.now()}`;
    const category = new Category({ name: categoryName });
    await category.save();
    categoryId = category._id;
  });

  afterEach(async () => {
    await Brand.deleteOne({ name: brandName });
    await Category.deleteOne({ _id: categoryId });
  });

  it('should be able to create a brand for a category', async function () {
    const res = await chai
      .request(server)
      .post(`/v1/categories/${categoryId}/brands`)
      .send({ name: brandName });

    res.should.have.status(201);
    res.body.should.have.property('message').eql('Brand created successfully!');
    res.body.brand.should.have.property('name').eql(brandName);
    await Brand.deleteOne({ _id: res.body.brand._id });
  });

  it('should be able to list brands of a category', async function () {
    await chai
      .request(server)
      .post(`/v1/categories/${categoryId}/brands`)
      .send({ name: brandName });

    const res = await chai
      .request(server)
      .get(`/v1/categories/${categoryId}/brands`);

    res.should.have.status(200);
    res.body.length.should.be.above(0);
    await Brand.deleteOne({ name: brandName });
  });

  it('should be able to get a brand by id', async function () {
    const postRes = await chai
      .request(server)
      .post(`/v1/categories/${categoryId}/brands`)
      .send({ name: brandName });

    const brandId = postRes.body.brand._id;

    const getRes = await chai
      .request(server)
      .get(`/v1/categories/${categoryId}/brands/${brandId}`);

    getRes.should.have.status(200);
    getRes.body.should.have.property('name').eql(brandName);
    await Brand.deleteOne({ name: brandName });
  });

  it('should be able to update a brand', async function () {
    const postRes = await chai
      .request(server)
      .post(`/v1/categories/${categoryId}/brands`)
      .send({ name: brandName });

    const brandId = postRes.body.brand._id;
    const updatedBrandName = `${brandName}_updated}`;

    const putRes = await chai
      .request(server)
      .put(`/v1/categories/${categoryId}/brands/${brandId}`)
      .send({ name: updatedBrandName });

    putRes.should.have.status(200);
    putRes.body.brand.should.have.property('name').eql(updatedBrandName);
    await Brand.deleteOne({ name: updatedBrandName });
  });

  it('should be able to delete a brand', async function () {
    const postRes = await chai
      .request(server)
      .post(`/v1/categories/${categoryId}/brands`)
      .send({ name: brandName });

    const brandId = postRes.body.brand._id;

    const deleteRes = await chai
      .request(server)
      .delete(`/v1/categories/${categoryId}/brands/${brandId}`);

    deleteRes.should.have.status(200);
    deleteRes.body.should.have.property('message').eql('Brand deleted successfully!');
  });

  after(async function () {
    await User.deleteOne({ username });
    server.close();
  });
});
