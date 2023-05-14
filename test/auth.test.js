const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe, it, beforeEach, afterEach } = require('mocha');
const getServer = require('../src/index');

const should = chai.should();

chai.use(chaiHttp);


const { User } = require('../src/models');

describe('Auth', function () {
  let username;

  before(async function () {
    const server = await getServer;
    // Agent that will keep track of our cookies
    agent = chai.request.agent(server);
  });

  beforeEach(() => {
    // Generate a unique username for each test
    username = `testuser${Date.now()}`;
  });

  afterEach(async () => {
    // Cleanup the user after each test
    await User.deleteOne({ username });
  });

  it('should not be able to login if user has not registered', async function () {
    const res = await agent
      .post('/v1/auth/login')
      .send({ username: 'wrong', password: 'nope' })

    res.should.have.status(400);
    res.body.should.have.property('message').eql('Invalid username or password!');
    agent.should.not.have.cookie('nToken');
  });


  it('should be able to register', async function () {
    const res = await agent
      .post('/v1/auth/register')
      .send({ username, password: 'password' });

    res.should.have.status(200);
    res.body.should.have.property('message').eql('Register Successful!');
    agent.should.have.cookie('nToken');
  });

  it('should be able to login', async function () {
    await agent
      .post('/v1/auth/register')
      .send({ username, password: 'password' });

    await agent.get('/v1/auth/logout');

    const res = await agent
      .post('/v1/auth/login')
      .send({ username, password: 'password' });

    res.should.have.status(200);
    res.body.should.have.property('message').eql('Login Successful!');
    agent.should.have.cookie('nToken');
  });

  it('should be able to logout', async function () {
    await agent
      .post('/v1/auth/register')
      .send({ username, password: 'password' });

    const res = await agent.get('/v1/auth/logout');

    res.should.have.status(200);
    res.body.should.have.property('message').eql('Bye!');
    agent.should.not.have.cookie('nToken');
  });

  after(function () {
    agent.close();
  });
});
