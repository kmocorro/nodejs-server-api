var configValues = require('./config');

module.exports = {

    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds032340.mlab.com:32340/db_user_info';
    }

}