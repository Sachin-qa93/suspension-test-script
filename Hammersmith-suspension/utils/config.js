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
        startDate: '26/07/2026',
        endDate: '26/07/2026',
        searchAddress: 'chalkhill road',
         paymentMethod: 'Pay by debit/credit card',
         bayDescription: 'Test '
    },
    orderApproveData: {
        suspensionId: 'HFS0010816',
        
    },
    //Mark as paid data 
  MarkasPaidData: {
    orderId: 'HFS0010816',
    paymentType: 'Pay by debit/credit card',
        paymentRef: 'test 123',
  },
  //bo order creation data
    BOOrderData: {
        customerName: 'Sachin.rathi',
        suspensionReason: 'Access',
        permitNumber: 'test123',
        startDate: '18/07/2026',
        endDate: '18/07/2026',
        searchAddress: 'chalkhill road',
        descriptionText: 'Supercop123',
    },
    
    //user registration data
    registrationData: {
        firstName: 'vijay',
        lastName: 'rathi',
        contactNumber: '84565476',
        secondaryContactNumber: '86567656',
        companyName: 'onov8',
        email: 'vijay936814@gmail.com',
        password: 'Test@123',
        repeatPassword: 'Test@123',
        address: 'W6 9JU',
        repeatEmail: 'vijay936814@gmail.com',
    },
    //FOAmendment data
    foamendmentextendData: {
    suspensionId: 'HFS0010736',
    endDate: '06/08/2026',
    paymentMethod: 'Pay by debit/credit card',
},

foamendmentreduceData: {
    suspensionId: 'HFS0010736',
    endDate: '05/08/2026',
},

// BOAmendment data
boamendmentextendData: {
    orderId: 'HFS0010816',
    endDate: '13/08/2026',
},

boamendmentreduceData: {
    orderId: 'HFS0010816',
    endDate: '05/08/2026',
},


};