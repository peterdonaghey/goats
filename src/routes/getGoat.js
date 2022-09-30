import * as Goat from '../db/goatModel';

export const getGoat = {
  method: 'get',
  path: '/goat/:id',
  handler: async (req, res) => {
    const id = req.params.id
    const goat = await Goat.getOne(id);
    res.status(200);
    res.send({ goat });
  },
};
