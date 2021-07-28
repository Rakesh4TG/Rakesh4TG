import login from "../../../POM/PageClasses/registrationLogic";


describe("TEXTILE GENESIS APPLICATION", ()=> {
    
    
    it('Open registeration', ()=>{
   
            login.visit()
            login.clickOnJoinUs()
            login.clickSubmitBtn()
            login.enterCompanyInfo('lee cooper','C034','https://textilegeneis.com','India','38909909','bangalore chamrajpet','delhi','5600178')
            login.enterAdminInfoDetails('rakesh','anand','Genesis@123','Genesis@123')
            login.enterRoleInfoDetails()

        })
    
    })