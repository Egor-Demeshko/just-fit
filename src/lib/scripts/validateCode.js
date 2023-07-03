export function validateCode(confirmationResult, smsCode){
    return new Promise((resolve, reject) => {
  
        confirmationResult.confirm(smsCode)
                   .then( async (result) => {
                      if(result.user){
                      let userCredential = result;

                      /*console.log("function validateCode: Credentials: ", userCredential);*/

                      resolve(userCredential);
                      }
                    })
                    .catch( (error) => {
                      /*console.log("in validatecode error", error.message);
                      console.log(error.message.includes("invalid-verification-code"));*/
                      //TODO показать сообщение об ошибке
                      reject(error);
                    } );
  
      });
}