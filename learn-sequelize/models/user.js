const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				//sequelize가 알아서 id를 기본 키로 연결해준다. 나머지만 설정해주면 됨.
				name: {
					type: Sequelize.STRING(20),
					allowNull: false,
					unique: true,
				},
				age: {
					type: Sequelize.INTEGER.UNSIGNED,
					allowNull: false,
				},
				married: {
					type: Sequelize.BOOLEAN,
					allowNull: false,
				},
				comment: {
					type: Sequelize.TEXT,
					allowNull: true,
				},
				created_at: {
					type: Sequelize.DATE,
					allowNull: false,
					defaultValue: Sequelize.NOW,
				},
			},
			{
				sequelize,
				timestamps: false, // true이면 자동으로 createdAt과 updatedAt column을 추가하여 row가 생성될 때와 수정시간을 자동으로 입력
				underscored: false, // 시퀼라이즈는 기본적으로 테이블명과 col명을 camelCase로 만드는데 true이면 snake_case로 만들어줌.
				modelName: 'User',
				tableName: 'users',
				paranoid: false, // deletedAt이라는 col을 생성하여 삭제시간을 기록. 나중에 이를 통해 복원 가능
				charset: 'utf8',
				collate: 'utf8_general_ci',
			}
		);
	}

	static associate(db) {
		// 1:N 관계에서 User의 row를 가져올 때 연관된 다수의 Comment row를 가져옴
		// foreignKey로 Comment의 commenter가 User의 id로 설정되어 있으므로 id는 sourceKey가 된다.
		db.User.hasMany(db.Comment, { foreignKey: 'commenter', sourceKey: 'id' });
	}
};