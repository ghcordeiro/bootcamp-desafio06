import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCategoryIDTransaction1589293239150 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumn('transactions', new TableColumn({
      name: 'category_id',
      type: 'uuid',
      isNullable: true,
    }));

    await queryRunner.createForeignKey('transactions', new TableForeignKey({
      columnNames: ['category_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categories',
      name: 'Transaction_idCategories',
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('transactions', 'Transaction_idCategories');
    await queryRunner.dropColumn('transactions', 'category_id');
  }

}
