import * as Goat from '../db/goatModel';

export const getGoats = {
  method: 'get',
  path: '/goats',
  handler: async (req, res) => {
    const goats = await Goat.getAll();
    res.status(200);
    res.send({ goats });
  },
};
