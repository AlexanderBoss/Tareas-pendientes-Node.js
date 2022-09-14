import { nanoid } from 'nanoid'

// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class Tarea {
    
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = nanoid();
        this.desc = desc;
        this.completadoEn = null;

    }

}



export{
    Tarea
}