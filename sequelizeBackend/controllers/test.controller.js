const {errorHandler} = require("../lib/utils.js")
const testService = require("../service/test.service.js")

 const createTestController = async (req, res) => {
  try {
    console.log("request agaguuu")
    console.log(req.body)
    const response = await testService.createTest(req);
    console.log(response)

    return res.status(201).send({
      success: true,
      message: 'Test created Successfully',
      test: response.test
    });
  } catch (error) {
    errorHandler(res, error);
  }
}
const getAllTestController = async (req,res) => {
  try{
      const response = await testService.getAllExams(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Exam Fetched succefully',
          Exam: response
      })
  }
  catch(error)
  {

      console.log(error)
      errorHandler(res,error);
  }
}
const deleteTestController = async (req,res) => {
  try{
    console.log("connnnntrolllerrr",req.user)
      const response = await testService.deleteExam(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Exam deleted succefully',
          Exam: response
      })
  }
  catch(error)
  {
    console.log(error)
  }
}
const getTestController = async (req,res) => {
  try{
      const response = await testService.getExamById(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Exam fetched succefully',
          Exam: response
      })
  }
  catch(error)
  {
    console.log(error)
  }
}

const editTestController = async (req,res) => {
  try{
      const response = await testService.editExam(req);
      console.log("response",response)
      return res.status(200).send({
          success:true,
          message: 'Exam updated succefully',
          Exam: response
      })
  }
  catch(error)
  {
    console.log(error);
  }
}
// // POST LOGIN
//  const loginController = async (req, res) => {
//   try {
//     console.log('user')

//     const response = await userService.login(req);

//     console.log('user', response.user)
//     return res.status(200).send({
//       success: true,
//       message: "login successfully",
//       user: response.user,
//       token: response.token,
//     });
//   } catch (error) {
//     console.log(error)
//   }
// }

module.exports = {
  createTestController,
  getAllTestController,
  getTestController,
  deleteTestController,
  editTestController,
}