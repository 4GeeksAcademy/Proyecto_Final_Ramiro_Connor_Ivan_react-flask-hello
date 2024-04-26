"""empty message

Revision ID: be072f047538
Revises: 382501e995fe
Create Date: 2024-04-26 10:50:21.650971

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'be072f047538'
down_revision = '382501e995fe'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('results', schema=None) as batch_op:
        batch_op.add_column(sa.Column('points', sa.Integer(), nullable=True))
        batch_op.drop_column('wins')
        batch_op.drop_column('losses')
        batch_op.drop_column('rounds_played')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('results', schema=None) as batch_op:
        batch_op.add_column(sa.Column('rounds_played', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('losses', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('wins', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.drop_column('points')

    # ### end Alembic commands ###