const messages = ['wendy','Oscar','Ana','Nicol','Laura','Jessica']

const randomMsg = () => {
  const message = messages[Math.floor(Math.random() * messages.length)]
  console.log(message)
};

module.exports = { randomMsg }
