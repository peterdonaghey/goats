import * as Goat from '../db/goatModel';

export const updateGoat = {
  method: 'put',
  path: '/goat/:id',
  handler: async (req, res) => {
    const goatUpdates = req.body.goat;
    const id = req.params.id;

    const { matchedCount } = await Goat.updateOne(id, goatUpdates);

    if (matchedCount === 0) {
      return res.status(404).send({
        message: 'That goat does not exit.'
      });
    }

    const goats = await Goat.getAll();

    res.status(200).send({
      goats,
    });
  },
};
