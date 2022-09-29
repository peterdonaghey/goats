import * as Goat from '../db/goatModel';

export const createGoat = {
  method: 'post',
  path: '/goat',
  handler: async (req, res) => {
    const newGoat = req.body.goat;
    const { insertedId } = await Goat.insertOne(newGoat);

    const goats = await Goat.getAll();
    res.status(200);
    res.send({
      goats,
      insertedId,
    });
  },
};
