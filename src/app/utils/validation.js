module.exports = {
    regularExpressions: [
        /*DUI*/         /^[\d]{8}-[\d]{1}$/g,
        /*Telefono*/    /^[762]{1}[\d]{3}-[\d]{4}$/g,
        /*Correo*/      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g,
        /*Nombres*/     /^([a-zA-Z][\s]?){5,}$/gim
    ],
    allUserCommonDataExist: function(obj){
        if(
            obj.nombre &&
            obj.apellido &&
            obj.correo &&
            obj.password
        ) return true;
        return false;
    },
    allUserCommonDataValidate: function(obj){
        let val = this.regularExpressions;
        let instances = {
            nombre: new RegExp(val[3]),
            apellido: new RegExp(val[3]),
            correo: new RegExp(val[2])
        }
        if(obj.password != undefined){
            if(
                instances.nombre.exec(obj.nombre) &&
                instances.apellido.exec(obj.apellido) &&
                instances.correo.exec(obj.correo)
            ) return true;
            return false;
        } return false;
    }
}