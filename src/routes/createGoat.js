import * as goat from '../db/goatModel';

export const creategoat = {
  method: 'post',
  path: '/goat',
  handler: async (req, res) => {
    const newgoat = req.body.goat;
    const { insertedId } = await goat.insertOne(newgoat);

    const goats = await goat.getAll();
    res.status(200);
    res.send({
      goats,
      insertedId,
    });
  },
};
