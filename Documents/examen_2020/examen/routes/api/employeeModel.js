var ObjectID = require('mongodb').ObjectID;
var IndexVerified = false;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('employees');
  var userTemplate = {
    userid: "",
    username: "",
    useremail: "",
    userphine: "",
    userage:"",
    usertag:"",
    usercompany:""
  }
  lib.getEmployees = (handler)=>{
    seguridadCollection.find({}).toArray(handler);
    // obtener todos los documentos
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {

    var query = { "_id": new ObjectID(id) };
    seguridadCollection.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);

    );
  }
    // Obtener un Documento solo mostrar
    // email, phone, name y age
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {

    var query = { "_company": new ObjectID(company) };
    seguridadCollection.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);

    );
  }
    // solo mostrar name, email, company
    return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    //implementar

    var query = { "_tag": new ObjectID(tag) };
    seguridadCollection.findOne(
      query,
      (err, doc) => {
        if (err) {
          return handler(err, null);
        }
        return handler(null, doc);

    );
  }
    // obtener todos los documentos que contenga
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    var { tag, id} = dataToAdd;
    var userToAdd = Object.assign(
      {},
      userTemplate,
      { userid:id,
        usertag: tag

      }
    );
    seguridadCollection.insertOne(userToAdd, (err, rslt)=>{
      if(err){
        return handler(err, null);
      }
      console.log(rslt);
      return handler(null, rslt.ops[0]);
    });
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    var id = req.params.id;
userModel.deleteByCode(id, (err, deletedDoc)=>{
  if(err){
    console.log(err);
    return res.status(500).json({"error":"error"});
  }
  return res.status(200).json(deletedDoc);
}); //  deleteByCode

    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
