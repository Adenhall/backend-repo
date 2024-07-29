import { firestore } from "../config/firebaseConfig";

export class FirestoreService {
  private db = firestore;

  async getCollectionData(collectionName: string) {
    const snapshot = await this.db.collection(collectionName).get();
    return snapshot.docs.map((doc) => doc.data());
  }
}
