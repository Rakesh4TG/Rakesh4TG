
class Registration{
    
    constructor(){
        this.joinUs = "button.editBtn.mat-raised-button.mat-button-base.ng-star-inserted"
        this.submitbtn = "strong"

        //company info 
        this.companyName = "#mat-input-1"
        this.tgCode = "#mat-input-2"
        this.companySite = "#mat-input-3"

        this.countrydrpdown = ".mat-select-placeholder.ng-tns-c5-7.ng-star-inserted"
        this.selectCountry = ".labelFonts.mat-option.ng-star-inserted>span"

        this.companyPhno = "#phoneNumberExpand"
        this.address = "#mat-input-4"

        this.cityDropdown = "#pac"
        this.zipCode = "#zipCode"

        this.nxtBtn = "strong"

        //Admin info
        this.email = "#mat-input-25"
        this.verifyEmailBtn = "strong"

        this.otp = "#mat-input-27"
        this.submitOtp = '.modal-content'

        this.firstName = "#mat-input-29";
        this.lastName = "#mat-input-31";
        this.pwd = "#mat-input-32";
        this.Cpwd = "#mat-input-33";
 
        this.nextAdminInfoBtn = "#adminInfoNext3";

        //Role info
        this.selectRole = "#mat-checkbox-8-input";
        this.termsnConditions = "#mat-checkbox-17-input";
        this.roleSubmit = ".text-left.editBtn.mat-raised-button.mat-button-base";
        this.okayBtn = ".modal-content"

    }

    get JoinUs(){
        return cy.get(this.joinUs);

    }
    get Submitbtn(){
        return cy.get(this.submitbtn);
    }

    get CompanyName(){
        return cy.get(this.companyName);

    }
    get TgCode(){
        return cy.get(this.tgCode);
    }

    get CompanySite(){
        return cy.get(this.companySite);

    }
    get CountryDropDown(){
        return cy.get(this.countrydrpdown);
    }

    get SelectCountry(){
        return cy.get(this.selectCountry);

    }
    get CompnmayPhNo(){
        return cy.get(this.companyPhno);
    }

    get Address(){
        return cy.get(this.address);

    }

    get City(){
        return cy.get(this.cityDropdown);
    }

    get ZipCode(){
        return cy.get(this.zipCode)

    }
    get Nextbtn(){
        return cy.get(this.nxtBtn);
    }

    get Email(){
        return cy.get(this.email);
    }

    get VerifyEmailBtn(){
        return cy.get(this.verifyEmailBtn)
    }

    get Otp(){
        return cy.get(this.otp);
    }
        
    get SubmitOtp(){
        return cy.get(this.submitOtp)
    }

    get FirstName(){
        return cy.get(this.firstName);
    }
    get LastName(){
        return cy.get(this.lastName);
    }
        
    get Password(){
        return cy.get(this.pwd);
    }
        
    get ConfirmPassword(){
        return cy.get(this.Cpwd);
    }
    get AdminNextbtn()
    {
        return cy.get(this.nextAdminInfoBtn)
    }

    get SelectRole(){
        return cy.get(this.selectRole)
    }

    get TermsnConditions(){
        return cy.get(this.termsnConditions)
    }

    get RoleInfoSubmit(){
        return cy.get(this.roleSubmit)
    }

    get OkayBtn(){
        return cy.get(this.okayBtn)
    }
}

const reg = new Registration();

//export default reg;
module.exports = reg;
      
      
 
     




