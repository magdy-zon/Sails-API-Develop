var jwt = require('jsonwebtoken')

module.exports = {
  friendlyName: 'Verify JWT',
  description: 'Verify a JWT token.',
  inputs: {
    req: {
      type: 'ref',
      friendlyName: 'Request',
      description: 'A reference to the request object (req).',
      required: true
    },
    res: {
      type: 'ref',
      friendlyName: 'Response',
      description: 'A reference to the response object (res).',
      required: false
    }
  },
  exits: {
    invalid: {
      description: 'Invalid token or no autenthication present.',
    }
  },
  fn: function(inputs, exits) {
    var req = inputs.req
    var res = inputs.res

    if(req.header('Authorization')) {
      var token = req.header('Authorization').split('Bearer ')[1]
      if(!token)
        return exits.invalid()
        console.log('DART')
      return jwt.verify(token, process.env.JWT_KEY, async function(err, payload) {
        if(err || !payload.sub)
          return exits.invalid()
      })
    }
    return exits.invalid()
  }
}
