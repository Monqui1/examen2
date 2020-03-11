var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  router.get('/users/all', (req, res)=>{
      employeeModel.getEmployees((err, users)=>{
        if(err){
          console.log(err);
          return res.status(500).json({"error":"error"});
        }
        return res.status(200).json(users);
      });
  } );
  router.get('/users/all', (req, res)=>{
      employeeModel.getEmployeesById((err, users)=>{
        if(err){
          console.log(err);
          return res.status(500).json({"error":"error"});
        }
        return res.status(200).json(users);
      });
  } );
  router.get('/users/all', (req, res)=>{
      employeeModel.getEmployeesByCompany((err, users)=>{
        if(err){
          console.log(err);
          return res.status(500).json({"error":"error"});
        }
        return res.status(200).json(users);
      });
  } );
  router.get('/users/all', (req, res)=>{
      employeeModel.getEmployeesByTag((err, users)=>{
        if(err){
          console.log(err);
          return res.status(500).json({"error":"error"});
        }
        return res.status(200).json(users);
      });
  } );
  router.post('/users/new', (req, res)=>{
  var datosEnviados = req.body;
  employeeModel.addEmployeeATag(datosEnviados, (err, addedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({error:'error'});
    }
    return res.status(200).json(addedDoc);
    }); //addNew
});

router.delete('/users/del/:id', (req, res)=>{
  var id = req.params.id;
  employeeModel.removeEmployee(id, (err, deletedDoc)=>{
    if(err){
      console.log(err);
      return res.status(500).json({"error":"error"});
    }
    return res.status(200).json(deletedDoc);
  }); //  deleteByCode
});//delete

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {
    /*
    empModel.xyz( (err, docs)=>{
      return res.status(200).json(docs);
    });
    */
  });// all


  return router;
}

module.exports = initEmployee;
