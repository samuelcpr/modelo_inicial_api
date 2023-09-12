import { v4 as uuidV4 } from 'uuid'

class Category {
    id?: string;

    name!: string; 

    description!: string;

    created_at!: Date;
constructor(){
    //this utilizado para referenciar o id
    // ex: ! representa uma regra 
    // se não ouver a id 
    if(!this.id){
        this.id = uuidV4();
    }
}
  
}

export {Category}