const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, before, beforeEach, afterEach } = require('mocha');
const getServer = require('../src/index');

const should = chai.should();

chai.use(chaiHttp);

const { Category, User } = require('../src/models');

let server;

describe('Category', function () {
  let categoryName;
  let username = `testuser${Date.now()}`;

  before(async function () {
    server = await getServer;

    const res = await chai
      .request(server)
      .post('/v1/auth/register')
      .send({ username: username, password: 'password' });

    agent.jar.setCookie(`nToken=${res.body.token};`);
  });

  beforeEach(() => {
    categoryName = `TestCategory${Date.now()}`;
  });

  afterEach(async () => {
    await Category.deleteOne({ name: categoryName });
  });

  it('should be able to create a category', async function () {
    const res = await chai
      .request(server)
      .post('/v1/categories')
      .send({ name: categoryName });

    res.should.have.status(201);
    res.body.category.should.have.property('name').eql(categoryName);
    await Category.deleteOne({ _id: res.body.category._id });
  });

  it('should be able to list categories', async function () {
    await chai
      .request(server)
      .post('/v1/categories')
      .send({ name: categoryName });

    const res = await chai
      .request(server)
      .get('/v1/categories');

    res.should.have.status(200);
    res.body.should.be.an('array');
    res.body.length.should.be.above(0);
    await Category.deleteOne({ name: categoryName });
  });

  it('should be able to get a category by id', async function () {
    const postRes = await chai
      .request(server)
      .post('/v1/categories')
      .send({ name: categoryName });

    const categoryId = postRes.body.category._id;

    const getRes = await chai
      .request(server)
      .get(`/v1/categories/${categoryId}`);

    getRes.should.have.status(200);
    getRes.body.should.have.property('name').eql(categoryName);
    await Category.deleteOne({ _id: categoryId });
  });

  it('should be able to update a category', async function () {
    const postRes = await chai
      .request(server)
      .post('/v1/categories')
      .send({ name: categoryName });

    const categoryId = postRes.body.category._id;
    const updatedCategoryName = `${categoryName}_updated`;

    const putRes = await chai
      .request(server)
      .put(`/v1/categories/${categoryId}`)
      .send({ name: updatedCategoryName });

    putRes.should.have.status(200);
    putRes.body.category.should.have.property('name').eql(updatedCategoryName);
    await Category.deleteOne({ _id: categoryId });
  });

  it('should be able to delete a category', async function () {
    const postRes = await chai
      .request(server)
      .post('/v1/categories')
      .send({ name: categoryName });

    const categoryId = postRes.body.category._id;

    const deleteRes = await chai
      .request(server)
      .delete(`/v1/categories/${categoryId}`);

    deleteRes.should.have.status(200);
    deleteRes.body.should.have.property('message').eql('Category deleted successfully!');
  });

  after(async function () {
    await User.deleteOne({ username });
    server.close();
  });
});
