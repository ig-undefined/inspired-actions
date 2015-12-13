/**
 * Created by Ihar_Cheliadzinski on 12/10/2015.
 */
var config = require('../config');
var Sequelize = require('sequelize');

function connect() {
    var host = config.get('mysql:host')
        , port = config.get('mysql:port')
        , sequelize;

    sequelize = new Sequelize('inspired_actions_test', 'root', 'viacom', {
        host: host,
        port: port,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });
    module.exports.Category =  require('./models/category')(sequelize);
    module.exports.Level = require('./models/level')(sequelize);
    module.exports.Group = require('./models/group')(sequelize);
    module.exports.State = require('./models/state')(sequelize);
    module.exports.Position = require('./models/position')(sequelize);
    module.exports.PositionLevel = require('./models/positionLevel')(sequelize);
    module.exports.Skill = require('./models/skill')(sequelize);
    module.exports.SkillLevel = require('./models/skillLevel')(sequelize);
    module.exports.Course = require('./models/course')(sequelize);
    module.exports.Goal = require('./models/goal')(sequelize);
    module.exports.User = require('./models/user')(sequelize);
    module.exports.UserSkill = require('./models/userSkill')(sequelize);
    module.exports.SkillsLevel = require('./models/skillsLevel')(sequelize);
    module.exports.SkillsLevelsCourse = require('./models/skillsLevelsCourse')(sequelize);
    module.exports.UsersGoal = require('./models/usersGoal')(sequelize);

    sequelize.sync();
}

module.exports.connect = connect;