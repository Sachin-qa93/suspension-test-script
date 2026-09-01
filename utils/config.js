module.exports = {

    BO: {

        url: 'https://suspensions.lbhf.gov.uk/bo/control/home',

        username: 'fgladmin',

        password: 't33rtS3!'
    },

    FO: {

        url: 'https://suspensions.lbhf.gov.uk/control/home',

        username: 'sc9542902@gmail.com',

        password: 'Pass@123'
    },
    //Fo order creation data 
    FOOrderData: {
        suspensionReason: 'Access',
        startDate: '26/09/2026',
        endDate: '26/09/2026',
        searchAddress: 'chalkhill road',
         paymentMethod: 'Pay by debit/credit card',
         bayDescription: 'Test '
    },
    orderApproveData: {
        suspensionId: 'HFS0016630',
        
    },
    //Mark as paid data 
  MarkasPaidData: {
    orderId: 'HFS0016732',
    paymentType: 'Pay by debit/credit card',
        paymentRef: 'test 123',
  },
  //bo order creation data
    BOOrderData: {
        customerName: 'Sachin.rathi',
        suspensionReason: 'Access',
        permitNumber: 'test123',
        startDate: '14/09/2026',
        endDate: '14/09/2026',
        searchAddress: 'chalkhill road',
        descriptionText: 'Supercop123',
    },
    
    //user registration data
    registrationData: {
        firstName: 'Pawan',
        lastName: 'rathi',
        contactNumber: '45768976',
        secondaryContactNumber: '3654776',
        companyName: 'onov8',
        email: 'pawan936814@gmail.com',
        password: 'Pass@123',
        repeatPassword: 'Pass@123',
        address: 'W6 9JU',
        repeatEmail: 'pawan936814@gmail.com',
    },
    //FOAmendment data
    foamendmentextendData: {
    suspensionId: 'HFS0016776',
    endDate: '16/09/2026',
    paymentMethod: 'Pay by debit/credit card',
},

foamendmentreduceData: {
    suspensionId: 'HFS0016776',
    endDate: '15/09/2026',
},

// BOAmendment data
boamendmentextendData: {
    orderId: 'HFS0016787',
    endDate: '16/09/2026',
},

boamendmentreduceData: {
    orderId: 'HFS0016754',
    endDate: '14/09/2026',
},


};