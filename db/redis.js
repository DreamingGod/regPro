var nohm = require('nohm').Nohm;
var redis = require('redis').createClient();

nohm.setClient(redis);

nohm.model('User', {
  properties: {
    name: {
      type: 'string',
      unique: true,
      validations: [
        'notEmpty'
      ]
    },
    email: {
      type: 'string',
      unique: true,
      validations: [
        'email'
      ]
    },
    country: {
      type: 'string',
      defaultValue: 'Tibet',
      validations: [
        'notEmpty'
      ]
    },
    visits: {
      type: function incrVisitsBy(value, key, old) {
        return old + value;
      },
      defaultValue: 0,
      index: true
    }
  },
  methods: {
    getCountryFlag: function () {
      return 'http://example.com/flag_'+this.p('country')+'.png';
    },
  }
});

var user = nohm.factory('User');
user.p({
  name: 'Mark',
  email: 'mark@example.com',
  country: 'Mexico',
  visits: 1
});
user.save(function (err) {
  if (err === 'invalid') {
    console.log('properties were invalid: ', user.errors);
  } else if (err) {
    //console.log(err); // database or unknown error
  } else {
    console.log('saved user! :-)');
    // user.remove(function (err) {
    //   if (err) {
    //     console.log(err); // database or unknown error
    //   } else {
    //     console.log('successfully removed user');
    //   }
    // });
  }
});

// try to load a user from the db
var otherUser = nohm.factory('User', 522, function (err) {
  if (err === 'not found') {
    console.log('no user with id 522 found :-(');
  } else if (err) {
    console.log(err); // database or unknown error
  } else {
    console.log(otherUser.allProperties());
  }
});



