class registrationLocators{

    constructor(){

        //Join us locators
        this.joinUs = "button.editBtn.mat-raised-button.mat-button-base.ng-star-inserted"
        this.submitbtn = "strong"

        //Company info locators
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
    }
}

const regLoc = new registrationLocators();

//export default regLoc;
module.exports = regloc;