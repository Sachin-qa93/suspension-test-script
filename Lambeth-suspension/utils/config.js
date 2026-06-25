module.exports = {

    BO: {

        url: 'https://lbl-epermits-test.farthestgate.co.uk/bo/control/home',

        username: 'fgladmin',

        password: 't33rtS3!'
    },

    FO: {

        url: 'https://lbl-epermits-test.farthestgate.co.uk/suspensions/control/home',

        username: 'sc9542902@gmail.com',

        password: 'Pass@123'
    },
    //Bo order creation data 
    Suspension: {
       customerKeyword: 'sachin.rathi',
        reason: 'DOMESTIC_REMOVE',
        startDate: '29/06/2026',
        startTime: '09:30',
        endDate: '30/06/2026',
        endTime: '18:30',
        searchStreet: 'Mowll Street'
    },

    //Amennd and approve data 
    TestData: {
        suspensionId: 'LSS0135610'
    },


    // fo order creation data 
    Data: {
      suspensionReason: 'DOMESTIC_REMOVE',
       startDate: '13/07/2026',
       startTime: '09:30',
       endDate: '14/07/2026',
       endTime: '18:30',
       searchStreet: 'Mowll Street'
    },
    //order cancel data 
     data: {
        suspensionId: 'LSS0135803',
        canceldate: '25/06/2026'
    },


    //User registration data 
    Registration: {
        firstName: 'dev',
        lastName: 'rathi',
        contactNumber: '67654676656',
        email: 'dev@gmail.com',
        password: 'Pass@123',
        secondaryContactNumber: '1234346565',
        addressLine1: '1 Brixton Hill',
        addressLine2: 'Lambeth',
        city: 'London',
        postalCode: 'SW2 5SG'
    }
};