export class Tree{
    constructor(id, name, downloadURL){
        this.id = id;
        this.name = name;
        this.downloadURL = downloadURL;
    }
    
    toJson() {
        return {
          name: this.name,
          downloadURL: this.downloadURL,
        };
      }
    
      static fromFirebase(doc) {
        const data = doc.data();
        return new Tree({
          id: doc.id,
          name: data.name,
          downloadUrl: data.downloadURL,
        });
      }
    }