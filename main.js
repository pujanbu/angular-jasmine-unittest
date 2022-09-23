//Test suite for

describe(`${Person.name} Class`, ()=>{
    let model;
    let mockPersonService;

    beforeEach(()=>{
        const data = {
            firstName:'Pujan',
            middleName: 'Bahadur', 
            lastName: 'Budhathoki',
            id: 1
        };
        mockPersonService = {
            lastId: null,
            user:{},
            getUserById(id){
                this.lastId = id;
                return this.user;
            }
        };
        model = new Person(data, mockPersonService);
    });

    // describe('getMyFullUserData', ()=>{
    //     it('gets user data by id', async ()=>{
    //             //arrange
    //             mockPersonService.lastId = null;
    //             mockPersonService.user = {
    //                 firstName:'Pujan',
    //                 middleName: 'Bahadur', 
    //                 lastName: 'Budhathoki',
    //                 id: 1
    //             };
                
    //             //act
    //             const result = await model.getMyFullUserData();
    //             //assert
    //             expect(mockPersonService.lastId).toBe(1);
    //     });
    // });


    // describe('default values', ()=>{
    //     it('first name defaults to empty string', () =>{
             
    //         //assert model.firstName
    //         expect(model.firstName).toBe('');
    //     });
    
    //     it('last name defaults to empty string', () =>{
          
    //         //assert model.firstName
    //         expect(model.lastName).toBe('');
    //     });
    
    //     it('middle name defaults to empty string', () =>{
            
    //         //assert model.firstName
    //         expect(model.middleName).toBe('');
    //     });
    // });
    
    // describe('full name', ()=>{
    //     beforeEach(()=>{
    //         model = new Person(
    //             { 
    //                 firstName: 'Pujan',
    //                 lastName: 'Budhathoki'
    //             }

    //         );
    //     })
    //     it('middle initial', () =>{
    //         //arrange
    //         model.middleName = "Ram";

    //         //act
    //         const res = model.fullName;

    //         //assert
    //         expect(res).toBe(`${model.firstName} ${model.middleName[0]}. ${model.lastName}`)

             
    //     });
    //     it('with out middle initial', () =>{
    //         const res = model.fullName;
    //         //assert
    //         expect(res).toBe(`${model.firstName} ${model.lastName}`)
    //     })
    // });

    // describe('say my name', ()=>{
    //     it('alerts the full name of user', ()=>{
    //     //arrange
    //     model.firstName = 'John'; 
    //     model.lastName = 'Dutton';
    //     spyOn(window, 'alert');

    //     //act
    //     model.sayMyName();

    //     //assert
    //     expect(window.alert).toHaveBeenCalledWith(model.fullName);
    //     })
        
    // });

    // describe('get code name', ()=>{
    //     it('when confirmed a god',()=>{
    //         //arrange
    //         spyOn(window, 'confirm').and.returnValue(true);

    //         //actual
    //         const result = model.getCodeName();

    //         //assert
    //         expect(result).toBe('TESTINGGod');
    //     });

    //     it('when confirmed not a god',()=>{
    //         //arrange
    //         spyOn(window, 'confirm').and.returnValue(false);

    //         //actual
    //         const result = model.getCodeName();

    //         //assert
    //         expect(result).toBe('Nada no bueno!');
    //     });
    // });

});