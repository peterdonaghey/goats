import { ObjectId } from 'mongodb';
import { collection } from "./connect"

export const insertOne = async (goat) => {
  const goats = await collection('goats');
  return await goats.insertOne(goat);
}

export const getAll = async () => {
  const goats = await collection('goats');
  return await goats.find({}).toArray();
};

export const getOne = async (goatId) => {
  const goats = await collection('goats');
  return await goats.findOne({ _id: ObjectId(goatId) });
};

export const deleteOne = async (goatId) => {
  const goats = await collection('goats');
  return await goats.deleteOne({ _id: ObjectId(goatId) });
};
