const {sequelize,Test,User} = require("../models")

const createTest = async (req) => {
  console.log("service data", req.body)
  try {
    const { tittle,instruction,duration,startTime} = req.body;
    console.log(req.body.data)

    if (!tittle) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "tittle is required",
      });
    }

    if (!instruction) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "instruction is required",
      });
    }

    if (!duration) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "duration is required",
      });
    }
    if (!startTime) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "startTime is required",
        });
      }


 



    const test = await Test.create({ tittle,instruction,duration,startTime});

    return test ;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const getAllExams = async(req) => {
  try{
     const exam = await Test.findAll()
     if(exam){
      return exam
     }
     else{
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "No exam is present",
      });
      
  }
}
  catch(error){
    throw(error)

  }
}

const getExamById = async(req,res) => {
  console.log(req.params.id)
  try{
     const exam = await Test.findByPk(req.params.id);
     if(exam){
      return exam
     }
     else{
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "No exam is present",
      });
     }
  }
  catch(error){
    throw(error)
  }
}
const editExam = async(req,res) => {
  try{
     const user = await userModel.findOne({_id: req.user._id})
     if(user.role === "admin"){
      const exam = await Test.findOne({_id: req.params.id})
      if(exam){
        exam.name = req.body.name;
        exam.duration = req.body.duration;
        exam.category = req.body.category;
        exam.totalMarks = req.body.totalMarks;
        exam.passingMarks = req.body.passingMarks;
        exam.instructions
        exam.save()
       return exam
      }
      else{
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "No exam is present",
        });
      }
     }
     else{
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Cannot update exam details",
      });
     }
  }
  catch(error){
   throw(error)
  }
}
const deleteExam = async(req) => {
  try{
    const user = req.user
    console.log("UUUUUSSSEEERRR",user)
    // console.log("params",req.params.id)
//      const user = await User.findOne({ where: {id: req.user.id} })
//      if(user.role === "admin"){
//       console.log("uesr is admin")

// // Delete everyone named "Jane"
// await User.destroy({
//   where: {
//     firstName: 'Jane',
//   },
// });

      


//       const exam = await Test.destroy({ 
//         where: {
//           id: req.params
//         },
//       })
//       console.log(exam)
//       if(exam){
//         exam.delete()
//        return exam
//       }
//       else{
//         throw Object.assign(new Error(), {
//           name: "BAD_REQUEST",
//           message: "exam doesnot exist",
//         });
//       }
//      }
//      else{
//       throw Object.assign(new Error(), {
//         name: "BAD_REQUEST",
//         message: "Cannot delete exam ",
//       });
     }
  
  catch(error){
   throw(error)
  }
}



// const login = async (payload) => {
//   try {
//     const { email, password } = payload.body;
//     console.log("serviceeeeeeeeeeeeeeeeeeeee",email, password);
//     if (!email || !password) {
//       throw Object.assign(new Error(), {
//         name: "BAD_REQUEST",
//         message: "Email or Password is missing",
//       });
//     }

//     const user = await User.findOne({ where: { email: email } });
//     console.log(user);
//     if (!user) {
//       throw Object.assign(new Error(), {
//         name: "BAD_REQUEST",
//         message: `Email is not registered`,
//       });
//     }

//     const match = await comparePassword(password, user.password);

//     if (!match) {
//       throw Object.assign(new Error(), {
//         name: "UNAUTHORIZED",
//         message: `Password is not correct`,
//       });
//     }

//     const token = JWT.sign({ _id: user._id },"Zenmonk", {
//       expiresIn: "7d",
//     });
    
//     return { user, token };
//   } catch (error) {
//     throw error;
//   }
// };



module.exports = {
  createTest,
  getAllExams,
  getExamById,
  deleteExam,
  editExam,
}