
const reg = require('./registrationPage')

class registrationLogic{

visit(){

    cy.visit("http://localhost:4200/login")

}

clickOnJoinUs(){

    const join = reg.JoinUs.click()
    
}

clickSubmitBtn(){

    const submit = reg.Submitbtn.contains('Submit').click()
    
}

enterCompanyInfo(v1,v2,v3,v4,v5,v6,v7,v8){

    const cn = reg.CompanyName;
    cn.clear()
    cn.type(v1)

    const tg = reg.TgCode;
    tg.clear()
    tg.type(v2)
 
    const cw = reg.CompanySite;
    cw.clear()
    cw.type(v3)

    const country = reg.CountryDropDown.click();
    // const option="India";
    const selectCountry1 = reg.SelectCountry.contains(new RegExp(`^(${v4})`, "g")).click();
 

    const cphn = reg.CompnmayPhNo;
    cphn.clear()
    cphn.type(v5)

    const ad = reg.Address;
    ad.clear()
    ad.type(v6)

    // const cityName="maharastra";
    const city = reg.City.type(v7).wait(7000).type("{downarrow}{enter}");


    const zip = reg.ZipCode;
    zip.clear()
    zip.type(v8)

    const nextbtn = reg.Nextbtn.contains('Next').click()

    return this;
}

enterAdminInfoDetails(a1,a2,a3,a4){

    const serverId = 'sfh19axi'; // Replace SERVER_ID with an actual Mailosaur Server ID
    const testEmail = `rak11@${serverId}.mailosaur.net`

    const otp = reg.Email.type(testEmail).wait(2000);
    const verifyemailbtn = reg.VerifyEmailBtn.contains("Verify email").click().wait(9000);

                cy.mailosaurGetMessage(serverId, {
                sentTo: testEmail}).then((message) => {
                     cy.log('Message subject:', message.text.body);
       
       
                     const regEx = new RegExp('([0-9]{12})')
                     const matches = regEx.exec(message.text.body)
                    
                     const enterOtp = reg.Otp.type(matches[0]);
                     const submitOtp = reg.SubmitOtp.find("button span").contains("Submit").click();
                   })
    
    const firstname = reg.FirstName.type(a1)
    const lastname = reg.LastName.type(a2)

    const pass = reg.Password.type(a3)
    const conPass = reg.ConfirmPassword.type(a4)
    const adminNextBtn = reg.AdminNextbtn.click()

    return this;
}

enterRoleInfoDetails(){

    const role = reg.SelectRole.wait(2000).check({force : true});
    
    const tc = reg.TermsnConditions.wait(2000).check({force : true});

    const roleBtn = reg.RoleInfoSubmit.find("strong").contains("Submit").click();

    const okayBtn = reg.OkayBtn.find("button span strong").contains("Okay").click();

    return this;

}



}

const login = new registrationLogic();

//export default login;
module.exports = login;