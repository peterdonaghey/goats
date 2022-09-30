import * as Goat from '../db/goatModel';

export const deleteGoat = {
  method: 'delete',
  path: '/goat/:id',
  handler: async (req, res) => {
    const id = req.params.id;

    await Goat.deleteOne(id);

    res.status(200);
    res.send({
      deleted: true,
    });
  },
};
