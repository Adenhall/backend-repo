import { Router } from 'express';
import { FirestoreService } from '../services/firestore';

const router = Router();
const firestoreService = new FirestoreService();

router.get('/data', async (req, res) => {
  try {
    const data = await firestoreService.getCollectionData('users');
    res.send(data);
  } catch (error) {
    res.status(500).send('Error retrieving data');
  }
});

export default router;
