const Sequelize = require('sequelize');

module.exports = class Comment extends Sequelize.Model {
	static init(sequelize) {
		return super.init(
			{
				comment: {
					type: Sequelize.STRING(100),
					allowNull: false,
				},
				created_at: {
					type: Sequelize.DATE,
					allowNull: true,
					defaultValue: Sequelize.NOW,
				},
			},
			{
				sequelize,
				timestamps: false,
				modelName: 'Comment',
				tableName: 'comments',
				paranoid: false,
				charset: 'utf8mb4',
				collate: 'utf8mb4_general_ci',
			}
		);
	}

	static associate(db) {
		// 1:N 관계에서 Comment row를 가져올 때 연관된 단 하나의 User row를 가져옴
		// foreignKey로 Comment의 commenter가 User의 id로 설정되어 있으므로 id는 targetKey가 된다.
		db.User.belongsTo(db.User, { foreignKey: 'commenter', targetKey: 'id' });
	}
};