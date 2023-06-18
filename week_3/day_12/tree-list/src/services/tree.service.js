import { collection, query, getDocs, addDoc } from "firebase/firestore";

import { db } from "../firebase/firebase";

import { Tree } from "../models/Tree";

class TreeService {
  constructor() {
    this.collection = "trees";
  }

  async createTree(tree) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, tree.toJson());
    tree.id = docRef.id;
    return tree;
  }

  async fetchTrees() {
    const collectionRef = collection(db, this.collection);
    const querySnapshot = await getDocs(query(collectionRef));

    const trees =[];

    querySnapshot.forEach((doc) => {
        trees.push(Tree.fromFirebase(doc));
    })
    return trees;
  }
}

const treeService = new TreeService();
export default treeService;
