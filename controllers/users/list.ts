import { RequestHandler } from 'express';
import { FirestoreService } from '../../services/firestore';

const firestoreService = new FirestoreService();

export const listUsers: RequestHandler = async (_req, res) => {
  try {
    const data = await firestoreService.getCollectionData('users');
    res.send(data);
  } catch (error) {
    res.status(500).send('Error retrieving data');
  }
}

